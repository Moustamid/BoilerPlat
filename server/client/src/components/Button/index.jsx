import React from 'react';
import { Link } from 'react-router-dom';
import { AnchorTag } from './Button.styles';

const Button = ({ color }) => {
  return (
    <div>
      <Link to="/logout">
        <AnchorTag color={color}>Logout</AnchorTag>
      </Link>
    </div>
  );
};

export default Button;
