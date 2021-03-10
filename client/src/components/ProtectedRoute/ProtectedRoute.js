import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return rest.canAccess ? children : <Redirect to={rest.redirect} />;
      }}
    />
  );
}

export default ProtectedRoute;
