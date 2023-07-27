import React, { Fragment } from "react";
import { GetAuthSelector } from "../redux/selectors";
import authServices from "../services/authServices";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const auth = GetAuthSelector();
  const dataUserStorage = authServices.getUserLocalStorage();
  const { isLogin } = auth;
  return (
    <Fragment>
      {(dataUserStorage.isLogged || isLogin) && (
        <Route
          {...rest}
          render={(props) => {
            if (isLogin === false) {
              return <Redirect to="/login" />;
            }

            if (
              isAdmin === true &&
              dataUserStorage.accountData.user.role !== "admin"
            ) {
              return <Redirect to="/login" />;
            }
            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
