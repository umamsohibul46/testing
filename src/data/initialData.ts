import { AppData, Exam, Question, TeacherAccount } from '../types';

export const initialBankQuestions: Question[] = [
  // Kelas 7 - 25 Butir Soal Informatika Lengkap
  {
    id: 'bq-7-1',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Apa yang dimaksud dengan Berpikir Komputasional (Computational Thinking)?',
    options: [
      'Kemampuan memprogram komputer menggunakan bahasa biner secara manual',
      'Metode pemecahan masalah dengan menerapkan teknik dan konsep ilmu komputer',
      'Keahlian dalam merakit komponen fisik komputer dan instalasi kabel',
      'Kemampuan bermain game edukasi komputer dengan skor tertinggi'
    ],
    answer: '1',
    score: 4,
    explanation: 'Computational thinking adalah pendekatan pemecahan masalah yang mengadopsi cara berpikir ilmuwan komputer.'
  },
  {
    id: 'bq-7-2',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'bs',
    question: 'Dekomposisi adalah teknik memecah masalah yang kompleks menjadi bagian-bagian yang lebih kecil dan mudah dikelola.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 4,
    explanation: 'Dekomposisi merupakan salah satu dari 4 pilar computational thinking.'
  },
  {
    id: 'bq-7-3',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Proses mengidentifikasi pola kesamaan atau keteraturan pada data disebut...',
    options: ['Abstraksi', 'Pengenalan Pola (Pattern Recognition)', 'Dekomposisi', 'Algoritma'],
    answer: '1',
    score: 4,
    explanation: 'Pattern recognition mengenali pola keteraturan untuk mempermudah solusi.'
  },
  {
    id: 'bq-7-4',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'isian',
    question: 'Sebutkan 1 contoh perangkat keras (hardware) yang berfungsi sebagai media masukan (input device) pada komputer!',
    options: [],
    answer: 'Keyboard',
    score: 4,
    explanation: 'Contoh input device: Keyboard, Mouse, Scanner, Mikrofon.'
  },
  {
    id: 'bq-7-5',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Pilar Berpikir Komputasional yang bertujuan untuk menyaring informasi yang relevan dan mengabaikan detail yang tidak penting disebut...',
    options: ['Abstraksi', 'Algoritma', 'Dekomposisi', 'Pengenalan Pola'],
    answer: '0',
    score: 4,
    explanation: 'Abstraksi memusatkan perhatian pada aspek terpenting dari masalah.'
  },
  {
    id: 'bq-7-6',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'bs',
    question: 'Algoritma adalah urutan langkah-langkah logis dan sistematis yang disusun untuk menyelesaikan suatu permasalahan.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 4,
    explanation: 'Algoritma harus jelas, berurutan, dan memiliki akhir yang terdefinisi.'
  },
  {
    id: 'bq-7-7',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Komponen perangkat keras utama yang bertindak sebagai "otak" pemroses data dan instruksi komputer adalah...',
    options: ['Power Supply', 'Hard Disk Drive', 'CPU (Central Processing Unit)', 'Motherboard'],
    answer: '2',
    score: 4,
    explanation: 'CPU mengeksekusi instruksi program dan mengolah data komputasi.'
  },
  {
    id: 'bq-7-8',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Media penyimpanan data permanen (sekunder) yang menggunakan chip memori flash tanpa piringan berputar pada komputer modern disebut...',
    options: ['RAM', 'SSD (Solid State Drive)', 'ROM', 'Cache Memory'],
    answer: '1',
    score: 4,
    explanation: 'SSD memiliki kecepatan baca-tulis jauh lebih tinggi dibanding HDD konvensional.'
  },
  {
    id: 'bq-7-9',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'bs',
    question: 'RAM (Random Access Memory) bersifat volatile, artinya semua data yang tersimpan di dalamnya akan hilang seketika saat komputer dimatikan atau kehilangan daya listrik.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 4,
    explanation: 'RAM hanya menyimpan instruksi program yang sedang aktif berjalan.'
  },
  {
    id: 'bq-7-10',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Program perangkat lunak mendasar yang bertugas mengelola seluruh perangkat keras dan menjadi fondasi jalannya program aplikasi lain disebut...',
    options: ['Sistem Operasi (Operating System)', 'Aplikasi Web Browser', 'Anti-Virus', 'Bahasa Pemrograman'],
    answer: '0',
    score: 4,
    explanation: 'Contoh sistem operasi: Windows, Linux, macOS, Android.'
  },
  {
    id: 'bq-7-11',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Berikut ini yang merupakan contoh perangkat lunak aplikasi pengolah kata (word processor) adalah...',
    options: ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Microsoft Access'],
    answer: '1',
    score: 4,
    explanation: 'Microsoft Word dan Google Docs digunakan untuk mengetik dokumen teks.'
  },
  {
    id: 'bq-7-12',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Jaringan komputer global berskala dunia yang menghubungkan jutaan komputer menggunakan protokol internet TCP/IP adalah...',
    options: ['LAN (Local Area Network)', 'MAN (Metropolitan Area Network)', 'PAN (Personal Area Network)', 'Internet (Interconnected Network)'],
    answer: '3',
    score: 4,
    explanation: 'Internet adalah jaringan global raksasa terbuka.'
  },
  {
    id: 'bq-7-13',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Perangkat keras keluaran (output device) yang berfungsi menampilkan antarmuka visual grafik sistem operasi kepada pengguna adalah...',
    options: ['Scanner', 'Keyboard', 'Monitor', 'Mouse'],
    answer: '2',
    score: 4,
    explanation: 'Monitor menampilkan output grafis dan teks secara visual.'
  },
  {
    id: 'bq-7-14',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Kombinasi tombol pintas (shortcut) keyboard standar yang digunakan untuk menyimpan (Save) dokumen yang sedang diedit adalah...',
    options: ['Ctrl + S', 'Ctrl + C', 'Ctrl + V', 'Ctrl + Z'],
    answer: '0',
    score: 4,
    explanation: 'Ctrl + S adalah shortcut universal untuk Save.'
  },
  {
    id: 'bq-7-15',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Format ekstensi file standar yang dihasilkan oleh dokumen pengolah kata Microsoft Word modern adalah...',
    options: ['.xlsx', '.docx', '.pptx', '.mp3'],
    answer: '1',
    score: 4,
    explanation: '.docx adalah format file dokumen Word XML.'
  },
  {
    id: 'bq-7-16',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Tindakan menyalin karya atau teks orang lain tanpa mencantumkan sumber rujukan dan mengklaimnya sebagai karya ciptaan sendiri disebut...',
    options: ['Kolaborasi', 'Sintesis', 'Plagiarisme', 'Sitasi'],
    answer: '2',
    score: 4,
    explanation: 'Plagiarisme melanggar etika akademis dan hak cipta karya intelektual.'
  },
  {
    id: 'bq-7-17',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'bs',
    question: 'Kata sandi (password) akun yang kuat sebaiknya memadukan minimal 8 karakter yang terdiri dari huruf besar, huruf kecil, angka, serta simbol khusus unik.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 4,
    explanation: 'Kombinasi karakter beragam mempersulit serangan brute-force.'
  },
  {
    id: 'bq-7-18',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Perangkat lunak penjelajah web (web browser) yang digunakan untuk mengunjungi situs internet adalah...',
    options: ['Google Chrome', 'Adobe Photoshop', 'CorelDRAW', 'VLC Media Player'],
    answer: '0',
    score: 4,
    explanation: 'Google Chrome, Firefox, Safari, Edge merupakan web browser.'
  },
  {
    id: 'bq-7-19',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Satuan ukuran data terkecil dalam sistem komputasi digital biner yang bernilai 0 atau 1 disebut...',
    options: ['Byte', 'Kilobyte', 'Megabyte', 'Bit'],
    answer: '3',
    score: 4,
    explanation: 'Bit (Binary Digit) adalah unit satuan terkecil. 1 Byte = 8 Bit.'
  },
  {
    id: 'bq-7-20',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Perangkat keras keluaran yang berfungsi mencetak teks dan gambar dari komputer ke media fisik kertas adalah...',
    options: ['Proyektor', 'Printer', 'Plotter Audio', 'Mikrofon'],
    answer: '1',
    score: 4,
    explanation: 'Printer mencetak dokumen digital ke media kertas fisik.'
  },
  {
    id: 'bq-7-21',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: `Perhatikan data spesifikasi komputer berikut:
- Prosesor: Intel Core i5 3.2 GHz
- RAM: 16 GB DDR4
- Media Penyimpanan: SSD 512 GB NVMe
- Layar: 15.6 inci Full HD

Berdasarkan data spesifikasi di atas, komponen yang berfungsi sebagai tempat penyimpanan data sistem dan file secara permanen adalah...`,
    options: ['Intel Core i5 3.2 GHz', 'SSD 512 GB NVMe', 'RAM 16 GB DDR4', 'Layar 15.6 inci Full HD'],
    answer: '1',
    score: 4,
    explanation: 'SSD 512 GB adalah perangkat media penyimpanan sekunder permanen.'
  },
  {
    id: 'bq-7-22',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Layanan surat elektronik yang memungkinkan pengiriman pesan teks dan dokumen melalui internet secara cepat adalah...',
    options: ['FTP', 'VoIP', 'E-mail (Electronic Mail)', 'IRC'],
    answer: '2',
    score: 4,
    explanation: 'E-mail adalah surat elektronik berbasis jaringan internet.'
  },
  {
    id: 'bq-7-23',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'bs',
    question: 'Kabel USB (Universal Serial Bus) adalah salah satu jenis standar konektor antarmuka yang umum digunakan untuk menghubungkan perangkat periferal seperti mouse, keyboard, dan printer ke komputer.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 4,
    explanation: 'USB adalah standar universal koneksi periferal komputer.'
  },
  {
    id: 'bq-7-24',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Informasi atau berita bohong yang sengaja disebarluaskan di media sosial tanpa dasar kebenaran untuk menyesatkan masyarakat disebut...',
    options: ['Hoaks (Hoax)', 'Enkripsi', 'Phishing', 'Spam'],
    answer: '0',
    score: 4,
    explanation: 'Hoaks adalah berita palsu yang sengaja disebar untuk menipu atau memprovokasi.'
  },
  {
    id: 'bq-7-25',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: `Perhatikan Tabel Katalog Aksesori berikut untuk menjawab Soal No. 25:
Nama Aksesori\tWarna\tJumlah\tKategori\tHarga
Jepit Pita\tPink\t4\tRambut\tRp 15.000
Kacamata\tHitam\t1\tMata\tRp 30.000
Gelang Manik\tPink\t5\tTangan\tRp 10.000
Cincin Bintang\tPink\t2\tJari\tRp 25.000

Berdasarkan data tabel di atas, aksesori manakah yang memiliki stok jumlah terbanyak?`,
    options: ['Jepit Pita', 'Kacamata', 'Gelang Manik', 'Cincin Bintang'],
    answer: '2',
    score: 4,
    explanation: 'Gelang Manik memiliki stok terbanyak yaitu 5 buah (kategori Tangan).'
  },

  // Kelas 8 - Algoritma & Pemrograman Visual
  {
    id: 'bq-8-1',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 8',
    type: 'pg',
    question: 'Urutan instruksi logis dan sistematis yang disusun untuk menyelesaikan suatu masalah disebut...',
    options: ['Variabel', 'Algoritma', 'Sistem Operasi', 'Kompilator'],
    answer: '1',
    score: 25
  },
  {
    id: 'bq-8-2',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 8',
    type: 'isian',
    question: 'Aplikasi pemrograman visual berbasis blok grafis yang dikembangkan oleh MIT Media Lab adalah...',
    options: [],
    answer: 'Scratch',
    score: 25
  },
  {
    id: 'bq-8-3',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 8',
    type: 'bs',
    question: 'Blok perulangan (loop) pada Scratch berfungsi untuk mengeksekusi sekumpulan instruksi berulang kali tanpa harus menulis ulang kode.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 25
  },
  {
    id: 'bq-8-4',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 8',
    type: 'pg',
    question: 'Struktur kontrol yang digunakan untuk mengambil keputusan berdasarkan kondisi benar (true) atau salah (false) adalah...',
    options: ['Perulangan (Loop)', 'Percabangan (If-Else)', 'Fungsi (Function)', 'Variabel Global'],
    answer: '1',
    score: 25
  },

  // Kelas 9 - Jaringan Komputer & Internet
  {
    id: 'bq-9-1',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 9',
    type: 'pg',
    question: 'Topologi jaringan di mana semua komputer terhubung ke satu perangkat konsentrator sentral (switch/hub) disebut...',
    options: ['Topologi Bus', 'Topologi Ring', 'Topologi Star (Bintang)', 'Topologi Mesh'],
    answer: '2',
    score: 25
  },
  {
    id: 'bq-9-2',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 9',
    type: 'bs',
    question: 'Router adalah perangkat jaringan yang bertugas meneruskan paket data antar dua atau lebih jaringan komputer yang berbeda.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 25
  },
  {
    id: 'bq-9-3',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 9',
    type: 'pg',
    question: 'Protokol aman yang mengenkripsi komunikasi data antara browser pengguna dan web server adalah...',
    options: ['HTTP', 'FTP', 'HTTPS', 'Telnet'],
    answer: '2',
    score: 25
  },
  {
    id: 'bq-9-4',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 9',
    type: 'isian',
    question: 'Alamat numerik unik yang mengidentifikasi setiap perangkat di jaringan internet (contoh format IPv4: 192.168.1.1) disebut...',
    options: [],
    answer: 'IP Address',
    score: 25
  },

  // Kelas 10 - Sistem Komputer & Analisis Data
  {
    id: 'bq-10-1',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 10',
    type: 'pg',
    question: 'Komponen CPU yang bertanggung jawab melakukan operasi perhitungan matematis dan perbandingan logis adalah...',
    options: ['Control Unit (CU)', 'Arithmetic Logic Unit (ALU)', 'Register Cache', 'Power Supply'],
    answer: '1',
    score: 25
  },
  {
    id: 'bq-10-2',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 10',
    type: 'pg',
    question: 'Konversi bilangan biner 1011 ke dalam sistem bilangan desimal adalah...',
    options: ['9', '11', '13', '15'],
    answer: '1',
    score: 25,
    explanation: '1*8 + 0*4 + 1*2 + 1*1 = 11'
  },
  {
    id: 'bq-10-3',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 10',
    type: 'bs',
    question: 'RAM (Random Access Memory) bersifat volatile, artinya data di dalamnya akan hilang saat aliran daya listrik dimatikan.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 25
  },
  {
    id: 'bq-10-4',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 10',
    type: 'isian',
    question: 'Ekstensi file tabel lembar kerja berbasis nilai terpisah koma yang umum digunakan dalam pertukaran data analitik adalah...',
    options: [],
    answer: '.csv',
    score: 25
  },

  // Kelas 11 - Algoritma Lanjut & Struktur Data
  {
    id: 'bq-11-1',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 11',
    type: 'pg',
    question: 'Struktur data linier yang beroperasi dengan prinsip LIFO (Last In First Out) adalah...',
    options: ['Queue (Antrean)', 'Stack (Tumpukan)', 'Binary Tree', 'Graph Berbobot'],
    answer: '1',
    score: 25
  },
  {
    id: 'bq-11-2',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 11',
    type: 'bs',
    question: 'Queue (Antrean) mengimplementasikan mekanisme FIFO (First In First Out), elemen yang pertama masuk akan pertama kali diproses keluar.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 25
  },
  {
    id: 'bq-11-3',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 11',
    type: 'pg',
    question: 'Algoritma pencarian yang bekerja dengan membagi ruang pencarian menjadi dua bagian secara iteratif pada data yang sudah terurut adalah...',
    options: ['Linear Search', 'Binary Search', 'Bubble Sort', 'Breadth-First Search'],
    answer: '1',
    score: 25
  },
  {
    id: 'bq-11-4',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 11',
    type: 'uraian',
    question: 'Jelaskan perbedaan mendasar antara struktur data Stack dan Queue beserta contoh penerapannya dalam sistem komputasi!',
    options: [],
    answer: 'Stack LIFO (Undo history), Queue FIFO (Printer spooler)',
    score: 25
  },

  // Kelas 12 - Dampak Sosial & Keamanan Informasi
  {
    id: 'bq-12-1',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 12',
    type: 'pg',
    question: 'Serangan siber di mana pelaku menyamar sebagai entitas terpercaya melalui pesan palsu untuk memancing korban memberikan kredensial rahasia disebut...',
    options: ['Distributed Denial of Service (DDoS)', 'Phishing', 'SQL Injection', 'Man-In-The-Middle'],
    answer: '1',
    score: 25,
    teacherUsername: 'sohibul',
    teacherName: 'SOHIBUL UMAM S.Kom'
  },
  {
    id: 'bq-12-2',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 12',
    type: 'bs',
    question: 'Autentikasi Dua Faktor (2FA / Two-Factor Authentication) meningkatkan keamanan akun secara signifikan dibandingkan hanya mengandalkan kata sandi tunggal.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 25,
    teacherUsername: 'sohibul',
    teacherName: 'SOHIBUL UMAM S.Kom'
  },
  {
    id: 'bq-12-3',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 12',
    type: 'pg',
    question: 'Undang-undang di Indonesia yang mengatur tentang informasi dan transaksi elektronik serta tindak pidana siber adalah...',
    options: ['UU Ketenagakerjaan', 'UU ITE (Informasi dan Transaksi Elektronik)', 'UU Hak Cipta', 'UU Perlindungan Konsumen'],
    answer: '1',
    score: 25,
    teacherUsername: 'sohibul',
    teacherName: 'SOHIBUL UMAM S.Kom'
  },
  {
    id: 'bq-12-4',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 12',
    type: 'uraian',
    question: 'Mengapa jejak digital (digital footprint) penting untuk dikelola secara bijak, dan apa dampaknya terhadap privasi seseorang di masa depan?',
    options: [],
    answer: 'Jejak digital bersifat permanen dan dapat memengaruhi reputasi serta keamanan data pribadi.',
    score: 25,
    teacherUsername: 'sohibul',
    teacherName: 'SOHIBUL UMAM S.Kom'
  },

  // ==========================================
  // BANK SOAL: BAHASA INDONESIA
  // Guru Pengampu: Dra. Hj. Siti Rahma M.Pd (guru_indo)
  // ==========================================
  {
    id: 'bq-indo-7-1',
    subject: 'Bahasa Indonesia',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: `Bacalah kutipan teks berikut:
"Hutan mangrove memiliki peranan ekologis yang sangat vital bagi kawasan pesisir. Akar tunjangnya yang rapat mampu menahan hempasan ombak tsunami serta mencegah abrasi pantai. Selain itu, kawasan ini menjadi habitat berkembang biak berbagai jenis ikan dan kepiting bakau."

Ide pokok paragraf di atas adalah...`,
    options: [
      'Bentuk akar tunjang pada tanaman mangrove',
      'Peranan ekologis hutan mangrove bagi kawasan pesisir',
      'Keanekaragaman jenis ikan dan kepiting di pesisir',
      'Penyebab abrasi pantai di kawasan pesisir laut'
    ],
    answer: '1',
    score: 25,
    explanation: 'Kalimat utama berada di awal paragraf (deduktif) yang menjelaskan peranan ekologis hutan mangrove.',
    teacherUsername: 'guru_indo',
    teacherName: 'Dra. Hj. Siti Rahma M.Pd'
  },
  {
    id: 'bq-indo-7-2',
    subject: 'Bahasa Indonesia',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Urutan struktur teks Laporan Hasil Observasi (LHO) yang sistematis dan benar adalah...',
    options: [
      'Deskripsi Bagian - Pernyataan Umum - Deskripsi Manfaat',
      'Pernyataan Umum (Klasifikasi) - Deskripsi Bagian - Deskripsi Manfaat',
      'Orientasi - Komplikasi - Resolusi - Koda',
      'Tesis - Rangkaian Argumen - Penegasan Ulang'
    ],
    answer: '1',
    score: 25,
    explanation: 'Struktur baku teks LHO: Definisi Umum/Klasifikasi, Deskripsi Bagian, dan Deskripsi Manfaat.',
    teacherUsername: 'guru_indo',
    teacherName: 'Dra. Hj. Siti Rahma M.Pd'
  },
  {
    id: 'bq-indo-7-3',
    subject: 'Bahasa Indonesia',
    classLevel: 'Kelas 7',
    type: 'bs',
    question: 'Kalimat "Pucuk cemara melambai-lambai memanggil sang mentari pagi" menggunakan gaya bahasa (majas) personifikasi karena mengumpamakan benda mati seolah memiliki sifat hidup manusia.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 25,
    explanation: 'Personifikasi melekatkan sifat atau tindakan manusia pada benda mati/tumbuhan.',
    teacherUsername: 'guru_indo',
    teacherName: 'Dra. Hj. Siti Rahma M.Pd'
  },
  {
    id: 'bq-indo-7-4',
    subject: 'Bahasa Indonesia',
    classLevel: 'Kelas 7',
    type: 'isian',
    question: 'Sebutkan akronim 6 unsur pokok berita dalam bahasa Indonesia yang merupakan padanan dari 5W + 1H (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana)!',
    options: [],
    answer: 'ADIKSI BA',
    score: 25,
    explanation: 'ADIKSIMBA (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana).',
    teacherUsername: 'guru_indo',
    teacherName: 'Dra. Hj. Siti Rahma M.Pd'
  },
  {
    id: 'bq-indo-8-1',
    subject: 'Bahasa Indonesia',
    classLevel: 'Kelas 8',
    type: 'pg',
    question: 'Kalimat di bawah ini yang merupakan kalimat fakta (bukan opini) adalah...',
    options: [
      'Pemandangan matahari terbit di Pantai Senggigi sangat menakjubkan.',
      'Menurut saya, pelajaran sastra lebih menyenangkan daripada tata bahasa.',
      'Berdasarkan data BPS, jumlah penduduk Indonesia pada tahun 2024 mencapai lebih dari 280 juta jiwa.',
      'Masakan rendang buatan nenek merupakan rendang paling lezat di dunia.'
    ],
    answer: '2',
    score: 25,
    explanation: 'Kalimat fakta dapat dibuktikan kebenarannya dengan data kuantitatif dari lembaga resmi (BPS).',
    teacherUsername: 'guru_indo',
    teacherName: 'Dra. Hj. Siti Rahma M.Pd'
  },

  // ==========================================
  // BANK SOAL: BAHASA INGGRIS
  // Guru Pengampu: John Richardson M.Ed (guru_inggris)
  // ==========================================
  {
    id: 'bq-eng-7-1',
    subject: 'Bahasa Inggris',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: `Choose the correct form of the verb to complete the daily habit sentence:
"Every Monday morning, the students ... a flag ceremony in the school yard."`,
    options: ['attend', 'attends', 'attended', 'attending'],
    answer: '0',
    score: 25,
    explanation: 'Simple Present Tense with plural subject "the students" uses base verb (V1) "attend".',
    teacherUsername: 'guru_inggris',
    teacherName: 'John Richardson M.Ed'
  },
  {
    id: 'bq-eng-7-2',
    subject: 'Bahasa Inggris',
    classLevel: 'Kelas 7',
    type: 'bs',
    question: 'In English grammar, an adjective is used to describe or modify a noun (e.g., "diligent student", "spacious room").',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 25,
    explanation: 'Adjectives modify nouns or pronouns.',
    teacherUsername: 'guru_inggris',
    teacherName: 'John Richardson M.Ed'
  },
  {
    id: 'bq-eng-8-1',
    subject: 'Bahasa Inggris',
    classLevel: 'Kelas 8',
    type: 'pg',
    question: `Read the text snippet:
"Once upon a time, in a small village near the forest, lived an honest woodcutter..."
What is the main communicative purpose of this narrative text?`,
    options: [
      'To describe the process of cutting trees in the forest',
      'To entertain or amuse the reader with an imaginative story and teach a moral lesson',
      'To persuade the readers to preserve the national forest',
      'To inform the reader about recent forest equipment'
    ],
    answer: '1',
    score: 25,
    explanation: 'The social function of narrative text is to entertain the reader and share moral values.',
    teacherUsername: 'guru_inggris',
    teacherName: 'John Richardson M.Ed'
  },
  {
    id: 'bq-eng-8-2',
    subject: 'Bahasa Inggris',
    classLevel: 'Kelas 8',
    type: 'isian',
    question: 'What is the past tense (Verb 2) form of the irregular verb "write"?',
    options: [],
    answer: 'wrote',
    score: 25,
    explanation: 'write - wrote - written.',
    teacherUsername: 'guru_inggris',
    teacherName: 'John Richardson M.Ed'
  },

  // ==========================================
  // BANK SOAL: IPA (FISIKA, BIOLOGI, KIMIA)
  // Guru Pengampu: Dr. Agus Prasetyo M.Si (guru_ipa)
  // ==========================================
  {
    id: 'bq-ipa-7-1',
    subject: 'IPA (Fisika, Biologi, Kimia)',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Kelompok besaran di bawah ini yang seluruhnya termasuk dalam Besaran Pokok sistem internasional (SI) adalah...',
    options: [
      'Panjang, Massa, Waktu, Suhu',
      'Kecepatan, Percepatan, Gaya, Usaha',
      'Luas, Volume, Massa Jenis, Tekanan',
      'Energi, Daya, Kuat Arus, Tegangan'
    ],
    answer: '0',
    score: 25,
    explanation: 'Tujuh besaran pokok SI: Panjang, Massa, Waktu, Suhu, Kuat Arus, Intensitas Cahaya, Jumlah Zat.',
    teacherUsername: 'guru_ipa',
    teacherName: 'Dr. Agus Prasetyo M.Si'
  },
  {
    id: 'bq-ipa-7-2',
    subject: 'IPA (Fisika, Biologi, Kimia)',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: 'Organel sel yang hanya dijumpai pada sel tumbuhan dan berfungsi sebagai tempat pembuatan zat makanan melalui proses fotosintesis adalah...',
    options: ['Mitokondria', 'Kloroplas', 'Ribosom', 'Sentrosom'],
    answer: '1',
    score: 25,
    explanation: 'Kloroplas mengandung klorofil untuk menangkap energi matahari dalam reaksi fotosintesis.',
    teacherUsername: 'guru_ipa',
    teacherName: 'Dr. Agus Prasetyo M.Si'
  },
  {
    id: 'bq-ipa-7-3',
    subject: 'IPA (Fisika, Biologi, Kimia)',
    classLevel: 'Kelas 7',
    type: 'bs',
    question: 'Hukum I Newton menyatakan bahwa suatu benda akan mempertahankan keadaannya (tetap diam atau bergerak lurus beraturan) jika resultan gaya yang bekerja sama dengan nol (ΣF = 0).',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 25,
    explanation: 'Hukum I Newton disebut juga Hukum Kelembaman atau Inersia.',
    teacherUsername: 'guru_ipa',
    teacherName: 'Dr. Agus Prasetyo M.Si'
  },
  {
    id: 'bq-ipa-8-1',
    subject: 'IPA (Fisika, Biologi, Kimia)',
    classLevel: 'Kelas 8',
    type: 'pg',
    question: 'Ruang jantung manusia yang bertugas memompa darah bersih kaya oksigen (O2) ke seluruh jaringan tubuh adalah...',
    options: ['Serambi Kanan (Atrium Kanan)', 'Bilik Kanan (Ventrikel Kanan)', 'Bilik Kiri (Ventrikel Kiri)', 'Serambi Kiri (Atrium Kiri)'],
    answer: '2',
    score: 25,
    explanation: 'Bilik kiri memiliki dinding otot paling tebal untuk memompa darah ke seluruh tubuh melalui aorta.',
    teacherUsername: 'guru_ipa',
    teacherName: 'Dr. Agus Prasetyo M.Si'
  },

  // ==========================================
  // BANK SOAL: MATEMATIKA
  // Guru Pengampu: Drs. Hendro Wibowo M.Pd (guru_mtk)
  // ==========================================
  {
    id: 'bq-mtk-7-1',
    subject: 'Matematika',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: `Hitunglah hasil operasi hitung campuran berikut:
-18 + 7 × (-4) - (-25) = ...`,
    options: ['-21', '-35', '-45', '19'],
    answer: '0',
    score: 25,
    explanation: 'Kerjakan perkalian dulu: 7 × (-4) = -28. Lalu -18 + (-28) - (-25) = -46 + 25 = -21.',
    teacherUsername: 'guru_mtk',
    teacherName: 'Drs. Hendro Wibowo M.Pd'
  },
  {
    id: 'bq-mtk-7-2',
    subject: 'Matematika',
    classLevel: 'Kelas 7',
    type: 'pg',
    question: `Tentukan nilai variabel x yang memenuhi persamaan linear satu variabel:
4x - 7 = 2x + 9`,
    options: ['x = 4', 'x = 6', 'x = 8', 'x = 10'],
    answer: '2',
    score: 25,
    explanation: '4x - 2x = 9 + 7 => 2x = 16 => x = 8.',
    teacherUsername: 'guru_mtk',
    teacherName: 'Drs. Hendro Wibowo M.Pd'
  },
  {
    id: 'bq-mtk-8-1',
    subject: 'Matematika',
    classLevel: 'Kelas 8',
    type: 'pg',
    question: 'Sebuah segitiga siku-siku memiliki panjang kedua sisi penyiku masing-masing 9 cm dan 12 cm. Berapakah panjang sisi miring (hipotenusa) segitiga tersebut?',
    options: ['15 cm', '16 cm', '18 cm', '21 cm'],
    answer: '0',
    score: 25,
    explanation: 'Teorema Pythagoras: c² = 9² + 12² = 81 + 144 = 225 => c = √225 = 15 cm.',
    teacherUsername: 'guru_mtk',
    teacherName: 'Drs. Hendro Wibowo M.Pd'
  },
  {
    id: 'bq-mtk-8-2',
    subject: 'Matematika',
    classLevel: 'Kelas 8',
    type: 'bs',
    question: 'Jumlah sudut dalam sembarang segitiga pada bidang datar adalah tepat 180 derajat.',
    options: ['Benar', 'Salah'],
    answer: 'Benar',
    score: 25,
    explanation: 'Total sudut segitiga selalu 180°.',
    teacherUsername: 'guru_mtk',
    teacherName: 'Drs. Hendro Wibowo M.Pd'
  },

  // ==========================================
  // BANK SOAL: KEJURUAN RPL (REKAYASA PERANGKAT LUNAK)
  // Guru Pengampu: Ahmad Zakaria S.Kom (guru_rpl)
  // ==========================================
  {
    id: 'bq-rpl-10-1',
    subject: 'Pemrograman Web & Perangkat Bergerak',
    classLevel: 'Kelas 10',
    type: 'pg',
    question: 'Tag HTML standar yang digunakan untuk membuat hyperlink (tautan navigasi) antarhalaman web adalah...',
    options: ['<link>', '<href>', '<nav>', '<a href="...">'],
    answer: '3',
    score: 25,
    explanation: 'Tag anchor <a> dengan atribut href digunakan untuk navigasi tautan web.',
    teacherUsername: 'guru_rpl',
    teacherName: 'Ahmad Zakaria S.Kom'
  },
  {
    id: 'bq-rpl-10-2',
    subject: 'Pemrograman Web & Perangkat Bergerak',
    classLevel: 'Kelas 10',
    type: 'pg',
    question: 'Perintah Structured Query Language (SQL) untuk mengambil seluruh baris dan kolom dari tabel bernama "siswa" adalah...',
    options: ['GET ALL FROM siswa;', 'SELECT * FROM siswa;', 'FETCH TABLE siswa;', 'EXTRACT ALL IN siswa;'],
    answer: '1',
    score: 25,
    explanation: 'Sintaks baku SQL: SELECT * FROM nama_tabel;',
    teacherUsername: 'guru_rpl',
    teacherName: 'Ahmad Zakaria S.Kom'
  },

  // ==========================================
  // BANK SOAL: KEJURUAN TKJ (JARINGAN & SERVER)
  // Guru Pengampu: Bambang Kurniawan S.T (guru_tkj)
  // ==========================================
  {
    id: 'bq-tkj-10-1',
    subject: 'Administrasi Infrastruktur Jaringan & Server',
    classLevel: 'Kelas 10',
    type: 'pg',
    question: 'Alamat IP 192.168.1.1 termasuk ke dalam pengelompokan alamat IPv4 kelas...',
    options: ['Kelas A', 'Kelas B', 'Kelas C', 'Kelas D'],
    answer: '2',
    score: 25,
    explanation: 'Range IP Kelas C berkisar antara 192.0.0.0 hingga 223.255.255.255.',
    teacherUsername: 'guru_tkj',
    teacherName: 'Bambang Kurniawan S.T'
  },

  // ==========================================
  // BANK SOAL: KEJURUAN OTOMOTIF (TKR)
  // Guru Pengampu: Ir. Joko Sutrisno (guru_otomotif)
  // ==========================================
  {
    id: 'bq-oto-10-1',
    subject: 'Pemeliharaan Mesin & Kelistrikan Kendaraan',
    classLevel: 'Kelas 10',
    type: 'pg',
    question: 'Urutan siklus kerja 4 langkah (4-tak) pada motor bakar bensin yang benar adalah...',
    options: [
      'Langkah Hisap - Langkah Kompresi - Langkah Usaha - Langkah Buang',
      'Langkah Kompresi - Langkah Hisap - Langkah Buang - Langkah Usaha',
      'Langkah Usaha - Langkah Hisap - Langkah Buang - Langkah Kompresi',
      'Langkah Hisap - Langkah Usaha - Langkah Kompresi - Langkah Buang'
    ],
    answer: '0',
    score: 25,
    explanation: 'Siklus 4 tak: Intake (Hisap), Compression (Kompresi), Power/Combustion (Usaha), Exhaust (Buang).',
    teacherUsername: 'guru_otomotif',
    teacherName: 'Ir. Joko Sutrisno'
  }
];

