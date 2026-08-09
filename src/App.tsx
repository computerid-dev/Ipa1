import React, { useState, useEffect } from 'react';
import { CategoryId, LessonModule, TestHistoryItem, UserProfile, ViewState } from './types';
import { LESSON_MODULES } from './data/lessonsData';
import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { MainDashboard } from './components/MainDashboard';
import { MaterialBookModal } from './components/MaterialBookModal';
import { StudyMode } from './components/StudyMode';
import { TestIPAMode } from './components/TestIPAMode';
import { SettingsModal } from './components/SettingsModal';
import { DeveloperInfoModal } from './components/DeveloperInfoModal';
import { OnboardingModal } from './components/OnboardingModal';
import { sound } from './utils/sound';

const USER_STORAGE_KEY = 'science_adventure_user_v1';
const SOUND_STORAGE_KEY = 'science_adventure_sound_v1';
const PARTICLE_STORAGE_KEY = 'science_adventure_particles_v1';

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(USER_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore parse errors
    }
    return null;
  });

  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [activeLesson, setActiveLesson] = useState<LessonModule | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<CategoryId | null>(null);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(!user);

  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(SOUND_STORAGE_KEY);
      if (saved !== null) return JSON.parse(saved);
    } catch {}
    return true;
  });

  const [particlesEnabled, setParticlesEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(PARTICLE_STORAGE_KEY);
      if (saved !== null) return JSON.parse(saved);
    } catch {}
    return true;
  });

  // Save user profile to local storage whenever updated
  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      } catch {}
    }
  }, [user]);

  // Sync sound setting
  useEffect(() => {
    sound.setEnabled(soundEnabled);
    try {
      localStorage.setItem(SOUND_STORAGE_KEY, JSON.stringify(soundEnabled));
    } catch {}
  }, [soundEnabled]);

  // Sync particle setting
  useEffect(() => {
    try {
      localStorage.setItem(PARTICLE_STORAGE_KEY, JSON.stringify(particlesEnabled));
    } catch {}
  }, [particlesEnabled]);

  const handleSaveProfile = (newProfile: UserProfile) => {
    setUser(newProfile);
    setShowOnboarding(false);
  };

  const handleSelectCategory = (catId: CategoryId) => {
    setSelectedCategoryFilter(catId);
    setCurrentView('buku-materi');
  };

  const handleSelectLesson = (lesson: LessonModule) => {
    setActiveLesson(lesson);
    setCurrentView('study');
  };

  const handleCompleteLesson = (lessonId: string, earnedPoints: number) => {
    if (!user) return;
    setUser((prev) => {
      if (!prev) return prev;
      const alreadyCompleted = prev.completedLessons.includes(lessonId);
      const updatedLessons = alreadyCompleted
        ? prev.completedLessons
        : [...prev.completedLessons, lessonId];

      return {
        ...prev,
        points: prev.points + earnedPoints,
        completedLessons: updatedLessons,
      };
    });
  };

  const handleCompleteTest = (result: TestHistoryItem, earnedPoints: number) => {
    if (!user) return;
    setUser((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        points: prev.points + earnedPoints,
        testHistory: [result, ...prev.testHistory],
      };
    });
  };

  const handleResetData = () => {
    try {
      localStorage.removeItem(USER_STORAGE_KEY);
    } catch {}
    setUser(null);
    setShowOnboarding(true);
    setCurrentView('home');
  };

  // Default guest user profile for initial rendering before onboarding
  const activeUser: UserProfile = user || {
    nama: 'Petualang Muda',
    kelas: 'SD Kelas 5',
    points: 0,
    completedLessons: [],
    testHistory: [],
    joinedAt: new Date().toLocaleDateString('id-ID'),
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#42423E] font-sans selection:bg-[#8A9A5B] selection:text-white relative overflow-x-hidden">
      {/* Background Particles */}
      <ParticleBackground enabled={particlesEnabled} />

      {/* Navigation Bar */}
      <Navbar
        currentView={currentView}
        setView={(v) => {
          if (v !== 'study') setActiveLesson(null);
          setCurrentView(v);
        }}
        user={activeUser}
        activeLessonTitle={activeLesson?.title}
        onExitStudyOrTest={() => {
          setActiveLesson(null);
          setCurrentView('home');
        }}
      />

      {/* Main View Router */}
      <main className="relative z-10">
        {currentView === 'home' && (
          <MainDashboard
            user={activeUser}
            setView={setCurrentView}
            onSelectCategory={handleSelectCategory}
            onStartTest={() => setCurrentView('test-ipa')}
            onOpenProfileModal={() => setShowOnboarding(true)}
          />
        )}

        {currentView === 'buku-materi' && (
          <MaterialBookModal
            user={activeUser}
            onSelectLesson={handleSelectLesson}
            initialCategoryId={selectedCategoryFilter}
          />
        )}

        {currentView === 'study' && activeLesson && (
          <StudyMode
            lesson={activeLesson}
            user={activeUser}
            onCompleteLesson={handleCompleteLesson}
            onExit={() => {
              setActiveLesson(null);
              setCurrentView('buku-materi');
            }}
          />
        )}

        {currentView === 'test-ipa' && (
          <TestIPAMode
            user={activeUser}
            onCompleteTest={handleCompleteTest}
            onExit={() => setCurrentView('home')}
          />
        )}

        {currentView === 'settings' && (
          <SettingsModal
            user={activeUser}
            onUpdateProfile={handleSaveProfile}
            onResetData={handleResetData}
            soundEnabled={soundEnabled}
            onToggleSound={setSoundEnabled}
            particlesEnabled={particlesEnabled}
            onToggleParticles={setParticlesEnabled}
          />
        )}

        {currentView === 'developer-info' && <DeveloperInfoModal />}
      </main>

      {/* Onboarding Modal (Modal First Time / Profile Edit) */}
      {showOnboarding && (
        <OnboardingModal
          onSaveProfile={handleSaveProfile}
          initialProfile={user}
          isEditing={!!user}
          onClose={user ? () => setShowOnboarding(false) : undefined}
        />
      )}
    </div>
  );
}
