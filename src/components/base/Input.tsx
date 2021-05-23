import { ReactElement } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  elementRef?: React.RefObject<HTMLInputElement>;
  type?: 'text' | 'number' | 'email' | 'date';
}
/**
 * Custom Input, could be used as Input Material Design and as outlined input.
 * @param label Text displayed as a placeholder
 * @param id Input id, using to link label
 * @param type This input could get text or number
 */
export const Input = ({ label, type = 'text', id, className, elementRef, ...rest }: Props): ReactElement => {
  return (
    <div className={`py-1 ${className}`}>
      <div className="relative h-10">
        <input
          id={id}
          type={type}
          name={id}
          ref={elementRef}
          className="input mt-1 w-full outline-none h-8 px-1"
          placeholder=" "
          {...rest}
        />
        {label && (
          <label htmlFor={id} className="label-input text-gray-500 absolute pointer-events-none block top-2 left-2">
            {label}
          </label>
        )}
        <div className="input-line border-b border-gray-400" />
      </div>
    </div>
  );
};
