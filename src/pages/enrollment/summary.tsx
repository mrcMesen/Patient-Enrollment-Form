import { ReactElement } from 'react';
import { useValidateStep } from '@hooks/useValidateStep';
import { useEnrollmentState } from '@state/Enrollment';

import { Title } from '@components/base/Title';
import { Subtitle } from '@components/base/Subtitle';
import { DataItem } from '@components/base/DataItem';
import { ConditionCard } from '@components/ConditionCard';
import { NavigateButtons } from '@components/NavigateButtons';

export default function Summary(): ReactElement {
  useValidateStep('Summary');
  const state = useEnrollmentState();
  return (
    <>
      <Title text="Summary" />
      <p className="text-gray-500 md:mb-12">
        Please, review all the information and continue if it is correct, if changes are required you can make them by
        navigating the menu on the side or using the return button
      </p>
      <Subtitle text="Personal Data" />
      <div className="grid md:gap-8 md:grid-cols-3 md:mb-12 md:px-4">
        <DataItem label="First Name" text={state.generalData.firstName || '-'} />
        <DataItem label="Last Name" text={state.generalData.lastName || '-'} />
        <DataItem label="Gender" text={state.generalData.gender || '-'} />
        <DataItem label="Birthdate" text={state.generalData.birthdate || '-'} />
        <DataItem label="Email" text={state.generalData.email || '-'} />
        <DataItem label="PhoneNumber" text={state.generalData.phoneNumber || '-'} />
        <DataItem label="Marital status" text={state.generalData.maritalStatus || '-'} />
        <DataItem label="City" text={state.generalData.city || '-'} />
        <DataItem label="State" text={state.generalData.state || '-'} />
        <DataItem label="Zip Code" text={state.generalData.zipCode || '-'} />
        <DataItem label="Street address" text={state.generalData.streetaddress || '-'} className="col-span-3" />
      </div>
      <Subtitle text="Conditions" />
      <div className="grid md:gap-8 md:grid-cols-3 md:mb-12 md:px-4">
        {state.conditions.length > 0 ? (
          state.conditions.map((condition) => <ConditionCard key={condition.condition} condition={condition} />)
        ) : (
          <div className="font-semibold">No medical conditions</div>
        )}
      </div>
      <Subtitle text="Habits" />
      <section className="md:mb-12 md:px-4">
        {state.habits.map((habit) => (
          <div className="mb-4" key={habit.question}>
            <p>{habit.question}</p>
            <p className="ml-4">
              Answer/ <span className="font-semibold">{habit.answer}</span>
              {habit.answer === 'yes' && (
                <>
                  <span>, Frequency </span>
                  <span className="font-semibold capitalize">
                    {habit.howMuch} {habit.howOften}
                  </span>
                </>
              )}
            </p>
          </div>
        ))}
      </section>
      <Subtitle text="Medical history" />
      <section className="md:mb-12 md:px-4">
        {state.history.map((history) => (
          <div className="mb-4" key={history.question}>
            <p className="mb-2">{history.question}</p>
            {history.answer.length > 0 ? (
              history.answer.map((item) => (
                <span key={item} className="bg-gray-500 text-white text-sm rounded-lg px-2 py-1 mx-1">
                  {item}
                </span>
              ))
            ) : (
              <div className="font-semibold">Empty</div>
            )}
          </div>
        ))}
      </section>
      <NavigateButtons back href="/enrollment/confirm" />
    </>
  );
}
