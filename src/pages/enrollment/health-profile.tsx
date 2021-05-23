import { ReactElement } from 'react';
import { Subtitle } from '@components/base/Subtitle';
import { ConditionCheckbox } from '@components/ConditionCheckbox';
import { useRouter } from 'next/router';

import conditionsList from '@app/conditions.json';

export default function HealthProfile(): ReactElement {
  const router = useRouter();

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    // TODO: advance steps on state
    router.push('/enrollment/medical-questions');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Subtitle text="Conditions" />
      <div className="grid md:gap-8 md:grid-cols-3 md:mb-12">
        {/* TODO: validar seleccionados */}
        {conditionsList.map((condition, index) => (
          <ConditionCheckbox key={condition.condition} condition={{ ...condition, selected: index < 2 }} />
        ))}
      </div>
      <button className="btn-primary self-end mt-8" type="submit">
        Continuar
      </button>
    </form>
  );
}
