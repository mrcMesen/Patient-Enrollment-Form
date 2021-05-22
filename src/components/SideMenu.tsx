import React, { ReactElement } from 'react';
import { SideMenuItem } from './SideMenuItem';

const steps = ['General data', 'Health profile', 'Medical questions', 'Summary', 'Confirm'];

export const SideMenu = (): ReactElement => {
  return (
    <section className="w-1/3 xl:w-1/4 min-w-max md:h-screen p-10 bg-green-900 text-white flex flex-col">
      <div className="mb-8">
        <h2 className="text-4xl mb-2">Parsley Health</h2>
        <p className="text-gray-300">Patient Enrollment</p>
      </div>
      <div className="flex-1">
        {[steps.map((step, index) => <SideMenuItem key={step} itemNumber={index} title={step} />)]}
      </div>
      <div>Marco Mesen - Assessment</div>
    </section>
  );
};
