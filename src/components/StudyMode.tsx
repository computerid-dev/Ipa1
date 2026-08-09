import React, { useState } from 'react';
import { LessonModule, UserProfile } from '../types';
import { BottomBar } from './BottomBar';
import { sound } from '../utils/sound';
import { CheckCircle2, HelpCircle, Lightbulb, Sparkles, Award } from 'lucide-react';

interface StudyModeProps {
  lesson: LessonModule;
  user: UserProfile;
  onCompleteLesson: (lessonId: string, earnedPoints: number) => void;
  onExit: () => void;
}

export const StudyMode: React.FC<StudyModeProps> = ({
  lesson,
  user,
  onCompleteLesson,
  onExit,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [earnedInLesson, setEarnedInLesson] = useState<number>(0);

  const currentPage = lesson.pages[currentPageIndex];
  const totalPages = lesson.pages.length;
  const isLastPage = currentPageIndex === totalPages - 1;
  const question = currentPage?.microQuestion;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (question && idx === question.correctIndex) {
      sound.playCorrect();
      setEarnedInLesson((prev) => prev + 10);
    } else {
      sound.playWrong();
    }
  };

  const handleNextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const handleFinish = () => {
    sound.playVictory();
    onCompleteLesson(lesson.id, earnedInLesson);
    onExit();
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] pb-28 pt-6 px-4 sm:px-6 max-w-4xl mx-auto space-y-6 text-[#42423E] animate-fade-in">
      {/* Top Info Banner (Kotak Card) */}
      <div className="bg-[#EFEDE7] border border-[#E0DDD5] rounded-2xl p-5 shadow-xs flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#8A9A5B] px-2.5 py-1 rounded-md">
            Modul Pembelajaran
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#2C2C2A] mt-1">{lesson.title}</h2>
          <p className="text-xs text-[#6E6C64] mt-0.5">{lesson.targetGrade}</p>
        </div>

        <div className="text-right">
          <p className="text-[11px] font-semibold text-[#8C8A82] uppercase tracking-wider">Poin Didapat</p>
          <p className="text-lg font-bold text-[#D66D5B]">+{earnedInLesson} Poin</p>
        </div>
      </div>

      {/* Main Content Box (Kotak Card) */}
      <div className="bg-white border border-[#E0DDD5] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        {/* Page Title */}
        <div className="pb-4 border-b border-[#E0DDD5] flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-[#8A9A5B]">
            {currentPage.pageNumber}. {currentPage.title}
          </h3>
          <span className="text-xs font-semibold text-[#6E6C64] bg-[#FAF9F6] border border-[#E0DDD5] px-3 py-1 rounded-lg">
            Halaman {currentPageIndex + 1} / {totalPages}
          </span>
        </div>

        {/* Text Explanation Body */}
        <div className="prose max-w-none text-[#42423E] text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-normal">
          {currentPage.content}
        </div>

        {/* Key Takeaway Highlight Box (Kotak) */}
        {currentPage.keyTakeaway && (
          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E0DDD5] text-[#42423E] flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-[#8A9A5B] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#8A9A5B] mb-0.5">Rangkuman Kunci</p>
              <p className="text-xs sm:text-sm font-medium">{currentPage.keyTakeaway}</p>
            </div>
          </div>
        )}

        {/* Micro Question Challenge (Kotak) */}
        {question && (
          <div className="mt-8 pt-6 border-t border-[#E0DDD5] space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#D66D5B]" />
              <h4 className="text-sm font-bold text-[#D66D5B] uppercase tracking-wider">
                Uji Pemahaman Singkat (+10 Poin)
              </h4>
            </div>

            <p className="text-sm sm:text-base font-semibold text-[#2C2C2A] bg-[#FAF9F6] p-4 rounded-xl border border-[#E0DDD5]">
              {question.question}
            </p>

            {/* Answer Option Cards (Kotak) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === question.correctIndex;

                let style =
                  'bg-white hover:bg-[#FAF9F6] border-[#E0DDD5] text-[#42423E]';

                if (isAnswered) {
                  if (isCorrect) {
                    style = 'bg-[#EAF2E1] border-[#8A9A5B] text-[#3B5838] font-bold';
                  } else if (isSelected) {
                    style = 'bg-[#FDE8E5] border-[#D66D5B] text-[#8C3224] font-bold';
                  } else {
                    style = 'bg-[#FAF9F6] border-[#E0DDD5] text-[#8C8A82] opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    id={`micro-opt-${idx}`}
                    className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-2 ${style}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-[#8A9A5B]" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation Feedback Banner */}
            {isAnswered && (
              <div
                className={`p-4 rounded-xl text-xs sm:text-sm border animate-fade-in ${
                  selectedOption === question.correctIndex
                    ? 'bg-[#EAF2E1] border-[#8A9A5B] text-[#3B5838]'
                    : 'bg-[#FDE8E5] border-[#D66D5B] text-[#8C3224]'
                }`}
              >
                <p className="font-bold flex items-center gap-1.5 mb-1">
                  {selectedOption === question.correctIndex ? (
                    <>
                      <Sparkles className="w-4 h-4 text-[#8A9A5B]" />
                      Jawabanmu Tepat! (+10 Poin)
                    </>
                  ) : (
                    ' Jawaban Kurang Tepat'
                  )}
                </p>
                <p className="text-[#6E6C64]">{question.explanation}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Bar Controls with BULAT "←" and "→" buttons */}
      <BottomBar
        currentPage={currentPageIndex + 1}
        totalPages={totalPages}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        isLastPage={isLastPage}
        canNext={true}
        onComplete={handleFinish}
      />
    </div>
  );
};
