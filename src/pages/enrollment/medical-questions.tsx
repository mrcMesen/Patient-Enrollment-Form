import { ReactElement } from 'react';
import { useValidateStep } from '@hooks/useValidateStep';
import { useAdvanceStep } from '@hooks/useAdvanceStep';

import { Title } from '@components/base/Title';
import { HabitQuestion } from '@components/HabitQuestion';
import { MedicalHistoryQuestion } from '@components/MedicalHistoryQuestion';
import { NavigateButtons } from '@components/NavigateButtons';
import { useEnrollmentState } from '@state/Enrollment';

export default function MedicalQuestions(): ReactElement {
  useValidateStep('Medical questions');
  const state = useEnrollmentState();
  const { handleAdvance } = useAdvanceStep();

  return (
    <form onSubmit={handleAdvance} className="flex flex-col">
      <Title text="Habit" />
      <div>
        {state.habits.map((question, index) => (
          <HabitQuestion key={question.question} question={question.question} questionId={index.toString()} />
        ))}
      </div>
      <Title text="Medical history" />
      <div>
        {state.history.map((question, index) => (
          <MedicalHistoryQuestion
            key={question.question}
            question={question.question}
            questionId={index.toString()}
            description={question.description}
          />
        ))}
      </div>
      <NavigateButtons back />
    </form>
  );
}
