import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { ActionType, useEnrollmentDispatch } from '@state/Enrollment';

interface Props {
  back?: boolean;
  href?: string;
}

export const NavigateButtons = ({ back, href }: Props): ReactElement => {
  const router = useRouter();
  const dispatch = useEnrollmentDispatch();

  const handleAdvance = () => {
    if (href) {
      dispatch({ type: ActionType.ADVANCE_STEP });
      router.push(href);
    }
  };
  const handleBack = () => {
    dispatch({ type: ActionType.BACK_STEP });
    router.back();
  };

  return (
    <div className="flex justify-end mt-8">
      {back && (
        <button className="btn btn-secondary mr-2" type="button" onClick={handleBack}>
          Back
        </button>
      )}
      <button className="btn btn-primary" type={href ? 'button' : 'submit'} onClick={handleAdvance}>
        Continue
      </button>
    </div>
  );
};
