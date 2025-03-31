import React from "react";
import { Header, Card, CardText } from "@egovernments/digit-ui-react-components";

const LabExerciseHome = () => {
  return (
    <React.Fragment>
      <Header>Lab Exercise</Header>
      <div className="lab-exercise-container">
        <Card>
          <CardText>Welcome to the Lab Exercise Module!</CardText>
        </Card>
      </div>
    </React.Fragment>
  );
};

export { LabExerciseHome };
