import { ReactElement, useMemo } from 'react';
import { useEnrollmentState } from '@state/Enrollment';

interface Props {
  itemNumber: number;
  title: string;
}

export const SideMenuItem = ({ itemNumber, title }: Props): ReactElement => {
  const state = useEnrollmentState();

  const isActive = useMemo(() => {
    return itemNumber < state.step;
  }, [state.step]);

  return (
    <div className="flex items-center mb-4">
      <div className={`h-10 w-10 rounded-full flex-full-center ${isActive ? 'bg-white text-green-900' : 'border-2'}`}>
        {isActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        ) : (
          itemNumber
        )}
      </div>
      <span className="ml-4">{title}</span>
    </div>
  );
};
