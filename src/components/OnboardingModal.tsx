import React, { useState } from 'react';
import { UserProfile } from '../types';
import { sound } from '../utils/sound';
import { Sparkles, User, GraduationCap, Compass } from 'lucide-react';

interface OnboardingModalProps {
  onSaveProfile: (profile: UserProfile) => void;
  initialProfile?: UserProfile | null;
  onClose?: () => void;
  isEditing?: boolean;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  onSaveProfile,
  initialProfile,
  onClose,
  isEditing = false,
}) => {
  const [nama, setNama] = useState(initialProfile?.nama || '');
  const [kelas, setKelas] = useState(initialProfile?.kelas || 'SD Kelas 5');
  const [error, setError] = useState('');

  const classOptions = [
    'SD Kelas 4',
    'SD Kelas 5',
    'SD Kelas 6',
    'SMP Kelas 7',
    'SMP Kelas 8',
    'SMP Kelas 9',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim()) {
      setError('Silakan isi nama kamu terlebih dahulu.');
      sound.playWrong();
      return;
    }

    sound.playVictory();
    const newProfile: UserProfile = {
      nama: nama.trim(),
      kelas,
      points: initialProfile?.points ?? 0,
      completedLessons: initialProfile?.completedLessons ?? [],
      testHistory: initialProfile?.testHistory ?? [],
      joinedAt: initialProfile?.joinedAt ?? new Date().toLocaleDateString('id-ID'),
    };

    onSaveProfile(newProfile);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      {/* Container: Clean Kotak/Rounded-2xl with subtle depth */}
      <div className="w-full max-w-md bg-white border border-[#E0DDD5] rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden text-[#42423E]">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#8A9A5B] flex items-center justify-center text-white mb-3 shadow-xs">
            <Compass className="w-8 h-8 stroke-[2.5]" />
          </div>
          <h2 className="text-2xl font-bold text-[#2C2C2A]">
            {isEditing ? 'Ubah Profil Petualang' : 'Selamat Datang di Science Adventure!'}
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6C64] mt-1">
            Isi nama dan kelasmu untuk memulai petualangan sains interaktif.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Nama */}
          <div>
            <label className="block text-xs font-bold text-[#42423E] uppercase tracking-wider mb-1.5 text-left">
              Nama Lengkap / Panggilan
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-3 w-5 h-5 text-[#8C8A82] pointer-events-none" />
              <input
                type="text"
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value);
                  setError('');
                }}
                placeholder="Contoh: Budi Prasetyo"
                className="w-full pl-11 pr-4 py-2.5 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl text-[#42423E] placeholder-[#8C8A82] text-sm font-medium focus:outline-none focus:border-[#8A9A5B] focus:ring-1 focus:ring-[#8A9A5B] transition-all"
                maxLength={30}
                autoFocus
              />
            </div>
          </div>

          {/* Input Kelas */}
          <div>
            <label className="block text-xs font-bold text-[#42423E] uppercase tracking-wider mb-1.5 text-left">
              Tingkat Kelas
            </label>
            <div className="relative">
              <GraduationCap className="absolute left-3.5 top-3 w-5 h-5 text-[#8C8A82] pointer-events-none" />
              <select
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl text-[#42423E] text-sm font-medium focus:outline-none focus:border-[#8A9A5B] focus:ring-1 focus:ring-[#8A9A5B] transition-all appearance-none cursor-pointer"
              >
                {classOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-white text-[#42423E]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <p className="text-xs text-[#8C3224] font-medium bg-[#FDE8E5] border border-[#D66D5B] p-2.5 rounded-lg text-left">
              ⚠️ {error}
            </p>
          )}

          {/* Submit Button (Kotak Rounded-xl) */}
          <button
            type="submit"
            id="btn-save-profile"
            className="w-full mt-2 py-3 px-4 bg-[#8A9A5B] hover:bg-[#7A8A4B] text-white font-bold text-sm rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isEditing ? 'Simpan Perubahan' : 'Mulai Petualangan'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
