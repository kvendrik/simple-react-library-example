import React from 'react';

interface Props {
  children: string;
}

export default function Button({children}: Props) {
  return <button>{children}</button>;
}
