import React from 'react';
import { ViewState, UserProfile } from '../types';
import { sound } from '../utils/sound';
import { Home, BookOpen, Trophy, Settings, Info, X, Zap } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  user: UserProfile;
  activeLessonTitle?: string;
  onExitStudyOrTest?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setView,
  user,
  activeLessonTitle,
  onExitStudyOrTest,
}) => {
  const isStudyOrTestMode = currentView === 'study' || currentView === 'test-ipa';

  const handleNavClick = (view: ViewState) => {
    sound.playClick();
    setView(view);
  };

  const handleExitClick = () => {
    sound.playClick();
    if (onExitStudyOrTest) {
      onExitStudyOrTest();
    } else {
      setView('home');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#EFEDE7] border-b border-[#E0DDD5] text-[#42423E] shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* BULAT "X" Button - Strictly Circular */}
          {isStudyOrTestMode ? (
            <button
              onClick={handleExitClick}
              id="btn-exit-circular"
              title="Keluar ke Menu Utama (X)"
              className="w-10 h-10 rounded-full bg-[#D66D5B] hover:opacity-90 text-white flex items-center justify-center font-bold text-lg shadow-sm transition-all transform hover:scale-105 active:scale-95 border border-[#C65D4B]"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          ) : (
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#8A9A5B] text-white flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 fill-white" />
              </div>
              <div className="hidden xs:block">
                <h1 className="text-base font-bold tracking-tight text-[#2C2C2A]">
                  Science Adventure
                </h1>
                <p className="text-[10px] text-[#8C8A82] font-medium">Edukasi IPA Interaktif</p>
              </div>
            </div>
          )}

          {/* Active Lesson Header info if in Study Mode */}
          {currentView === 'study' && activeLessonTitle && (
            <div className="hidden md:flex items-center gap-2 pl-3 border-l border-[#E0DDD5]">
              <span className="text-xs font-semibold text-[#8A9A5B] truncate max-w-xs">
                📖 {activeLessonTitle}
              </span>
            </div>
          )}
        </div>

        {/* Center/Right Section: User Quick Badge & Navbar Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Points Pill (Kotak Badge) */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF9F6] border border-[#E0DDD5] text-[#8A9A5B] text-xs sm:text-sm font-bold">
            <span className="text-[#8A9A5B] font-black">★</span>
            <span>{user.points.toLocaleString()}</span>
            <span className="text-[10px] text-[#8C8A82] uppercase tracking-wider hidden sm:inline">Poin</span>
          </div>

          {/* User Class Badge */}
          <div className="hidden lg:flex items-center px-2.5 py-1.5 rounded-xl bg-[#FAF9F6] border border-[#E0DDD5] text-[#6E6C64] text-xs font-medium">
            <span>{user.nama} ({user.kelas})</span>
          </div>

          {/* Navigation Menu Buttons - ALL KOTAK (Rounded-xl) */}
          <nav className="flex items-center gap-1 sm:gap-1.5">
            {/* 🏠 Home */}
            <button
              id="btn-nav-home"
              onClick={() => handleNavClick('home')}
              className={`px-2.5 sm:px-3 py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all ${
                currentView === 'home'
                  ? 'bg-[#8A9A5B] text-white shadow-sm font-semibold border border-[#7A8A4B]'
                  : 'bg-[#FAF9F6] hover:bg-white text-[#42423E] border border-[#E0DDD5]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden md:inline">Beranda</span>
            </button>

            {/* 📖 Buku Materi */}
            <button
              id="btn-nav-buku"
              onClick={() => handleNavClick('buku-materi')}
              className={`px-2.5 sm:px-3 py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all ${
                currentView === 'buku-materi'
                  ? 'bg-[#5B8A9A] text-white shadow-sm font-semibold border border-[#4B7A8A]'
                  : 'bg-[#FAF9F6] hover:bg-white text-[#42423E] border border-[#E0DDD5]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline">Buku</span>
            </button>

            {/* 🏆 Test IPA */}
            <button
              id="btn-nav-test"
              onClick={() => handleNavClick('test-ipa')}
              className={`px-2.5 sm:px-3 py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all ${
                currentView === 'test-ipa'
                  ? 'bg-[#D66D5B] text-white shadow-sm font-semibold border border-[#C65D4B]'
                  : 'bg-[#FAF9F6] hover:bg-white text-[#42423E] border border-[#E0DDD5]'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span className="hidden sm:inline">Test IPA</span>
            </button>

            {/* ⚙️ Pengaturan */}
            <button
              id="btn-nav-settings"
              onClick={() => handleNavClick('settings')}
              className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all ${
                currentView === 'settings'
                  ? 'bg-[#6E6C64] text-white font-semibold border border-[#5E5C54]'
                  : 'bg-[#FAF9F6] hover:bg-white text-[#42423E] border border-[#E0DDD5]'
              }`}
              title="Pengaturan"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden lg:inline">Pengaturan</span>
            </button>

            {/* ℹ️ Info Developer */}
            <button
              id="btn-nav-developer"
              onClick={() => handleNavClick('developer-info')}
              className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all ${
                currentView === 'developer-info'
                  ? 'bg-[#6B7A5B] text-white shadow-sm font-semibold border border-[#5B6A4B]'
                  : 'bg-[#FAF9F6] hover:bg-white text-[#42423E] border border-[#E0DDD5]'
              }`}
              title="Info Developer"
            >
              <Info className="w-4 h-4" />
              <span className="hidden xl:inline">Info Dev</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
