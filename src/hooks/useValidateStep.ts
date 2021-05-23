import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Steps, steps } from '@app/types';
import { useEnrollmentState } from '@state/Enrollment';

export const useValidateStep = (step: Steps): void => {
  const state = useEnrollmentState();
  const router = useRouter();

  useEffect(() => {
    const index = steps.findIndex((val) => val.step === step);
    if (state.step < index) {
      router.push(steps[index - 1].path);
    }
  }, []);
};
