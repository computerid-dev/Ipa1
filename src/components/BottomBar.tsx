import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';

interface BottomBarProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  isLastPage?: boolean;
  canNext?: boolean; // e.g., if microquestion must be answered first or allowed
  customNextText?: string;
  onComplete?: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  isLastPage = false,
  canNext = true,
  customNextText,
  onComplete,
}) => {
  const handlePrev = () => {
    sound.playPageTurn();
    onPrevPage();
  };

  const handleNext = () => {
    if (!canNext) return;
    sound.playPageTurn();
    if (isLastPage && onComplete) {
      onComplete();
    } else {
      onNextPage();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#EFEDE7] border-t border-[#E0DDD5] py-3 px-4 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        {/* BULAT "←" Sebelumnya Button */}
        <button
          onClick={handlePrev}
          disabled={currentPage <= 1}
          id="btn-prev-circular"
          title="Halaman Sebelumnya (←)"
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all shadow-xs border ${
            currentPage <= 1
              ? 'bg-[#FAF9F6] text-[#B0AEA4] border-[#E0DDD5] cursor-not-allowed opacity-50'
              : 'bg-[#E0DDD5] hover:bg-[#D5D2C8] text-[#42423E] border-[#C2BFB5] hover:scale-105 active:scale-95'
          }`}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Center Page Progress Dots */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <div
                key={idx}
                className={`h-2.5 transition-all duration-300 rounded-full ${
                  idx + 1 === currentPage
                    ? 'w-7 bg-[#8A9A5B] shadow-xs'
                    : idx + 1 < currentPage
                    ? 'w-2.5 bg-[#8A9A5B]/60'
                    : 'w-2.5 bg-[#E0DDD5]'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-[#8C8A82] uppercase tracking-wider">
            Halaman {currentPage} dari {totalPages}
          </span>
        </div>

        {/* BULAT "→" Berikutnya Button */}
        <button
          onClick={handleNext}
          disabled={!canNext}
          id="btn-next-circular"
          title={isLastPage ? 'Selesai' : 'Halaman Berikutnya (→)'}
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all shadow-xs border ${
            !canNext
              ? 'bg-[#FAF9F6] text-[#B0AEA4] border-[#E0DDD5] cursor-not-allowed opacity-50'
              : isLastPage
              ? 'bg-[#8A9A5B] hover:bg-[#7A8A4B] text-white border-[#7A8A4B] hover:scale-105 active:scale-95'
              : 'bg-[#8A9A5B] hover:bg-[#7A8A4B] text-white border-[#7A8A4B] hover:scale-105 active:scale-95'
          }`}
        >
          {isLastPage ? (
            <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <ArrowRight className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};
