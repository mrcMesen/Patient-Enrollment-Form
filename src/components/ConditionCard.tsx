import { ReactElement } from 'react';
import { Condition } from '@app/types';

interface Props {
  condition: Condition;
}

export const ConditionCard = ({ condition }: Props): ReactElement => {
  return (
    <div className="p-4 inline-flex items-center border shadow rounded-sm">
      <div className="capitalize">
        <p className="text-lg">{condition.condition}</p>
        <p className="text-sm">{condition.type}</p>
      </div>
    </div>
  );
};
