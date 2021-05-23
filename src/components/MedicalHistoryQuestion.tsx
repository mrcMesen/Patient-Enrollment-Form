import { HistoryQuestion } from '@app/types';
import { ActionType, useEnrollmentDispatch } from '@state/Enrollment';
import { ReactElement, useRef } from 'react';
import { Input } from './base/Input';

interface Props {
  question: HistoryQuestion;
  questionId: number;
}

export const MedicalHistoryQuestion = ({ question, questionId }: Props): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useEnrollmentDispatch();

  const handleAdd = () => {
    if (inputRef.current) {
      const value = inputRef.current?.value;
      dispatch({
        type: ActionType.ADD_HISTORY_QUESTION,
        payload: { question: questionId, answer: value },
      });
      inputRef.current.value = '';
    }
  };
  const handleDelete = (answer: string) => {
    dispatch({
      type: ActionType.REMOVE_HISTORY_QUESTION,
      payload: { question: questionId, answer },
    });
  };
  return (
    <div className="mb-8">
      <div className="flex items-center">
        <label htmlFor={question.question}>{question.question}</label>
      </div>
      <span className="text-sm text-gray-500">{question.description}</span>
      <div className="max-w-max flex items-center">
        <Input id={question.question} placeholder={question.question} elementRef={inputRef} />
        <button type="button" className="btn btn-primary rounded-full h-8 w-8 p-0" onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="flex flex-wrap">
        {question.answer.map((answer) => (
          <div key={answer} className="bg-gray-500 text-white text-sm flex-full-center rounded-lg px-2 py-1 mx-1">
            {answer}
            <button type="button" onClick={() => handleDelete(answer)} className="pl-2 pr-1 font-semibold">
              &#215;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
