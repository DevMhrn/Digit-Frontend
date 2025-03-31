import React from "react";
import { useTranslation } from "react-i18next";
import { LinkLabel, Card, CardHeader, CardText } from "@egovernments/digit-ui-react-components";

const LabExerciseCard = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="lab-exercise-card">
      <CardHeader>Lab Exercise</CardHeader>
      <CardText>{t("LAB_EXERCISE_MODULE_DESCRIPTION")}</CardText>
      <LinkLabel className="link" to="/digit-ui/employee/lab-exercise">
        {t("LAB_EXERCISE_MODULE_LINK_TEXT")}
      </LinkLabel>
    </Card>
  );
};

export default LabExerciseCard;
