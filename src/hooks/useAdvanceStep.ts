import { useRouter } from 'next/router';
import { steps } from '@app/types';
import { ActionType, useEnrollmentDispatch } from '@state/Enrollment';
interface AdvanceStepHook {
  handleAdvance: React.FormEventHandler;
}

export const useAdvanceStep = (): AdvanceStepHook => {
  const router = useRouter();
  const dispatch = useEnrollmentDispatch();

  const handleAdvance: React.FormEventHandler = (event) => {
    event.preventDefault();
    const index = steps.findIndex((val) => val.path === router.pathname);
    router.push(steps[index + 1].path);
    dispatch({ type: ActionType.ADVANCE_STEP });
  };

  return { handleAdvance };
};
