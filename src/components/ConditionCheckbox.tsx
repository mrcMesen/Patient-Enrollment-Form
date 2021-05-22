import { ReactElement } from 'react';
import { Condition } from '@app/types';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  condition: Condition;
}

export const ConditionCheckbox = ({ condition, ...rest }: Props): ReactElement => {
  return (
    <label
      htmlFor={condition.condition}
      className="p-4 inline-flex items-center border shadow rounded-sm hover:bg-gray-50"
    >
      <input className="h-6 w-6 mr-4" type="checkbox" name={condition.condition} id={condition.condition} {...rest} />
      <div className="capitalize">
        <p className="text-lg">{condition.condition}</p>
        <p className="text-sm">{condition.type}</p>
      </div>
    </label>
  );
};
