import { ReactElement } from 'react';
import { Title } from '@components/base/Title';
import { ConditionCheckbox } from '@components/ConditionCheckbox';
import { useRouter } from 'next/router';

import conditionsList from '@app/conditions.json';
import NavigateButtons from '@components/NavigateButtons';

export default function HealthProfile(): ReactElement {
  const router = useRouter();

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    // TODO: advance steps on state
    router.push('/enrollment/medical-questions');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Title text="Conditions" />
      <div className="grid md:gap-8 md:grid-cols-3 md:mb-12">
        {/* TODO: validar seleccionados */}
        {conditionsList.map((condition) => (
          <ConditionCheckbox key={condition.condition} condition={condition} />
        ))}
      </div>
      <NavigateButtons back />
    </form>
  );
}
