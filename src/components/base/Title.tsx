import React, { ReactElement } from 'react';

interface Props {
  text: string;
  className?: string;
}

export const Title = ({ text, className }: Props): ReactElement => {
  return <h3 className={`text-2xl my-4 ${className}`}>{text}</h3>;
};
