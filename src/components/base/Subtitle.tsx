import React, { ReactElement } from 'react';

interface Props {
  text: string;
  className?: string;
}

export const Subtitle = ({ text, className }: Props): ReactElement => {
  return <h4 className={`text-lg my-2 text-gray-600 ${className}`}>{text}</h4>;
};
