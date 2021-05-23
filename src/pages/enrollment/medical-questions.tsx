import { ReactElement } from 'react';
import { Subtitle } from '@components/base/Subtitle';
import { useRouter } from 'next/router';
import { HabitQuestion } from '@components/HabitQuestion';

import questions from '@app/questions.json';
import { MedicalHistoryQuestion } from '@components/MedicalHistoryQuestion';

export default function MedicalQuestions(): ReactElement {
  const router = useRouter();

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    // TODO: advance steps on state
    router.push('/enrollment/summary');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Subtitle text="Habit" />
      <div>
        {questions.habits.map((question, index) => (
          <HabitQuestion key={question.question} question={question.question} questionId={index.toString()} />
        ))}
      </div>
      <Subtitle text="Medical history" />
      <div>
        {questions.history.map((question, index) => (
          <MedicalHistoryQuestion
            key={question.question}
            question={question.question}
            questionId={index.toString()}
            description={question.description}
          />
        ))}
      </div>
      <button className="btn-primary self-end mt-8" type="submit">
        Continuar
      </button>
    </form>
  );
}
