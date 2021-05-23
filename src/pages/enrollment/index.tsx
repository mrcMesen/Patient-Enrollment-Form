import { ReactElement } from 'react';
import { Input } from '@components/base/Input';
import { Title } from '@components/base/Title';
import { useRouter } from 'next/router';

export default function PersonalData(): ReactElement {
  const router = useRouter();

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    // TODO: advance steps on state
    router.push('/enrollment/health-profile');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Title text="Personal Data" />
      <div className="grid md:gap-8 md:grid-cols-2 md:mb-12">
        <Input label="Name" id="person-name" />
        <Input label="Last name" id="person-last-name" />
        <Input label="Gender" id="person-gender" />
        <Input label="Birthday" id="person-birthday" type="date" max={new Date().toISOString().slice(0, 10)} />
        <Input label="Email" id="person-email" type="email" />
        <Input label="Phone number" id="person-phone-number" />
        <Input label="Marital status" id="person-marital-status" />
      </div>
      <Title text="Address" />
      <div className="grid md:gap-8  md:grid-cols-2 ">
        <Input label="City" id="person-address-city" />
        <Input label="State" id="person-address-state" />
        <Input label="Zip" id="person-address-zip-code" />
        <Input label="Street Address" id="person-address-street" className="md:col-span-2" />
      </div>
      <button className="btn-primary self-end mt-8" type="submit">
        Continuar
      </button>
    </form>
  );
}
