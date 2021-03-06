import { steps } from '@app/types';
import { ReactElement } from 'react';
import { SideMenuItem } from './SideMenuItem';

export const SideMenu = (): ReactElement => {
  return (
    <section className="w-full md:w-1/3 xl:w-1/4 min-w-max md:h-screen md:fixed md:left-0 p-4 md:p-10 bg-green-900 text-white flex flex-col">
      <div className="md:mb-8">
        <h2 className="text-4xl mb-2">Parsley Health</h2>
        <p className="ml-1 md:ml-0 text-gray-300">Patient Enrollment</p>
      </div>
      <div className="mb-8 flex md:block md:flex-1">
        {[steps.map((step, index) => <SideMenuItem key={step.step} itemNumber={index} title={step.step} />)]}
      </div>
      <div className="text-xs md:text-base">Marco Mesen - Assessment</div>
    </section>
  );
};
