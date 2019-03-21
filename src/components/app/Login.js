import React, { Fragment } from 'react';
import { login } from '../../services/auth';
import Loading from '../app/Loading';

export default function Login() {
  login();
  return (
    <Fragment>
      <Loading />
    </Fragment>
  );
}
