import { ReactElement } from 'react';
import { useValidateStep } from '@hooks/useValidateStep';
import { useAdvanceStep } from '@hooks/useAdvanceStep';

import { Title } from '@components/base/Title';
import { ConditionCheckbox } from '@components/ConditionCheckbox';
import { NavigateButtons } from '@components/NavigateButtons';
import { conditionsList } from '@app/conditions';

export default function HealthProfile(): ReactElement {
  useValidateStep('Health profile');
  const { handleAdvance } = useAdvanceStep();

  return (
    <form onSubmit={handleAdvance} className="flex flex-col">
      <Title text="Conditions" />
      <div className="grid gap-4 md:gap-8 md:grid-cols-3 md:mb-12">
        {conditionsList().map((condition) => (
          <ConditionCheckbox key={condition.condition} condition={condition} />
        ))}
      </div>
      <NavigateButtons back />
    </form>
  );
}
