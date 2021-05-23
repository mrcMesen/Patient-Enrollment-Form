import { ReactElement } from 'react';
import { Input } from '@components/base/Input';
import { Title } from '@components/base/Title';
import { NavigateButtons } from '@components/NavigateButtons';
import { useAdvanceStep } from '@hooks/useAdvanceStep';
import { ActionType, useEnrollmentDispatch, useEnrollmentState } from '@state/Enrollment';

export default function PersonalData(): ReactElement {
  const { handleAdvance } = useAdvanceStep();
  const dispatch = useEnrollmentDispatch();
  const state = useEnrollmentState();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value, name } = event.target;
    dispatch({ type: ActionType.UPDATE_GENERAL_DATA, payload: { [name]: value } });
  };

  return (
    <form onSubmit={handleAdvance} className="flex flex-col">
      <Title text="Personal Data" />
      <div className="grid md:gap-8 md:grid-cols-2 md:mb-12">
        <Input label="Name" id="firstName" onChange={handleInputChange} value={state.generalData.firstName} />
        <Input label="Last name" id="lastName" onChange={handleInputChange} value={state.generalData.lastName} />
        <Input label="Gender" id="gender" onChange={handleInputChange} value={state.generalData.gender} />
        <Input
          label="Birthday"
          id="birthdate"
          type="date"
          max={new Date().toISOString().slice(0, 10)}
          onChange={handleInputChange}
          value={state.generalData.birthdate}
        />
        <Input label="Email" id="email" type="email" onChange={handleInputChange} value={state.generalData.email} />
        <Input
          label="Phone number"
          id="phoneNumber"
          onChange={handleInputChange}
          value={state.generalData.phoneNumber}
        />
        <Input
          label="Marital status"
          id="maritalStatus"
          onChange={handleInputChange}
          value={state.generalData.maritalStatus}
        />
      </div>
      <Title text="Address" />
      <div className="grid md:gap-8  md:grid-cols-2 ">
        <Input label="City" id="city" onChange={handleInputChange} value={state.generalData.city} />
        <Input label="State" id="state" onChange={handleInputChange} value={state.generalData.state} />
        <Input label="Zip" id="zipCode" onChange={handleInputChange} value={state.generalData.zipCode} />
        <Input
          label="Street Address"
          id="streetaddress"
          className="md:col-span-2"
          onChange={handleInputChange}
          value={state.generalData.streetaddress}
        />
      </div>
      <NavigateButtons />
    </form>
  );
}
