import React, { useState } from 'react';
import { CategoryId, LessonModule, UserProfile } from '../types';
import { CATEGORIES, LESSON_MODULES } from '../data/lessonsData';
import { sound } from '../utils/sound';
import { BookOpen, Search, CheckCircle, ArrowRight, Filter } from 'lucide-react';

interface MaterialBookModalProps {
  user: UserProfile;
  onSelectLesson: (lesson: LessonModule) => void;
  initialCategoryId?: CategoryId | null;
}

export const MaterialBookModal: React.FC<MaterialBookModalProps> = ({
  user,
  onSelectLesson,
  initialCategoryId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryId || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredLessons = LESSON_MODULES.filter((lesson) => {
    const matchesCategory = selectedCategory === 'all' || lesson.categoryId === selectedCategory;
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.targetGrade.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLessonClick = (lesson: LessonModule) => {
    sound.playClick();
    onSelectLesson(lesson);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 text-[#42423E] animate-fade-in">
      {/* Header Banner */}
      <div className="bg-[#EFEDE7] border border-[#E0DDD5] rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#8A9A5B] text-white text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Perpustakaan Sains IPA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2C2A]">
              Katalog Buku & Materi Belajar
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6C64] mt-1">
              Pilih modul pembelajaran lengkap khusus SD & SMP untuk dibaca dan dipelajari.
            </p>
          </div>

          {/* Search Field (Kotak Input) */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#8C8A82] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari materi, misal: atom, jantung..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl text-[#42423E] placeholder-[#8C8A82] text-xs sm:text-sm font-medium focus:outline-none focus:border-[#8A9A5B] focus:ring-1 focus:ring-[#8A9A5B]"
            />
          </div>
        </div>

        {/* Category Filters (Kotak Filter Tabs) */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-[#E0DDD5]">
          <span className="text-xs font-bold text-[#8C8A82] flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>

          <button
            onClick={() => {
              sound.playClick();
              setSelectedCategory('all');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#8A9A5B] text-white shadow-xs border border-[#7A8A4B]'
                : 'bg-[#FAF9F6] text-[#42423E] hover:bg-white border border-[#E0DDD5]'
            }`}
          >
            Semua ({LESSON_MODULES.length})
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sound.playClick();
                setSelectedCategory(cat.id);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#8A9A5B] text-white shadow-xs border border-[#7A8A4B]'
                  : 'bg-[#FAF9F6] text-[#42423E] hover:bg-white border border-[#E0DDD5]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Lesson List (Kotak Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredLessons.length > 0 ? (
          filteredLessons.map((lesson) => {
            const isCompleted = user.completedLessons.includes(lesson.id);
            const catInfo = CATEGORIES.find((c) => c.id === lesson.categoryId);

            return (
              <div
                key={lesson.id}
                onClick={() => handleLessonClick(lesson)}
                id={`lesson-card-${lesson.id}`}
                className="group cursor-pointer bg-white border border-[#E0DDD5] hover:border-[#8A9A5B] rounded-2xl p-6 shadow-xs transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#FAF9F6] text-[#8A9A5B] border border-[#E0DDD5]">
                      {catInfo?.title || lesson.categoryId}
                    </span>

                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#FAF9F6] text-[#8A9A5B] border border-[#E0DDD5]">
                        <CheckCircle className="w-3.5 h-3.5" /> Selesai
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-[#8C8A82]">
                        {lesson.targetGrade}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2A] group-hover:text-[#8A9A5B] transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6C64] mt-2 leading-relaxed">
                    {lesson.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E0DDD5] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#8C8A82]">
                    {lesson.pages.length} Halaman Belajar
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#8A9A5B] group-hover:underline">
                    <span>{isCompleted ? 'Baca Ulang' : 'Buka Buku'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full bg-white border border-[#E0DDD5] rounded-2xl p-12 text-center text-[#8C8A82]">
            <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-40 text-[#8C8A82]" />
            <p className="text-base font-bold text-[#2C2C2A]">Materi tidak ditemukan</p>
            <p className="text-xs text-[#8C8A82] mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
          </div>
        )}
      </div>
    </div>
  );
};
