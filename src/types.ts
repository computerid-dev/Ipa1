export type CategoryId = 'biologi' | 'kimia' | 'fisika' | 'ilmu-bumi' | 'sains-umum';

export interface UserProfile {
  nama: string;
  kelas: string; // e.g. "SD Kelas 5", "SMP Kelas 7"
  points: number;
  completedLessons: string[]; // lesson IDs
  testHistory: TestHistoryItem[];
  joinedAt: string;
}

export interface TestHistoryItem {
  id: string;
  date: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  levelBreakdown: {
    mudah: { correct: number; total: number };
    sedang: { correct: number; total: number };
    tinggi: { correct: number; total: number };
  };
}

export interface MicroQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonPage {
  pageNumber: number;
  title: string;
  content: string; // Rich text / formatted markdown-style text
  imageConcept?: string; // Concept illustration badge/SVG
  keyTakeaway?: string;
  microQuestion?: MicroQuestion;
}

export interface LessonModule {
  id: string;
  categoryId: CategoryId;
  title: string;
  targetGrade: string; // e.g. "SD Kelas 5 - SMP Kelas 8"
  description: string;
  iconName: string;
  color: string;
  pages: LessonPage[];
}

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  description: string;
  icon: string;
  color: string;
  badge: string;
  bgGradient: string;
  lessonsCount: number;
}

export type QuizLevel = 'mudah' | 'sedang' | 'tinggi';

export interface TestQuestion {
  id: number;
  level: QuizLevel;
  category: CategoryId;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type ViewState = 'home' | 'buku-materi' | 'study' | 'test-ipa' | 'settings' | 'developer-info';
