import React from 'react';
import { Btn, Wrapper, GoogleIcon, BtnText } from './styles';

const GoogleBtn = () => {
  return (
    <Btn>
      <Wrapper>
        <a href="/auth/google">
          <GoogleIcon
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
          />
        </a>
      </Wrapper>
      <BtnText>
        <b>Sign in with google</b>
      </BtnText>
    </Btn>
  );
};

export default GoogleBtn;
