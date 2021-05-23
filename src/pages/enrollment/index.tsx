import { ReactElement } from 'react';
import { Input } from '@components/base/Input';
import { Title } from '@components/base/Title';
import { NavigateButtons } from '@components/NavigateButtons';
import { useAdvanceStep } from '@hooks/useAdvanceStep';
import { ActionType, useEnrollmentDispatch, useEnrollmentState } from '@state/Enrollment';
import { Select } from '@components/base/Select';

const maritalOptions = ['Married', 'Single', 'Divorced', 'Life Partner', 'Separated', 'Widowed', 'Other'];

export default function PersonalData(): ReactElement {
  const { handleAdvance } = useAdvanceStep();
  const dispatch = useEnrollmentDispatch();
  const state = useEnrollmentState();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value, name } = event.target;
    dispatch({ type: ActionType.UPDATE_GENERAL_DATA, payload: { [name]: value } });
  };

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target;
    dispatch({ type: ActionType.UPDATE_GENERAL_DATA, payload: { maritalStatus: value } });
  };

  return (
    <form onSubmit={handleAdvance} className="flex flex-col">
      <Title text="Personal Data" />
      <div className="grid gap-4 md:gap-8 md:grid-cols-2 mb-6 md:mb-12">
        <Input required label="Name" id="firstName" onChange={handleInputChange} value={state.generalData.firstName} />
        <Input
          required
          label="Last name"
          id="lastName"
          onChange={handleInputChange}
          value={state.generalData.lastName}
        />
        <Input required label="Gender" id="gender" onChange={handleInputChange} value={state.generalData.gender} />
        <Input
          required
          label="Birthday"
          id="birthdate"
          type="date"
          max={new Date().toISOString().slice(0, 10)}
          onChange={handleInputChange}
          value={state.generalData.birthdate}
        />
        <Input
          required
          label="Email"
          id="email"
          type="email"
          onChange={handleInputChange}
          value={state.generalData.email}
        />
        <Input
          required
          label="Phone number"
          id="phoneNumber"
          onChange={handleInputChange}
          value={state.generalData.phoneNumber}
        />
        <Select
          required
          id="maritalStatus"
          value={state.generalData.maritalStatus}
          onChange={handleSelectChange}
          className={`w-full ${state.generalData.maritalStatus === '' && 'text-gray-500'}`}
        >
          <option className="" value="">
            Marital status
          </option>
          {maritalOptions.map((option) => (
            <option key={option} value={option} className="capitalize">
              {option}
            </option>
          ))}
        </Select>
      </div>
      <Title text="Address" />
      <div className="grid gap-4 md:gap-8  md:grid-cols-2 ">
        <Input required label="City" id="city" onChange={handleInputChange} value={state.generalData.city} />
        <Input required label="State" id="state" onChange={handleInputChange} value={state.generalData.state} />
        <Input required label="Zip" id="zipCode" onChange={handleInputChange} value={state.generalData.zipCode} />
        <Input
          required
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
