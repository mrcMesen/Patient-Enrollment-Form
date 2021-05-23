type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export const conditions = ['cardiovascular', 'gastrointestinal', 'psychological', 'other'] as const;
export type ConditionType = ElementType<typeof conditions>;
export const frequencies = ['daily', 'weekly', 'monthly', 'yearly'] as const;
export type FrequencyType = ElementType<typeof frequencies>;

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
  type: ConditionType;
  condition: string;
}
export type HabitQuestion = {
  question: string;
  answer?: 'no' | 'yes';
  howMuch?: number;
  howOften?: FrequencyType | '';
};
export interface HistoryQuestion {
  question: string;
  description: string;
  answer: string[];
}
