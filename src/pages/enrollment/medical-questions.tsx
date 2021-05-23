import { ReactElement, useMemo } from 'react';
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

  const orderQuestions = useMemo(() => {
    return state.habits.sort((a, b) => (a.question > b.question ? 1 : b.question > a.question ? -1 : 0));
  }, [state.habits]);

  return (
    <form onSubmit={handleAdvance} className="flex flex-col">
      <Title text="Habit" />
      <div>
        {orderQuestions.map((question) => (
          <HabitQuestion key={question.question} question={question} />
        ))}
      </div>
      <Title text="Medical history" />
      <div>
        {state.history.map((question, index) => (
          <MedicalHistoryQuestion key={question.question} question={question} questionId={index} />
        ))}
      </div>
      <NavigateButtons back />
    </form>
  );
}