export const initialExams: Exam[] = [
  {
    id: 'EXAM-07',
    title: 'Ulangan Harian Informatika Kelas 7 - Berpikir Komputasional',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 7',
    code: 'INF07',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'SOHIBUL UMAM S.Kom',
    questions: initialBankQuestions.filter(q => q.classLevel === 'Kelas 7' && (q.subject || '').toUpperCase() === 'INFORMATIKA')
  },
  {
    id: 'EXAM-08',
    title: 'Ulangan Harian Informatika Kelas 8 - Algoritma & Pemrograman Dasar',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 8',
    code: 'INF08',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'SOHIBUL UMAM S.Kom',
    questions: initialBankQuestions.filter(q => q.classLevel === 'Kelas 8' && (q.subject || '').toUpperCase() === 'INFORMATIKA')
  },
  {
    id: 'EXAM-09',
    title: 'Ulangan Harian Informatika Kelas 9 - Jaringan Komputer & Internet',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 9',
    code: 'INF09',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'SOHIBUL UMAM S.Kom',
    questions: initialBankQuestions.filter(q => q.classLevel === 'Kelas 9' && (q.subject || '').toUpperCase() === 'INFORMATIKA')
  },
  {
    id: 'EXAM-10',
    title: 'Ulangan Harian Informatika Kelas 10 - Analisis Data & Perangkat Keras',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 10',
    code: 'INF10',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'SOHIBUL UMAM S.Kom',
    questions: initialBankQuestions.filter(q => q.classLevel === 'Kelas 10' && (q.subject || '').toUpperCase() === 'INFORMATIKA')
  },
  {
    id: 'EXAM-11',
    title: 'Ulangan Harian Informatika Kelas 11 - Algoritma Lanjutan & Struktur Data',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 11',
    code: 'INF11',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'SOHIBUL UMAM S.Kom',
    questions: initialBankQuestions.filter(q => q.classLevel === 'Kelas 11' && (q.subject || '').toUpperCase() === 'INFORMATIKA')
  },
  {
    id: 'EXAM-12',
    title: 'Ulangan Harian Informatika Kelas 12 - Dampak Sosial Informatika & Keamanan Siber',
    subject: 'INFORMATIKA',
    classLevel: 'Kelas 12',
    code: 'INF12',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'SOHIBUL UMAM S.Kom',
    questions: initialBankQuestions.filter(q => q.classLevel === 'Kelas 12' && (q.subject || '').toUpperCase() === 'INFORMATIKA')
  },
  {
    id: 'EXAM-BINDO-7',
    title: 'Penilaian Harian Bahasa Indonesia Kelas 7 - Teks LHO & Cerita Fantasi',
    subject: 'Bahasa Indonesia',
    classLevel: 'Kelas 7',
    code: 'BINDO7',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'Dra. Hj. Siti Rahma M.Pd',
    questions: initialBankQuestions.filter(q => q.subject === 'Bahasa Indonesia' && q.classLevel === 'Kelas 7')
  },
  {
    id: 'EXAM-BING-7',
    title: 'Daily Assessment English Grade 7 - Daily Activities & Grammar',
    subject: 'Bahasa Inggris',
    classLevel: 'Kelas 7',
    code: 'BING07',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'John Richardson M.Ed',
    questions: initialBankQuestions.filter(q => q.subject === 'Bahasa Inggris' && q.classLevel === 'Kelas 7')
  },
  {
    id: 'EXAM-IPA-7',
    title: 'Penilaian Harian IPA Kelas 7 - Besaran Pokok & Sel Tumbuhan',
    subject: 'IPA (Fisika, Biologi, Kimia)',
    classLevel: 'Kelas 7',
    code: 'IPA07',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'Dr. Agus Prasetyo M.Si',
    questions: initialBankQuestions.filter(q => q.subject === 'IPA (Fisika, Biologi, Kimia)' && q.classLevel === 'Kelas 7')
  },
  {
    id: 'EXAM-MTK-7',
    title: 'Penilaian Harian Matematika Kelas 7 - Operasi Aljabar & Bilangan Bulat',
    subject: 'Matematika',
    classLevel: 'Kelas 7',
    code: 'MTK07',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'Drs. Hendro Wibowo M.Pd',
    questions: initialBankQuestions.filter(q => q.subject === 'Matematika' && q.classLevel === 'Kelas 7')
  },
  {
    id: 'EXAM-RPL-10',
    title: 'Ujian Kejuruan RPL Kelas 10 - Web Development HTML & Basis Data SQL',
    subject: 'Pemrograman Web & Perangkat Bergerak',
    classLevel: 'Kelas 10',
    code: 'RPL10',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'Ahmad Zakaria S.Kom',
    questions: initialBankQuestions.filter(q => q.subject === 'Pemrograman Web & Perangkat Bergerak')
  },
  {
    id: 'EXAM-TKJ-10',
    title: 'Ujian Kejuruan TKJ Kelas 10 - Jaringan Komputer & Pengalamatan IP',
    subject: 'Administrasi Infrastruktur Jaringan & Server',
    classLevel: 'Kelas 10',
    code: 'TKJ10',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'Bambang Kurniawan S.T',
    questions: initialBankQuestions.filter(q => q.subject === 'Administrasi Infrastruktur Jaringan & Server')
  },
  {
    id: 'EXAM-OTO-10',
    title: 'Ujian Kejuruan Otomotif Kelas 10 - Siklus Mesin & Perawatan Kendaraan',
    subject: 'Pemeliharaan Mesin & Kelistrikan Kendaraan',
    classLevel: 'Kelas 10',
    code: 'OTO10',
    pin: '1234',
    durationMinutes: 45,
    passingScore: 75,
    startTime: '2026-01-01T07:00',
    endTime: '2026-12-31T23:59',
    maxViolations: 3,
    status: 'Aktif',
    teacherName: 'Ir. Joko Sutrisno',
    questions: initialBankQuestions.filter(q => q.subject === 'Pemeliharaan Mesin & Kelistrikan Kendaraan')
  }
];

