import React, { useState } from 'react';
import { TestHistoryItem, TestQuestion, UserProfile } from '../types';
import { TEST_QUESTIONS } from '../data/questionsData';
import { BottomBar } from './BottomBar';
import { sound } from '../utils/sound';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  Award,
  RotateCcw,
  Check,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

interface TestIPAModeProps {
  user: UserProfile;
  onCompleteTest: (result: TestHistoryItem, earnedPoints: number) => void;
  onExit: () => void;
}

export const TestIPAMode: React.FC<TestIPAModeProps> = ({
  user,
  onCompleteTest,
  onExit,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showMatrix, setShowMatrix] = useState<boolean>(false);

  const totalQuestions = TEST_QUESTIONS.length;
  const currentQuestion: TestQuestion = TEST_QUESTIONS[currentIdx];

  const handleSelectOption = (qId: number, optIdx: number) => {
    sound.playClick();
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optIdx,
    }));
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleSubmitTest = () => {
    sound.playVictory();

    // Calculate score breakdown
    let correctCount = 0;
    let wrongCount = 0;
    let earnedPoints = 0;

    const breakdown = {
      mudah: { correct: 0, total: 20 },
      sedang: { correct: 0, total: 20 },
      tinggi: { correct: 0, total: 10 },
    };

    TEST_QUESTIONS.forEach((q) => {
      const userChoice = userAnswers[q.id];
      if (userChoice === q.correctIndex) {
        correctCount++;
        if (q.level === 'mudah') {
          breakdown.mudah.correct++;
          earnedPoints += 10;
        } else if (q.level === 'sedang') {
          breakdown.sedang.correct++;
          earnedPoints += 15;
        } else if (q.level === 'tinggi') {
          breakdown.tinggi.correct++;
          earnedPoints += 20;
        }
      } else {
        wrongCount++;
      }
    });

    const result: TestHistoryItem = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('id-ID'),
      score: earnedPoints,
      totalQuestions,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      levelBreakdown: breakdown,
    };

    setIsSubmitted(true);
    onCompleteTest(result, earnedPoints);
  };

  // If submitted, show result summary certificate & detailed review
  if (isSubmitted) {
    let totalScore = 0;
    let totalCorrect = 0;
    TEST_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        totalCorrect++;
        if (q.level === 'mudah') totalScore += 10;
        else if (q.level === 'sedang') totalScore += 15;
        else if (q.level === 'tinggi') totalScore += 20;
      }
    });

    const percent = Math.round((totalCorrect / totalQuestions) * 100);

    let titleRank = 'Siswa Pembelajar IPA';
    if (percent >= 90) titleRank = '🏆 Genius Sains Master';
    else if (percent >= 75) titleRank = '⭐ Penjelajah Sains Unggul';
    else if (percent >= 50) titleRank = '🌱 Pejuang IPA Muda';

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fade-in text-[#42423E]">
        {/* Certificate Result Card (Kotak) */}
        <div className="bg-white border border-[#E0DDD5] rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-[#8A9A5B] text-white flex items-center justify-center shadow-xs">
            <Trophy className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#8A9A5B] px-3 py-1 rounded-md">
              Hasil Ujian Test IPA
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#2C2C2A] mt-2">{titleRank}</h2>
            <p className="text-sm text-[#6E6C64] mt-1">
              Selamat <span className="font-bold text-[#8A9A5B]">{user.nama}</span> ({user.kelas})! Kamu telah menyelesaikan 50 Soal Test IPA.
            </p>
          </div>

          {/* Scores Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#E0DDD5]">
            <div className="p-3 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8C8A82]">Total Poin</p>
              <p className="text-2xl font-bold text-[#D66D5B]">+{totalScore}</p>
            </div>

            <div className="p-3 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8C8A82]">Jawaban Benar</p>
              <p className="text-2xl font-bold text-[#8A9A5B]">{totalCorrect} / 50</p>
            </div>

            <div className="p-3 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8C8A82]">Jawaban Salah</p>
              <p className="text-2xl font-bold text-[#D66D5B]">{50 - totalCorrect}</p>
            </div>

            <div className="p-3 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8C8A82]">Akurasi Nilai</p>
              <p className="text-2xl font-bold text-[#5B8A9A]">{percent}%</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                sound.playClick();
                onExit();
              }}
              className="px-6 py-3 bg-[#8A9A5B] hover:bg-[#7A8A4B] text-white font-bold text-sm rounded-xl shadow-xs transition-all"
            >
              Kembali ke Menu Utama
            </button>
          </div>
        </div>

        {/* Detailed Question Review List (Kotak Cards) */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#2C2C2A] flex items-center gap-2">
            <Award className="w-5 h-5 text-[#8A9A5B]" />
            <span>Pembahasan & Kunci Jawaban (50 Soal)</span>
          </h3>

          <div className="space-y-4">
            {TEST_QUESTIONS.map((q) => {
              const uChoice = userAnswers[q.id];
              const isCorrect = uChoice === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border text-sm space-y-3 bg-white ${
                    isCorrect ? 'border-[#8A9A5B]' : 'border-[#D66D5B]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#E0DDD5] text-[#6E6C64]">
                      Soal #{q.id} • Level {q.level.toUpperCase()}
                    </span>

                    {isCorrect ? (
                      <span className="text-xs font-bold text-[#8A9A5B] flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Benar
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-[#D66D5B] flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Salah
                      </span>
                    )}
                  </div>

                  <p className="font-semibold text-[#2C2C2A]">{q.question}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, oIdx) => {
                      const isUserPick = uChoice === oIdx;
                      const isRightOption = oIdx === q.correctIndex;

                      let cls = 'bg-[#FAF9F6] text-[#6E6C64] border-[#E0DDD5]';
                      if (isRightOption) cls = 'bg-[#EAF2E1] text-[#3B5838] border-[#8A9A5B] font-bold';
                      else if (isUserPick && !isRightOption) cls = 'bg-[#FDE8E5] text-[#8C3224] border-[#D66D5B]';

                      return (
                        <div key={oIdx} className={`p-2.5 rounded-lg border ${cls}`}>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-xs text-[#6E6C64] bg-[#FAF9F6] p-3 rounded-xl border border-[#E0DDD5]">
                    💡 <span className="font-bold text-[#8A9A5B]">Penjelasan:</span> {q.explanation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Answered count
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="min-h-[calc(100vh-4rem)] pb-28 pt-6 px-4 sm:px-6 max-w-4xl mx-auto space-y-6 text-[#42423E] animate-fade-in">
      {/* Test Top Navigation Header (Kotak Card) */}
      <div className="bg-[#EFEDE7] border border-[#E0DDD5] rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#D66D5B] px-2.5 py-1 rounded-md">
              Ujian Test IPA 50 Soal
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C2C2A] mt-1">
              Soal #{currentQuestion.id} dari 50
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Question Matrix Toggle (Kotak) */}
            <button
              onClick={() => {
                sound.playClick();
                setShowMatrix(!showMatrix);
              }}
              className="px-3 py-2 bg-white hover:bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl text-xs font-bold text-[#42423E] transition-all"
            >
              {showMatrix ? 'Tutup Nomor Soal' : `Matriks Soal (${answeredCount}/50)`}
            </button>

            {/* Finish Test Button */}
            <button
              onClick={handleSubmitTest}
              className="px-4 py-2 bg-[#8A9A5B] hover:bg-[#7A8A4B] text-white text-xs font-bold rounded-xl shadow-xs transition-all"
            >
              Kumpulkan Test
            </button>
          </div>
        </div>

        {/* Level Indicator Tabs */}
        <div className="flex items-center gap-2 text-xs font-bold pt-2 border-t border-[#E0DDD5]">
          <span
            className={`px-3 py-1 rounded-lg border ${
              currentQuestion.level === 'mudah'
                ? 'bg-[#EAF2E1] text-[#3B5838] border-[#8A9A5B]'
                : 'bg-[#FAF9F6] text-[#8C8A82] border-[#E0DDD5]'
            }`}
          >
            Level Mudah (Soal 1-20)
          </span>

          <span
            className={`px-3 py-1 rounded-lg border ${
              currentQuestion.level === 'sedang'
                ? 'bg-[#FEF3E2] text-[#8A5B2D] border-[#D6A15B]'
                : 'bg-[#FAF9F6] text-[#8C8A82] border-[#E0DDD5]'
            }`}
          >
            Level Sedang (Soal 21-40)
          </span>

          <span
            className={`px-3 py-1 rounded-lg border ${
              currentQuestion.level === 'tinggi'
                ? 'bg-[#FDE8E5] text-[#8C3224] border-[#D66D5B]'
                : 'bg-[#FAF9F6] text-[#8C8A82] border-[#E0DDD5]'
            }`}
          >
            Level Tinggi (Soal 41-50)
          </span>
        </div>

        {/* Question Matrix Drawer */}
        {showMatrix && (
          <div className="p-4 bg-white rounded-xl border border-[#E0DDD5] animate-fade-in">
            <p className="text-xs font-bold text-[#42423E] mb-2">Lompat Langsung ke Nomor Soal:</p>
            <div className="grid grid-cols-10 gap-1.5">
              {TEST_QUESTIONS.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isCurrent = idx === currentIdx;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      sound.playClick();
                      setCurrentIdx(idx);
                      setShowMatrix(false);
                    }}
                    className={`py-1.5 rounded-lg text-xs font-bold border transition-all ${
                      isCurrent
                        ? 'bg-[#8A9A5B] text-white border-[#7A8A4B] font-extrabold'
                        : isAnswered
                        ? 'bg-[#EAF2E1] text-[#3B5838] border-[#8A9A5B]'
                        : 'bg-[#FAF9F6] text-[#8C8A82] border-[#E0DDD5] hover:bg-white'
                    }`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Question Card Box (Kotak) */}
      <div className="bg-white border border-[#E0DDD5] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <p className="text-base sm:text-lg font-bold text-[#2C2C2A] leading-relaxed">
          {currentQuestion.question}
        </p>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((opt, optIdx) => {
            const isSelected = userAnswers[currentQuestion.id] === optIdx;

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(currentQuestion.id, optIdx)}
                id={`q-opt-${optIdx}`}
                className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#EAF2E1] border-[#8A9A5B] text-[#3B5838] font-bold shadow-xs'
                    : 'bg-[#FAF9F6] hover:bg-white border-[#E0DDD5] text-[#42423E]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#E0DDD5] border border-[#C2BFB5] text-xs font-bold flex items-center justify-center text-[#42423E]">
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span>{opt}</span>
                </div>

                {isSelected && <Check className="w-5 h-5 text-[#8A9A5B]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation with BULAT "←" and "→" buttons */}
      <BottomBar
        currentPage={currentIdx + 1}
        totalPages={totalQuestions}
        onPrevPage={handlePrev}
        onNextPage={handleNext}
        isLastPage={currentIdx === totalQuestions - 1}
        canNext={true}
        onComplete={handleSubmitTest}
      />
    </div>
  );
};
