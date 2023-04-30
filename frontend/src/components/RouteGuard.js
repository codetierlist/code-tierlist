import React from 'react';
import { Redirect } from './Redirect';

const RouteGuard = ({ component: Component, ...props }) => {

  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("access_token") || localStorage.setItem("refresh_token") ? flag = true : flag = false

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