import React, { ReactElement, ReactNode } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  id: string;
  children: ReactNode;
}

/**
 * Custom Select.
 * @param id Input id, using to link svg caret
 * @param children Options list to display inside Select
 */
export const Select = ({ id, children, ...rest }: Props): ReactElement => {
  return (
    <div className="relative max-w-max m-2">
      <label className="absolute right-1 top-1.5" htmlFor={id}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </label>
      <select id={id} className="relative pl-2 pr-8 py-1 text-gray-800" {...rest}>
        {children}
      </select>
    </div>
  );
};
