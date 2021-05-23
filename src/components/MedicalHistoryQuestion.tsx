import { ReactElement } from 'react';
import { Input } from './base/Input';

interface Props {
  question: string;
  description: string;
  questionId: string;
}

export const MedicalHistoryQuestion = ({ question, description, questionId }: Props): ReactElement => {
  const handleAdd: React.FormEventHandler = (event) => {
    event.preventDefault();
    // TODO: connect to state and add history
  };
  const handleDelete = () => {
    // TODO: connect to state and delete history
  };
  return (
    <div className="mb-8">
      <div className="flex items-center">
        <label htmlFor={questionId}>{question}</label>
      </div>
      <span className="text-sm text-gray-500">{description}</span>
      <form className="max-w-max flex items-center" onSubmit={handleAdd}>
        <Input id={questionId} className="" placeholder={question} required />
        <button type="submit" className="btn-primary rounded-full h-8 w-8 p-0">
          +
        </button>
      </form>
      <div className="flex flex-wrap">
        {/* Connect to state */}
        <button
          type="button"
          onClick={handleDelete}
          className="bg-gray-500 text-white text-sm flex-full-center rounded-lg px-2 py-1 mx-1"
        >
          response
        </button>
      </div>
    </div>
  );
};
