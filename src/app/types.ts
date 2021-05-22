export type ConditionTypes = 'cardiovascular' | 'gastrointestinal' | 'psychological' | 'other';

export interface Condition {
  type: string;
  condition: string;
  selected: boolean;
}
