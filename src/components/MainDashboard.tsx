import React from 'react';
import { CategoryId, UserProfile, ViewState } from '../types';
import { CATEGORIES, LESSON_MODULES } from '../data/lessonsData';
import { sound } from '../utils/sound';
import {
  Dna,
  FlaskConical,
  Zap,
  Globe,
  Microscope,
  Trophy,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
  Flame,
} from 'lucide-react';

interface MainDashboardProps {
  user: UserProfile;
  setView: (view: ViewState) => void;
  onSelectCategory: (catId: CategoryId) => void;
  onStartTest: () => void;
  onOpenProfileModal: () => void;
}

export const MainDashboard: React.FC<MainDashboardProps> = ({
  user,
  setView,
  onSelectCategory,
  onStartTest,
  onOpenProfileModal,
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dna':
        return <Dna className="w-8 h-8 text-[#8A9A5B]" />;
      case 'FlaskConical':
        return <FlaskConical className="w-8 h-8 text-[#D66D5B]" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-[#5B8A9A]" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-[#6B7A5B]" />;
      case 'Microscope':
        return <Microscope className="w-8 h-8 text-[#7B6B8A]" />;
      default:
        return <BookOpen className="w-8 h-8 text-[#8A9A5B]" />;
    }
  };

  const handleCategoryClick = (catId: CategoryId) => {
    sound.playClick();
    onSelectCategory(catId);
  };

  const handleTestClick = () => {
    sound.playVictory();
    onStartTest();
  };

  // Compute overall progress
  const totalLessons = LESSON_MODULES.length;
  const completedCount = user.completedLessons.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalLessons) * 100));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 animate-fade-in text-[#42423E]">
      {/* Welcome Banner (Kotak Card) */}
      <div className="relative overflow-hidden bg-[#EFEDE7] border border-[#E0DDD5] rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#8A9A5B] text-white text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-white fill-white" />
              <span>Petualang Sains Siap Belajar</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-[#2C2C2A]">
              Halo, <span className="font-semibold text-[#8A9A5B]">{user.nama}</span>! 👋
            </h2>
            <p className="text-sm sm:text-base text-[#6E6C64] max-w-2xl">
              Kelas: <span className="font-bold text-[#2C2C2A]">{user.kelas}</span> • Jelajahi materi interaktif, jawab tantangan sains, dan kumpulkan poin prestasimu!
            </p>
          </div>

          {/* Quick Stats Badges (Kotak) */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            {/* Poin Card */}
            <div className="flex-1 sm:flex-none px-4 py-3 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl flex items-center gap-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#E0DDD5] text-[#8A9A5B] flex items-center justify-center font-bold">
                ★
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#8C8A82] uppercase tracking-wider">Total Poin</p>
                <p className="text-lg font-bold text-[#D66D5B]">{user.points.toLocaleString()}</p>
              </div>
            </div>

            {/* Progres Belajar Card */}
            <div className="flex-1 sm:flex-none px-4 py-3 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl flex items-center gap-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#E0DDD5] text-[#8A9A5B] flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#8C8A82] uppercase tracking-wider">Progres Belajar</p>
                <p className="text-lg font-bold text-[#8A9A5B]">{progressPercent}%</p>
              </div>
            </div>

            {/* Edit Profil Button (Kotak) */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenProfileModal();
              }}
              id="btn-edit-profile"
              className="px-3.5 py-3 bg-white hover:bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl text-xs font-bold text-[#42423E] transition-all shadow-xs flex items-center gap-1.5"
              title="Ubah Nama/Kelas"
            >
              <span>⚙️ Profil</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Categories Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2C2C2A] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#8A9A5B]" />
              <span>Pilih Kategori Belajar</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#8C8A82]">
              Pilih topik IPA favoritmu dan mulailah bertualang!
            </p>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              setView('buku-materi');
            }}
            className="text-xs font-bold text-[#8A9A5B] hover:underline flex items-center gap-1 transition-colors"
          >
            <span>Lihat Semua Buku</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid (Kotak Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const lessonsInCat = LESSON_MODULES.filter((m) => m.categoryId === cat.id);
            const completedInCat = lessonsInCat.filter((m) => user.completedLessons.includes(m.id)).length;

            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                id={`cat-card-${cat.id}`}
                className="group cursor-pointer rounded-2xl p-6 bg-white hover:bg-[#FAF9F6] border border-[#E0DDD5] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xs relative overflow-hidden flex flex-col justify-between"
              >
                {/* Category Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#EFEDE7] border border-[#E0DDD5] group-hover:scale-105 transition-transform">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#FAF9F6] border border-[#E0DDD5] text-[#6E6C64]">
                      {completedInCat} / {lessonsInCat.length} Selesai
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8A82]">
                    {cat.badge}
                  </span>
                  <h4 className="text-xl font-bold text-[#2C2C2A] group-hover:text-[#8A9A5B] transition-colors mt-0.5">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-[#6E6C64] mt-2 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Card Footer Action (Kotak) */}
                <div className="mt-6 pt-4 border-t border-[#E0DDD5] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#42423E] group-hover:text-[#8A9A5B] transition-colors">
                    Mulai Belajar
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#EFEDE7] group-hover:bg-[#8A9A5B] group-hover:text-white text-[#42423E] flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Test IPA Special Card (Kotak) */}
          <div
            onClick={handleTestClick}
            id="cat-card-test-ipa"
            className="group cursor-pointer rounded-2xl p-6 bg-gradient-to-br from-[#EFEDE7] via-[#FAF9F6] to-[#F9F8F4] border border-[#D66D5B] hover:border-[#C65D4B] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xs relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#D66D5B] text-white shadow-xs group-hover:scale-105 transition-transform">
                  <Trophy className="w-8 h-8 stroke-[2.5]" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white border border-[#E0DDD5] text-[#D66D5B] uppercase tracking-wider">
                  50 Soal IPA
                </span>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D66D5B]">
                Ujian & Poin Prestasi
              </span>
              <h4 className="text-xl font-bold text-[#2C2C2A] group-hover:text-[#D66D5B] transition-colors mt-0.5">
                Test IPA Interaktif
              </h4>
              <p className="text-xs text-[#6E6C64] mt-2 leading-relaxed">
                Uji pemahamanmu dari Level Mudah (20 soal), Sedang (20 soal), hingga Level Tinggi (10 soal)!
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E0DDD5] flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#D66D5B]">
                Mulai Ujian Sekarang
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#D66D5B] text-white font-bold flex items-center justify-center transition-all group-hover:scale-105">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement & Status Section (Kotak Cards) */}
      <div className="bg-[#EFEDE7] border border-[#E0DDD5] rounded-2xl p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-[#8A9A5B]" />
          <h3 className="text-lg font-bold text-[#2C2C2A]">Pencapaian & Riwayat Belajar</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white border border-[#E0DDD5] space-y-1">
            <p className="text-xs font-semibold text-[#8C8A82] uppercase tracking-wider">Modul Diselesaikan</p>
            <p className="text-2xl font-bold text-[#8A9A5B]">
              {completedCount} <span className="text-sm font-normal text-[#8C8A82]">/ {totalLessons} Modul</span>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E0DDD5] space-y-1">
            <p className="text-xs font-semibold text-[#8C8A82] uppercase tracking-wider">Ujian Diikuti</p>
            <p className="text-2xl font-bold text-[#D66D5B]">
              {user.testHistory.length} <span className="text-sm font-normal text-[#8C8A82]">Kali</span>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E0DDD5] space-y-1">
            <p className="text-xs font-semibold text-[#8C8A82] uppercase tracking-wider">Gelar Petualang</p>
            <p className="text-lg font-bold text-[#8A9A5B]">
              {user.points >= 300
                ? '🏆 Sains Master'
                : user.points >= 100
                ? '⭐ Penjelajah Muda'
                : '🌱 Siswa Pembelajar'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
