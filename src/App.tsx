import { useState, useEffect } from 'react';
import { AppData, User, TeacherAccount } from './types';
import {
  getStoredData,
  saveStoredData,
  resetToDefaultData,
  fetchServerData,
  syncDataToServer,
} from './utils/storage';
import { Navbar } from './components/Navbar';
import { LoginView } from './components/LoginView';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { StudentPortal } from './components/student/StudentPortal';
import { ToastContainer, ToastMessage } from './components/Toast';
import { Modal } from './components/Modal';

export default function App() {
  const [appData, setAppData] = useState<AppData>(() => getStoredData());
  const [activeTeacherTab, setActiveTeacherTab] = useState<string>('exams');

  // Synchronize with server on startup (enables real-time cross-device sync between PC and HP)
  useEffect(() => {
    fetchServerData().then((serverData) => {
      if (serverData && Array.isArray(serverData.exams) && serverData.exams.length > 0) {
        setAppData((prev) => {
          // Merge local submissions that aren't on server
          const serverSubIds = new Set((serverData.submissions || []).map((s) => s.id));
          const localOnlySubs = (prev.submissions || []).filter((s) => !serverSubIds.has(s.id));
          const mergedSubmissions = [...localOnlySubs, ...(serverData.submissions || [])];

          // Ensure teachers list exists
          const teachersList =
            serverData.teachers && serverData.teachers.length > 0
              ? serverData.teachers
              : (prev.teachers || []);

          const mergedCreds = {
            ...(prev.teacherCredentials || {}),
            ...(serverData.teacherCredentials || {}),
          };

          const mergedData: AppData = {
            ...serverData,
            teachers: teachersList,
            teacherCredentials: mergedCreds,
            submissions: mergedSubmissions,
            currentUser: prev.currentUser, // preserve session
          };

          saveStoredData(mergedData);
          if (localOnlySubs.length > 0) {
            syncDataToServer(mergedData);
          }
          return mergedData;
        });
      } else {
        // Seed server with current local data
        syncDataToServer(appData);
      }
    });
  }, []);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Confirmation Modal
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    type?: 'danger' | 'warning' | 'info';
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
  });

  const showToast = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const newToast: ToastMessage = { id, type, message };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const showModal = (config: {
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    type?: 'danger' | 'warning' | 'info';
    onConfirm: () => void;
  }) => {
    setModalConfig({
      isOpen: true,
      ...config,
    });
  };

  const closeModal = () => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }));
  };

  const handleUpdateData = (newData: AppData) => {
    setAppData(newData);
    saveStoredData(newData);
    // Background sync to server
    syncDataToServer(newData);
  };

  const handleLogin = (user: User) => {
    const updated = { ...appData, currentUser: user };
    handleUpdateData(updated);
  };

  const handleRegisterTeacher = (newTeacher: TeacherAccount) => {
    const updatedTeachers = [...(appData.teachers || []), newTeacher];
    const updatedCredentials = {
      ...appData.teacherCredentials,
      [newTeacher.username]: newTeacher.password || 'password123',
    };
    const updated: AppData = {
      ...appData,
      teachers: updatedTeachers,
      teacherCredentials: updatedCredentials,
    };
    handleUpdateData(updated);
  };

  const handleLogout = () => {
    showModal({
      title: 'Konfirmasi Keluar Sesi',
      message: 'Apakah Anda yakin ingin keluar dari sesi pengguna saat ini?',
      type: 'warning',
      confirmLabel: 'Ya, Keluar',
      onConfirm: () => {
        const updated = { ...appData, currentUser: null };
        handleUpdateData(updated);
        showToast('Berhasil keluar sesi.', 'info');
      },
    });
  };

  // Immediate logout when student completes the exam
  const handleDirectStudentLogout = () => {
    const updated = { ...appData, currentUser: null };
    handleUpdateData(updated);
    showToast('Ujian selesai dikumpulkan. Berhasil kembali ke halaman login.', 'success');
  };

  const handleResetData = () => {
    showModal({
      title: 'Reset Data ke Standar Awal',
      message: 'Tindakan ini akan mengembalikan seluruh bank soal, akun guru seluruh mapel & jurusan, jadwal ujian kelas 7-12, dan log ke data sampel standar sekolah. Lanjutkan?',
      type: 'danger',
      confirmLabel: 'Ya, Reset Data',
      onConfirm: () => {
        const resetData = resetToDefaultData();
        setAppData(resetData);
        showToast('Data aplikasi berhasil dikembalikan ke standar awal!', 'success');
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Toast Notification Layer */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Global Confirmation Modal */}
      <Modal
        isOpen={modalConfig.isOpen}
        title={modalConfig.title}
        message={modalConfig.message}
        confirmLabel={modalConfig.confirmLabel}
        cancelLabel={modalConfig.cancelLabel}
        type={modalConfig.type}
        onConfirm={() => {
          modalConfig.onConfirm();
          closeModal();
        }}
        onCancel={closeModal}
      />

      {/* Main View Router based on currentUser */}
      {!appData.currentUser ? (
        <LoginView
          onLogin={handleLogin}
          teacherCredentials={appData.teacherCredentials || { sohibul: 'password123' }}
          teachers={appData.teachers || []}
          onRegisterTeacher={handleRegisterTeacher}
          onShowToast={showToast}
        />
      ) : (
        <>
          <Navbar
            currentUser={appData.currentUser}
            onLogout={handleLogout}
            activeTab={activeTeacherTab}
            onTabChange={(tab) => setActiveTeacherTab(tab)}
          />

          <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
            {appData.currentUser.role === 'guru' ? (
              <TeacherDashboard
                appData={appData}
                activeTab={activeTeacherTab}
                onTabChange={setActiveTeacherTab}
                onUpdateData={handleUpdateData}
                onShowToast={showToast}
                onShowModal={showModal}
              />
            ) : (
              <StudentPortal
                currentUser={appData.currentUser}
                appData={appData}
                onUpdateData={handleUpdateData}
                onShowToast={showToast}
                onShowModal={showModal}
                onLogout={handleDirectStudentLogout}
              />
            )}
          </main>

          {/* Clean Footer */}
          <footer className="border-t border-slate-200 bg-white py-4 px-6 text-center text-xs text-slate-500">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
              <div>
                CBT Mandiri Sekolah • 2026 • Platform Ujian Berbasis Komputer Antar-Mapel & Jurusan (Kelas 7 – 12)
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleResetData}
                  className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  Reset Contoh Data
                </button>
                <span>•</span>
                <span>Kiosk Mode Anti-Cheat Aktif</span>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
