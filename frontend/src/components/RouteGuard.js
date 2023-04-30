import React from 'react';
import { Redirect } from './Redirect';

const RouteGuard = ({ component: Component, ...rest }) => {

  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? flag = true : flag = false

    return flag
  }

  return (
    hasJWT() ?
      <Component {...props} />
      :
      <Redirect path="/login" to="/login" />
  );
};

export default RouteGuard;