import React, { useState } from 'react';
import { UserProfile } from '../types';
import { sound } from '../utils/sound';
import { Settings, Volume2, VolumeX, RefreshCw, UserCheck, Sparkles, AlertTriangle } from 'lucide-react';

interface SettingsModalProps {
  user: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
  onResetData: () => void;
  soundEnabled: boolean;
  onToggleSound: (enabled: boolean) => void;
  particlesEnabled: boolean;
  onToggleParticles: (enabled: boolean) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  user,
  onUpdateProfile,
  onResetData,
  soundEnabled,
  onToggleSound,
  particlesEnabled,
  onToggleParticles,
}) => {
  const [nama, setNama] = useState(user.nama);
  const [kelas, setKelas] = useState(user.kelas);
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playCorrect();
    onUpdateProfile({
      ...user,
      nama: nama.trim() || user.nama,
      kelas,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleConfirmReset = () => {
    sound.playWrong();
    onResetData();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 text-[#42423E] animate-fade-in">
      <div className="bg-white border border-[#E0DDD5] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-[#E0DDD5]">
          <div className="p-3 rounded-xl bg-[#EFEDE7] border border-[#E0DDD5] text-[#8A9A5B]">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C2C2A]">Pengaturan Aplikasi</h2>
            <p className="text-xs text-[#6E6C64]">Atur profil pengguna, suara game, dan data penyimpanan lokal.</p>
          </div>
        </div>

        {/* Form Profile (Kotak) */}
        <form onSubmit={handleSave} className="space-y-4">
          <h3 className="text-sm font-bold text-[#8A9A5B] uppercase tracking-wider flex items-center gap-2">
            <UserCheck className="w-4 h-4" /> Edit Data Profil
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#42423E] mb-1">Nama Pengguna</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl text-[#42423E] text-sm font-medium focus:outline-none focus:border-[#8A9A5B] focus:ring-1 focus:ring-[#8A9A5B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#42423E] mb-1">Tingkat Kelas</label>
              <select
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl text-[#42423E] text-sm font-medium focus:outline-none focus:border-[#8A9A5B] focus:ring-1 focus:ring-[#8A9A5B]"
              >
                <option value="SD Kelas 4">SD Kelas 4</option>
                <option value="SD Kelas 5">SD Kelas 5</option>
                <option value="SD Kelas 6">SD Kelas 6</option>
                <option value="SMP Kelas 7">SMP Kelas 7</option>
                <option value="SMP Kelas 8">SMP Kelas 8</option>
                <option value="SMP Kelas 9">SMP Kelas 9</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-[#8A9A5B] hover:bg-[#7A8A4B] text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Simpan Profil
          </button>

          {savedSuccess && (
            <p className="text-xs text-[#3B5838] font-bold bg-[#EAF2E1] p-2.5 rounded-lg border border-[#8A9A5B]">
              ✓ Profil berhasil diperbarui!
            </p>
          )}
        </form>

        {/* Toggles (Kotak) */}
        <div className="pt-6 border-t border-[#E0DDD5] space-y-4">
          <h3 className="text-sm font-bold text-[#8A9A5B] uppercase tracking-wider">
            Pengaturan Tampilan & Suara
          </h3>

          <div className="flex items-center justify-between p-4 bg-[#FAF9F6] rounded-xl border border-[#E0DDD5]">
            <div className="flex items-center gap-3">
              {soundEnabled ? (
                <Volume2 className="w-5 h-5 text-[#8A9A5B]" />
              ) : (
                <VolumeX className="w-5 h-5 text-[#8C8A82]" />
              )}
              <div>
                <p className="text-sm font-bold text-[#2C2C2A]">Efek Suara (SFX)</p>
                <p className="text-xs text-[#6E6C64]">Putar nada saat menjawab dan berpindah halaman.</p>
              </div>
            </div>

            <button
              onClick={() => {
                onToggleSound(!soundEnabled);
                sound.setEnabled(!soundEnabled);
                if (!soundEnabled) sound.playClick();
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                soundEnabled
                  ? 'bg-[#8A9A5B] text-white border border-[#7A8A4B]'
                  : 'bg-[#E0DDD5] text-[#8C8A82] border border-[#C2BFB5]'
              }`}
            >
              {soundEnabled ? 'Aktif' : 'Nonaktif'}
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#FAF9F6] rounded-xl border border-[#E0DDD5]">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#5B8A9A]" />
              <div>
                <p className="text-sm font-bold text-[#2C2C2A]">Animasi Partikel Sains</p>
                <p className="text-xs text-[#6E6C64]">Partikel molekul dan bintang melayang di latar belakang.</p>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onToggleParticles(!particlesEnabled);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                particlesEnabled
                  ? 'bg-[#8A9A5B] text-white border border-[#7A8A4B]'
                  : 'bg-[#E0DDD5] text-[#8C8A82] border border-[#C2BFB5]'
              }`}
            >
              {particlesEnabled ? 'Aktif' : 'Nonaktif'}
            </button>
          </div>
        </div>

        {/* Reset Data Section (Kotak) */}
        <div className="pt-6 border-t border-[#E0DDD5] space-y-3">
          <h3 className="text-sm font-bold text-[#D66D5B] uppercase tracking-wider flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Zona Bahaya (Reset Data)
          </h3>
          <p className="text-xs text-[#6E6C64]">
            Menghapus seluruh poin, riwayat test, dan progres belajar dari LocalStorage browser ini.
          </p>

          {!showConfirmReset ? (
            <button
              onClick={() => {
                sound.playClick();
                setShowConfirmReset(true);
              }}
              className="px-4 py-2.5 bg-[#FDE8E5] hover:bg-[#FCD2CB] border border-[#D66D5B] text-[#8C3224] font-bold text-xs rounded-xl transition-all flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> Reset Semua Data
            </button>
          ) : (
            <div className="p-4 bg-[#FDE8E5] border border-[#D66D5B] rounded-xl space-y-3 animate-fade-in">
              <p className="text-xs font-bold text-[#8C3224]">
                Apakah kamu yakin ingin menghapus semua poin dan progres belajarmu?
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleConfirmReset}
                  className="px-4 py-2 bg-[#D66D5B] hover:bg-[#C65D4B] text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  Ya, Hapus Semua
                </button>
                <button
                  onClick={() => setShowConfirmReset(false)}
                  className="px-4 py-2 bg-white text-[#42423E] font-bold text-xs rounded-xl border border-[#E0DDD5]"
                >
                  Batal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
