export type ConditionTypes = 'cardiovascular' | 'gastrointestinal' | 'psychological' | 'other';
export type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly';
export type Steps = 'General data' | 'Health profile' | 'Medical questions' | 'Summary' | 'Confirm';

export const steps: { step: Steps; path: string }[] = [
  {
    step: 'General data',
    path: '/enrollment',
  },
  {
    step: 'Health profile',
    path: '/enrollment/health-profile',
  },
  {
    step: 'Medical questions',
    path: '/enrollment/medical-questions',
  },
  {
    step: 'Summary',
    path: '/enrollment/summary',
  },
  {
    step: 'Confirm',
    path: '/enrollment/confirm',
  },
];

export interface Condition {
  type: ConditionTypes;
  condition: string;
}
export type HabitQuestion =
  | {
      question: string;
      answer?: 'no';
    }
  | {
      question: string;
      answer: 'yes';
      howMuch: number;
      howOften: Frequency;
    };
export interface HistoryQuestion {
  question: string;
  description: string;
  answer: string[];
}
