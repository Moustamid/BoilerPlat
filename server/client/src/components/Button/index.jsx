import React from 'react';
import Link from 'next/link';
import { AnchorTag } from './Button.styles';

const Button = ({ color }) => {
  return (
    <div>
      <Link href="#">
        <AnchorTag color={color}>Button</AnchorTag>
      </Link>
    </div>
  );
};

export default Button;
