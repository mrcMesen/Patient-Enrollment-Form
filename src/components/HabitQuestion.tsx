import { ReactElement } from 'react';
import { Select } from './base/Select';
import { Input } from './base/Input';
import { FrequencyType, HabitQuestion as HabitQuestionType } from '@app/types';
import { ActionType, useEnrollmentDispatch } from '@state/Enrollment';

interface Props {
  question: HabitQuestionType;
}

export const HabitQuestion = ({ question }: Props): ReactElement => {
  const dispatch = useEnrollmentDispatch();

  const handleMainAnswerChanges: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target;
    if (value === 'yes' || value === 'no') {
      dispatch({
        type: ActionType.ADD_HABIT_QUESTION,
        payload: { ...question, answer: value },
      });
    } else {
      dispatch({ type: ActionType.ADD_HABIT_QUESTION, payload: { question: question.question, answer: undefined } });
    }
  };
  const handleHowOftenChanges: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target;
    dispatch({
      type: ActionType.ADD_HABIT_QUESTION,
      payload: { ...question, howOften: value as FrequencyType },
    });
  };

  const handleHowMuchChanges: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    dispatch({
      type: ActionType.ADD_HABIT_QUESTION,
      payload: { ...question, howMuch: parseInt(value) },
    });
  };

  return (
    <div className="mb-4">
      <div className="flex items-center">
        <label className="w-3/5 md:w-auto" htmlFor={question.question}>
          {question.question}
        </label>
        <Select id={question.question} value={question?.answer || ''} onChange={handleMainAnswerChanges} required>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </div>
      {question?.answer && question.answer === 'yes' ? (
        <div className="ml-8">
          <div className="inline-flex items-center">
            How often{' '}
            <Select id="" value={question?.howOften || ''} onChange={handleHowOftenChanges} required>
              <option value="">Select</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </Select>
          </div>
          <div className="inline-flex items-center">
            How much{' '}
            <Input
              required
              type="number"
              id=""
              min="1"
              className="ml-2 max-w-max"
              value={question?.howMuch || 0}
              onChange={handleHowMuchChanges}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
