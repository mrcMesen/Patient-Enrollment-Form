import { ActionType, GeneralDataItem, State } from './types';
import { Action } from './actions';

export const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ADVANCE_STEP:
      return { ...state, step: state.step + 1 };
    case ActionType.BACK_STEP:
      return { ...state, step: state.step - 1 };
    case ActionType.UPDATE_GENERAL_DATA:
      return {
        ...state,
        generalData: { ...state.generalData, ...(action.payload as Record<GeneralDataItem, string>) },
      };
    case ActionType.ADD_CONDITION:
      return { ...state, conditions: [...state.conditions, action.payload] };
    case ActionType.REMOVE_CONDITION:
      return {
        ...state,
        conditions: state.conditions.filter((condition) => condition.condition !== action.payload.condition),
      };
    case ActionType.ADD_HABIT_QUESTION:
      return { ...state, habits: [...state.habits, action.payload] };
    case ActionType.ADD_HISTORY_QUESTION:
      return {
        ...state,
        history: [
          ...state.history,
          {
            ...state.history[action.payload.question],
            answer: [...state.history[action.payload.question].answer, action.payload.answer],
          },
        ],
      };
    case ActionType.REMOVE_HISTORY_QUESTION:
      return {
        ...state,
        history: [
          ...state.history,
          {
            ...state.history[action.payload.question],
            answer: state.history[action.payload.question].answer.filter((answer) => answer !== action.payload.answer),
          },
        ],
      };

    default:
      return state;
  }
};
