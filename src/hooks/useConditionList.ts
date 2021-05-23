import { useState } from 'react';
import { initialConditionsList } from '@app/conditions';
import { Condition, ConditionType } from '@app/types';

interface ConditionListHook {
  conditionsList: Condition[];
  handleFilter: React.ChangeEventHandler<HTMLSelectElement>;
}

const initial = initialConditionsList();

export const useConditionList = (): ConditionListHook => {
  const [conditionsList, setConditionsList] = useState<Condition[]>(initial);

  const handleFilter: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target;

    if (value === '') {
      return setConditionsList(initial);
    }
    setConditionsList(initial.filter((iCondition) => iCondition.type === (value as ConditionType)));
  };

  return { conditionsList, handleFilter };
};
