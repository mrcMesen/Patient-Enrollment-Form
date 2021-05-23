import { useMemo, ReactElement } from 'react';
import { Condition } from '@app/types';
import { ActionType, useEnrollmentDispatch, useEnrollmentState } from '@state/Enrollment';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  condition: Condition;
}

export const ConditionCheckbox = ({ condition, ...rest }: Props): ReactElement => {
  const state = useEnrollmentState();
  const dispatch = useEnrollmentDispatch();

  const seleted = useMemo(() => {
    return Boolean(state.conditions.find((iCondition) => iCondition.condition === condition.condition));
  }, [state.conditions]);

  const handleSelect: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked } = event.target;
    if (checked) {
      return dispatch({ type: ActionType.ADD_CONDITION, payload: condition });
    }
    return dispatch({ type: ActionType.REMOVE_CONDITION, payload: condition });
  };

  return (
    <label
      htmlFor={condition.condition}
      className="p-4 inline-flex items-center border shadow rounded-sm hover:bg-gray-50"
    >
      <input
        className="h-6 w-6 mr-4"
        type="checkbox"
        name={condition.condition}
        id={condition.condition}
        checked={seleted}
        onChange={handleSelect}
        {...rest}
      />
      <div className="capitalize">
        <p className="text-lg">{condition.condition}</p>
        <p className="text-sm">{condition.type}</p>
      </div>
    </label>
  );
};
