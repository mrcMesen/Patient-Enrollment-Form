import React, { ReactElement } from 'react';

interface Props {
  text: string;
  className?: string;
}

export const Subtitle = ({ text, className }: Props): ReactElement => {
  return <h4 className={`text-2xl my-4 ${className}`}>{text}</h4>;
};
