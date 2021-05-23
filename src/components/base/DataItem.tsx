import { ReactElement } from 'react';

interface Props {
  label: string | number;
  text: string | number;
  className?: string;
}
/**
 * Data item, this component is used to display data in format: key-value
 * @param label Text displayed to describe the data
 * @param text Data to display
 * @param className Optional css class to apply to main div.
 */
export const DataItem = ({ label, text, className = '' }: Props): ReactElement => {
  return (
    <div className={className}>
      <span className="text-sm italic font-extralight ml-1">{label}</span>
      <p className="my-1 font-bold">{text}</p>
    </div>
  );
};