export const initialTeachers: TeacherAccount[] = [
  {
    id: 'tch-sohibul',
    username: 'sohibul',
    name: 'SOHIBUL UMAM S.Kom',
    password: 'password123',
    subject: 'Informatika',
    major: 'Umum / Semua Jurusan',
    nip: '198804152015031002',
    phone: '081234567890',
    role: 'admin',
    createdAt: '2026-01-01',
    biodata: {
      nuptk: '4532766667200032',
      email: 'sohibul.umam@sekolah.sch.id',
      phone: '0812-3456-7890',
      gender: 'Laki-laki',
      birthPlaceDate: 'Surabaya, 15 April 1988',
      lastEducation: 'S1 Teknik Informatika / Ilmu Komputer',
      address: 'Jl. Pendidikan No. 12, Kompleks Perumahan Guru',
      bioNotes: 'Super Administrator CBT & Koordinator IT Laboratorium Komputer. Pengampu mata pelajaran Informatika Kelas 7 - 12 dan Pembina Ekstrakurikuler Robotika.',
    },
    schedules: [
      { id: 'sch-1', day: 'Senin', startTime: '07:30', endTime: '09:00', classLevel: 'Kelas 7A', room: 'Lab Komputer 1', subject: 'Informatika', notes: 'Berpikir Komputasional' },
      { id: 'sch-2', day: 'Senin', startTime: '09:15', endTime: '10:45', classLevel: 'Kelas 8B', room: 'Lab Komputer 1', subject: 'Informatika', notes: 'Algoritma Pemrograman Visual' },
      { id: 'sch-3', day: 'Selasa', startTime: '08:00', endTime: '09:30', classLevel: 'Kelas 9A', room: 'Lab Komputer 2', subject: 'Informatika', notes: 'Jaringan Komputer' },
      { id: 'sch-4', day: 'Rabu', startTime: '07:30', endTime: '09:45', classLevel: 'Kelas 10 RPL', room: 'Lab Software', subject: 'Informatika', notes: 'Sistem Komputer & Logika' },
      { id: 'sch-5', day: 'Kamis', startTime: '10:00', endTime: '11:30', classLevel: 'Kelas 11 TKJ', room: 'Lab Server', subject: 'Informatika', notes: 'Struktur Data Lanjut' },
      { id: 'sch-6', day: 'Jumat', startTime: '08:00', endTime: '09:30', classLevel: 'Kelas 12', room: 'Lab Multimedia', subject: 'Informatika', notes: 'Dampak Sosial & Siber' },
    ],
  },
  {
    id: 'tch-bindo',
    username: 'guru_indo',
    name: 'Dra. Hj. Siti Rahma M.Pd',
    password: 'password123',
    subject: 'Bahasa Indonesia',
    major: 'Umum / Semua Jurusan',
    nip: '197908122005012004',
    phone: '081398765432',
    role: 'guru',
    createdAt: '2026-01-01',
    biodata: {
      nuptk: '8945757659210003',
      email: 'siti.rahma@sekolah.sch.id',
      phone: '0813-9876-5432',
      gender: 'Perempuan',
      birthPlaceDate: 'Yogyakarta, 12 Agustus 1979',
      lastEducation: 'S2 Magister Pendidikan Bahasa Indonesia',
      address: 'Jl. Merpati Indah No. 45',
      bioNotes: 'Ketua MGMP Bahasa Indonesia & Pembina Karya Ilmiah Remaja (KIR). Berpengalaman mengajar literasi dan teks observasi.',
    },
    schedules: [
      { id: 'sch-bi-1', day: 'Senin', startTime: '07:30', endTime: '09:00', classLevel: 'Kelas 7B', room: 'Ruang 7B', subject: 'Bahasa Indonesia' },
      { id: 'sch-bi-2', day: 'Selasa', startTime: '09:15', endTime: '10:45', classLevel: 'Kelas 8A', room: 'Ruang 8A', subject: 'Bahasa Indonesia' },
      { id: 'sch-bi-3', day: 'Kamis', startTime: '07:30', endTime: '09:00', classLevel: 'Kelas 9B', room: 'Ruang 9B', subject: 'Bahasa Indonesia' },
    ],
  },
  {
    id: 'tch-bing',
    username: 'guru_inggris',
    name: 'John Richardson M.Ed',
    password: 'password123',
    subject: 'Bahasa Inggris',
    major: 'Umum / Semua Jurusan',
    role: 'guru',
    createdAt: '2026-01-01',
    biodata: {
      nuptk: '1234758960120001',
      email: 'john.richardson@sekolah.sch.id',
      phone: '0821-4567-8910',
      gender: 'Laki-laki',
      birthPlaceDate: 'Melbourne, 24 Mei 1983',
      lastEducation: 'Master of Education (TESOL)',
      address: 'Jl. Anggrek Melati Blok B3',
      bioNotes: 'Koordinator English Club & Persiapan TOEFL/IELTS Siswa. Berfokus pada communicative language teaching.',
    },
    schedules: [
      { id: 'sch-en-1', day: 'Selasa', startTime: '07:30', endTime: '09:00', classLevel: 'Kelas 7A', room: 'Ruang 7A', subject: 'Bahasa Inggris' },
      { id: 'sch-en-2', day: 'Rabu', startTime: '09:15', endTime: '10:45', classLevel: 'Kelas 8B', room: 'Ruang 8B', subject: 'Bahasa Inggris' },
      { id: 'sch-en-3', day: 'Jumat', startTime: '08:00', endTime: '09:30', classLevel: 'Kelas 10 RPL', room: 'Ruang 10 RPL', subject: 'Bahasa Inggris' },
    ],
  },
  {
    id: 'tch-ipa',
    username: 'guru_ipa',
    name: 'Dr. Agus Prasetyo M.Si',
    password: 'password123',
    subject: 'IPA (Fisika, Biologi, Kimia)',
    major: 'Umum / Semua Jurusan',
    nip: '198203172008011015',
    role: 'guru',
    createdAt: '2026-01-01',
    biodata: {
      nuptk: '7654760662200021',
      email: 'agus.prasetyo@sekolah.sch.id',
      phone: '0857-1122-3344',
      gender: 'Laki-laki',
      birthPlaceDate: 'Semarang, 17 Maret 1982',
      lastEducation: 'S3 Doktor Ilmu Fisika Terapan',
      address: 'Perum Grand Cendana No. 8',
      bioNotes: 'Kepala Laboratorium IPA Terpadu & Pembina Tim Olimpiade Sains Nasional (OSN).',
    },
    schedules: [
      { id: 'sch-ipa-1', day: 'Rabu', startTime: '07:30', endTime: '09:45', classLevel: 'Kelas 7A', room: 'Lab IPA', subject: 'IPA' },
      { id: 'sch-ipa-2', day: 'Kamis', startTime: '07:30', endTime: '09:45', classLevel: 'Kelas 8A', room: 'Lab IPA', subject: 'IPA' },
    ],
  },
  {
    id: 'tch-mtk',
    username: 'guru_mtk',
    name: 'Drs. Hendro Wibowo M.Pd',
    password: 'password123',
    subject: 'Matematika',
    major: 'Umum / Semua Jurusan',
    nip: '197511042000031003',
    role: 'guru',
    createdAt: '2026-01-01',
    biodata: {
      nuptk: '5432753655200012',
      email: 'hendro.wibowo@sekolah.sch.id',
      phone: '0812-7788-9900',
      gender: 'Laki-laki',
      birthPlaceDate: 'Malang, 4 November 1975',
      lastEducation: 'S2 Pendidikan Matematika',
      address: 'Jl. Flamboyan Timur No. 19',
      bioNotes: 'Wakil Kepala Sekolah Bidang Kurikulum. Berpengalaman lebih dari 20 tahun dalam penyusunan instrumen asesmen nasional.',
    },
    schedules: [
      { id: 'sch-mtk-1', day: 'Senin', startTime: '09:15', endTime: '11:30', classLevel: 'Kelas 7A', room: 'Ruang 7A', subject: 'Matematika' },
      { id: 'sch-mtk-2', day: 'Rabu', startTime: '10:00', endTime: '12:15', classLevel: 'Kelas 8A', room: 'Ruang 8A', subject: 'Matematika' },
    ],
  },
  {
    id: 'tch-rpl',
    username: 'guru_rpl',
    name: 'Ahmad Zakaria S.Kom',
    password: 'password123',
    subject: 'Pemrograman Web & Perangkat Bergerak',
    major: 'Rekayasa Perangkat Lunak (RPL)',
    role: 'guru',
    createdAt: '2026-01-01',
    biodata: {
      email: 'ahmad.zakaria@sekolah.sch.id',
      phone: '0878-3344-5566',
      gender: 'Laki-laki',
      birthPlaceDate: 'Bandung, 10 Oktober 1991',
      lastEducation: 'S1 Teknik Informatika',
      address: 'Jl. Cibiru Indah Blok C',
      bioNotes: 'Ketua Program Keahlian Rekayasa Perangkat Lunak. Praktisi Full-Stack Web & Mobile App Development.',
    },
    schedules: [
      { id: 'sch-rpl-1', day: 'Selasa', startTime: '07:30', endTime: '11:30', classLevel: 'Kelas 10 RPL', room: 'Lab Software', subject: 'Pemrograman Web' },
      { id: 'sch-rpl-2', day: 'Kamis', startTime: '08:00', endTime: '12:00', classLevel: 'Kelas 11 RPL', room: 'Lab Software', subject: 'Basis Data & API' },
    ],
  },
  {
    id: 'tch-tkj',
    username: 'guru_tkj',
    name: 'Bambang Kurniawan S.T',
    password: 'password123',
    subject: 'Administrasi Infrastruktur Jaringan & Server',
    major: 'Teknik Komputer & Jaringan (TKJ)',
    role: 'guru',
    createdAt: '2026-01-01',
    biodata: {
      email: 'bambang.kurniawan@sekolah.sch.id',
      phone: '0852-6677-8899',
      gender: 'Laki-laki',
      birthPlaceDate: 'Jakarta, 8 Juli 1989',
      lastEducation: 'S1 Teknik Elektro / Telekomunikasi',
      address: 'Jl. Garuda No. 3',
      bioNotes: 'Instruktur Cisco Academy (CCNA) & MikroTik Certified Network Associate (MTCNA).',
    },
    schedules: [
      { id: 'sch-tkj-1', day: 'Senin', startTime: '08:00', endTime: '12:00', classLevel: 'Kelas 10 TKJ', room: 'Lab Jaringan', subject: 'Jaringan Dasar' },
      { id: 'sch-tkj-2', day: 'Rabu', startTime: '08:00', endTime: '12:00', classLevel: 'Kelas 11 TKJ', room: 'Lab Server', subject: 'Administrasi Server' },
    ],
  },
  {
    id: 'tch-otomotif',
    username: 'guru_otomotif',
    name: 'Ir. Joko Sutrisno',
    password: 'password123',
    subject: 'Pemeliharaan Mesin & Kelistrikan Kendaraan',
    major: 'Teknik Kendaraan Ringan (TKR / Otomotif)',
    role: 'guru',
    createdAt: '2026-01-01',
    biodata: {
      email: 'joko.sutrisno@sekolah.sch.id',
      phone: '0815-4455-6677',
      gender: 'Laki-laki',
      birthPlaceDate: 'Solo, 21 September 1978',
      lastEducation: 'S1 Teknik Mesin Otomotif & Sertifikasi BNSP',
      address: 'Jl. Bengkel Mandiri Kav. 9',
      bioNotes: 'Ketua Bengkel Otomotif Sekolah & Pembina Uji Kompetensi Keahlian (UKK) Otomotif Astra.',
    },
    schedules: [
      { id: 'sch-oto-1', day: 'Kamis', startTime: '07:30', endTime: '12:00', classLevel: 'Kelas 10 Otomotif', room: 'Bengkel Otomotif', subject: 'Mesin 4-Tak & Servis' },
      { id: 'sch-oto-2', day: 'Jumat', startTime: '07:30', endTime: '11:00', classLevel: 'Kelas 11 Otomotif', room: 'Bengkel Kelistrikan', subject: 'Kelistrikan Bodi & EFI' },
    ],
  }
];

