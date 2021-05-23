import { ReactElement } from 'react';
import { useValidateStep } from '@hooks/useValidateStep';
import { useAdvanceStep } from '@hooks/useAdvanceStep';
import { useConditionList } from '@hooks/useConditionList';

import { Title } from '@components/base/Title';
import { ConditionCheckbox } from '@components/ConditionCheckbox';
import { NavigateButtons } from '@components/NavigateButtons';
import { Select } from '@components/base/Select';
import { conditions } from '@app/types';

export default function HealthProfile(): ReactElement {
  useValidateStep('Health profile');
  const { conditionsList, handleFilter } = useConditionList();
  const { handleAdvance } = useAdvanceStep();

  return (
    <form onSubmit={handleAdvance} className="flex flex-col">
      <div className="flex justify-between items-center">
        <Title text="Conditions" />
        <Select id="filter-conditions" onChange={handleFilter}>
          <option value="">Filter</option>
          {conditions.map((condition) => (
            <option key={condition} value={condition}>
              {condition}
            </option>
          ))}
        </Select>
      </div>
      <div className="grid gap-4 md:gap-8 md:grid-cols-3 md:mb-12">
        {conditionsList.map((condition) => (
          <ConditionCheckbox key={condition.condition} condition={condition} />
        ))}
      </div>
      <NavigateButtons back />
    </form>
  );
}
