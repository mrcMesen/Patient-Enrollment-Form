import { ReactElement } from 'react';
import { Title } from '@components/base/Title';
import { useRouter } from 'next/router';

import { Subtitle } from '@components/base/Subtitle';
import { DataItem } from '@components/base/DataItem';
import { ConditionCard } from '@components/ConditionCard';

export default function Summary(): ReactElement {
  const router = useRouter();

  return (
    <>
      <Title text="Summary" />
      <p className="text-gray-500 md:mb-12">
        Please, review all the information and continue if it is correct, if changes are required you can make them by
        navigating the menu on the side or using the return button
      </p>

      <Subtitle text="Personal Data" />
      <div className="grid md:gap-8 md:grid-cols-3 md:mb-12 md:px-4">
        <DataItem text="Marco" label="Name" />
        <DataItem text="Marco" label="Name" />
        <DataItem text="Marco" label="Name" />
      </div>
      <Subtitle text="Conditions" />
      <div className="grid md:gap-8 md:grid-cols-3 md:mb-12 md:px-4">
        <ConditionCard
          condition={{
            type: 'cardiovascular',
            condition: 'High blood pressure',
          }}
        />
        <ConditionCard
          condition={{
            type: 'cardiovascular',
            condition: 'High blood pressure',
          }}
        />
        <ConditionCard
          condition={{
            type: 'cardiovascular',
            condition: 'High blood pressure',
          }}
        />
        <ConditionCard
          condition={{
            type: 'cardiovascular',
            condition: 'High blood pressure',
          }}
        />
      </div>
      <Subtitle text="Habits" />
      <section className="md:mb-12 md:px-4">
        <div className="mb-4">
          <p>Do you smoke any tobacco products?</p>
          <p className="ml-4">
            Answer/ <span className="font-semibold">Yes</span>
            {/* TODO: Validate */}
            <span>, Frequency</span>
            <span className="font-semibold"> {2} Diary</span>
          </p>
        </div>
      </section>

      <Subtitle text="Medical history" />
      <section className="md:mb-12 md:px-4">
        <div className="mb-4">
          <p className="mb-2">Current medications</p>
          {['medical1', 'medical2'].map((item) => (
            <span key={item} className="bg-gray-500 text-white text-sm rounded-lg px-2 py-1 mx-1">
              {item}
            </span>
          ))}
        </div>
        <div className="mb-4">
          <p className="mb-2">Current medications</p>
          {['medical1', 'medical2'].map((item) => (
            <span key={item} className="bg-gray-500 text-white text-sm rounded-lg px-2 py-1 mx-1">
              {item}
            </span>
          ))}
        </div>
      </section>

      <button className="btn-primary self-end mt-8" type="button" onClick={() => router.push('/enrollment/summary')}>
        Confirmar
      </button>
    </>
  );
}