export const initialDefaultData: AppData = {
  currentUser: null,
  teacherCredentials: {
    sohibul: 'password123',
    guru_indo: 'password123',
    guru_inggris: 'password123',
    guru_ipa: 'password123',
    guru_mtk: 'password123',
    guru_rpl: 'password123',
    guru_tkj: 'password123',
    guru_otomotif: 'password123',
  },
  teachers: initialTeachers,
  exams: initialExams,
  bankQuestions: initialBankQuestions,
  submissions: [
    {
      id: 'sub-sample-1',
      examId: 'EXAM-08',
      examTitle: 'Ulangan Harian Informatika Kelas 8 - Algoritma & Pemrograman Dasar',
      studentUsername: 'ahmad_faiz',
      studentName: 'Ahmad Faiz Al-Ghazi',
      studentClass: 'Kelas 8A',
      score: 100,
      status: 'Selesai',
      violations: 0,
      violationLogs: [],
      answers: {
        'bq-8-1': '1',
        'bq-8-2': 'Scratch',
        'bq-8-3': 'Benar',
        'bq-8-4': '1'
      },
      submittedAt: '12/10/2026, 09:15:20',
      durationSpentSeconds: 1240
    },
    {
      id: 'sub-sample-2',
      examId: 'EXAM-07',
      examTitle: 'Ulangan Harian Informatika Kelas 7 - Berpikir Komputasional',
      studentUsername: 'nadia_safira',
      studentName: 'Nadia Safira Putri',
      studentClass: 'Kelas 7B',
      score: 75,
      status: 'Selesai',
      violations: 1,
      violationLogs: [
        { time: '12/10/2026, 08:30:12', reason: 'Perpindahan tab browser terdeteksi' }
      ],
      answers: {
        'bq-7-1': '1',
        'bq-7-2': 'Benar',
        'bq-7-3': '1',
        'bq-7-4': 'Speaker'
      },
      submittedAt: '12/10/2026, 08:45:00',
      durationSpentSeconds: 1530
    },
    {
      id: 'sub-sample-3',
      examId: 'EXAM-10',
      examTitle: 'Ulangan Harian Informatika Kelas 10 - Analisis Data & Perangkat Keras',
      studentUsername: 'rizky_pratama',
      studentName: 'Rizky Pratama Wijaya',
      studentClass: 'Kelas 10-1',
      score: 50,
      status: 'Selesai',
      violations: 2,
      violationLogs: [
        { time: '12/10/2026, 10:14:02', reason: 'Keluar dari mode Fullscreen' },
        { time: '12/10/2026, 10:20:45', reason: 'Jendela kehilangan fokus (Window Blur)' }
      ],
      answers: {
        'bq-10-1': '0',
        'bq-10-2': '1',
        'bq-10-3': 'Salah',
        'bq-10-4': '.csv'
      },
      submittedAt: '12/10/2026, 10:35:10',
      durationSpentSeconds: 1800
    }
  ],
  auditLogs: [
    {
      id: 'aud-1',
      time: '12/10/2026, 10:20:45',
      user: 'Rizky Pratama Wijaya (Siswa Kelas 10-1)',
      action: 'Pelanggaran Kiosk Mode',
      detail: 'Jendela browser kehilangan fokus (Alt-Tab terdeteksi)',
      severity: 'warning'
    },
    {
      id: 'aud-2',
      time: '12/10/2026, 10:14:02',
      user: 'Rizky Pratama Wijaya (Siswa Kelas 10-1)',
      action: 'Pelanggaran Fullscreen',
      detail: 'Keluar dari tampilan layar penuh saat ujian berlangsung',
      severity: 'warning'
    },
    {
      id: 'aud-3',
      time: '12/10/2026, 08:30:12',
      user: 'Nadia Safira Putri (Siswa Kelas 7B)',
      action: 'Pelanggaran Tab Switch',
      detail: 'Berpindah tab peramban saat pengerjaan soal',
      severity: 'warning'
    }
  ]
};
