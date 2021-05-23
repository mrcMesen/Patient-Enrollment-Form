import { Condition, HabitQuestion, HistoryQuestion } from '@app/types';
import { Action } from './actions';

export type GeneralDataItem =
  | 'firstName'
  | 'lastName'
  | 'gender'
  | 'birthdate'
  | 'email'
  | 'phoneNumber'
  | 'streetaddress'
  | 'city'
  | 'state'
  | 'zipCode'
  | 'maritalStatus';

export enum ActionType {
  ADVANCE_STEP = 'ADVANCE_STEP',
  BACK_STEP = 'BACK_STEP',
  UPDATE_GENERAL_DATA = 'UPDATE_GENERAL_DATA',
  ADD_CONDITION = 'ADD_CONDITION',
  REMOVE_CONDITION = 'REMOVE_CONDITION',
  ADD_HABIT_QUESTION = 'ADD_HABIT_QUESTION',
  ADD_HISTORY_QUESTION = 'ADD_HISTORY_QUESTION',
  REMOVE_HISTORY_QUESTION = 'REMOVE_HISTORY_QUESTION',
}

export type Dispatch = (action: Action) => void;

export interface State {
  step: number;
  generalData: Record<GeneralDataItem, string>;
  conditions: Condition[];
  habits: HabitQuestion[];
  history: HistoryQuestion[];
}

export const initialState: State = {
  step: 0,
  generalData: {
    firstName: '',
    lastName: '',
    gender: '',
    birthdate: '',
    email: '',
    phoneNumber: '',
    streetaddress: '',
    city: '',
    state: '',
    zipCode: '',
    maritalStatus: '',
  },
  conditions: [],
  habits: [
    {
      question: 'Do you smoke any tobacco products?',
    },
    {
      question: 'Do you drink alcohol?',
    },
    {
      question: 'Have you regularly used illicit drugs?',
    },
  ],
  history: [
    {
      question: 'Current medications',
      description:
        'Please, list any medications you are currently taking including non-prescription medications, vitamins and supplements.',
      answer: [],
    },
    {
      question: 'Medication allergies or reactions',
      description: 'Please, list any medication allergies or reactions',
      answer: [],
    },
    {
      question: 'Type of surgeries or reason for hospitalizations',
      description: 'Please, list any surgeries or hospital stays you have had and their approximate date / year',
      answer: [],
    },
  ],
};
