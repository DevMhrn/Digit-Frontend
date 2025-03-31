import React from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import { PrivateRoute } from "@egovernments/digit-ui-react-components";
import { LabExerciseHome } from "./pages";

const LabExerciseModule = ({ stateCode, userType, tenants }) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} exact>
        <LabExerciseHome stateCode={stateCode} userType={userType} tenants={tenants} />
      </Route>
    </Switch>
  );
};

export default LabExerciseModule;
