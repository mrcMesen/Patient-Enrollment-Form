import { Condition, HabitQuestion } from '@app/types';
import { ActionType } from './types';

export type Action =
  | { type: ActionType.ADVANCE_STEP }
  | { type: ActionType.BACK_STEP }
  | {
      type: ActionType.UPDATE_GENERAL_DATA;
      payload: Record<string, string>;
    }
  | { type: ActionType.ADD_CONDITION; payload: Condition }
  | { type: ActionType.REMOVE_CONDITION; payload: Condition }
  | { type: ActionType.ADD_HABIT_QUESTION; payload: HabitQuestion }
  | { type: ActionType.ADD_HISTORY_QUESTION; payload: { question: number; answer: string } }
  | { type: ActionType.REMOVE_HISTORY_QUESTION; payload: { question: number; answer: string } };
