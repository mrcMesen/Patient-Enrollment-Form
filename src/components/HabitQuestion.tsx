import { ReactElement } from 'react';
import { Select } from './base/Select';
import { Input } from './base/Input';

interface Props {
  question: string;
  questionId: string;
}

export const HabitQuestion = ({ question, questionId }: Props): ReactElement => {
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <label htmlFor={questionId}>{question}</label>
        <Select id={questionId}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </div>
      {/* TODO: connect state to handle how much and how often */}
      <div className="ml-8">
        <div className="inline-flex items-center">
          How often{' '}
          <Select id="">
            <option value="">Select</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
        </div>
        <div className="inline-flex items-center">
          How much <Input type="number" id="" className="ml-2 max-w-max" />
        </div>
      </div>
    </div>
  );
};
