import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const DATA_FILE = path.join(__dirname, 'cbt_database.json');

  app.use(express.json({ limit: '50mb' }));

  // Gemini Client Initialization with telemetry header
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // Get current shared data
  app.get('/api/cbt-data', (req, res) => {
    if (fs.existsSync(DATA_FILE)) {
      try {
        const raw = fs.readFileSync(DATA_FILE, 'utf-8');
        return res.json({ success: true, data: JSON.parse(raw) });
      } catch (err) {
        console.error('Error reading data file', err);
      }
    }
    return res.json({ success: false, data: null });
  });

  // Save/sync shared data from any device (Teacher PC or Student Phone)
  app.post('/api/cbt-data', (req, res) => {
    try {
      const { data } = req.body;
      if (data && typeof data === 'object') {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
        return res.json({ success: true, message: 'Data synced successfully' });
      }
      return res.status(400).json({ success: false, message: 'Invalid data format' });
    } catch (err) {
      console.error('Error writing data file', err);
      return res.status(500).json({ success: false, error: String(err) });
    }
  });

  // AI Assistant endpoint: Generate questions or question explanations with High Thinking Mode
  app.post('/api/ai/generate-questions', async (req, res) => {
    if (!ai) {
      return res.status(503).json({
        success: false,
        error: 'Layanan AI belum dikonfigurasi dengan GEMINI_API_KEY.',
      });
    }

    const { subject, classLevel, topic, count = 3, type = 'pg' } = req.body;
    const prompt = `Anda adalah seorang guru ahli di Indonesia yang menyusun soal ujian CBT bermutu tinggi (HOTS & Berpikir Komputasional jika informatika).
Buatlah ${count} butir soal untuk mata pelajaran "${subject || 'Informatika'}", tingkat "${classLevel || 'Kelas 7'}", topik "${topic || 'Umum'}", dengan tipe soal "${type}".

Format keluaran HARUS berupa JSON array murni tanpa markdown formatting pembungkus seperti \`\`\`json.
Setiap elemen array memiliki struktur:
{
  "type": "${type}",
  "question": "teks pertanyaan lengkap",
  "options": ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
  "answer": "indeks angka 0-3 untuk pg, atau Benar/Salah untuk bs, atau kata kunci untuk isian",
  "score": 25,
  "explanation": "pembahasan singkat"
}`;

    try {
      // First attempt with gemini-4-argon with HIGH thinking level as requested
      const response = await ai.models.generateContent({
        model: 'gemini-4-argon',
        contents: prompt,
        config: {
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.HIGH,
          },
        },
      });

      const text = response.text || '';
      const cleanJson = text.replace(/^```json\s*/, '').replace(/```\s*$/, '').trim();
      const parsed = JSON.parse(cleanJson);
      return res.json({ success: true, questions: parsed });
    } catch (err) {
      console.warn('Gemini 4 Argon failed, falling back to gemini-3.8-flash:', err);
      try {
        const fallbackResponse = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
        });
        const text = fallbackResponse.text || '';
        const cleanJson = text.replace(/^```json\s*/, '').replace(/```\s*$/, '').trim();
        const parsed = JSON.parse(cleanJson);
        return res.json({ success: true, questions: parsed });
      } catch (fallbackErr) {
        console.error('Gemini fallback failed:', fallbackErr);
        return res.status(500).json({
          success: false,
          error: 'Gagal membuat soal dengan AI: ' + String(fallbackErr),
        });
      }
    }
  });

  if (process.env.NODE_ENV === 'production' && fs.existsSync(path.join(__dirname, 'dist'))) {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
