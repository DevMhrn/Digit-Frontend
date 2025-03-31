import { HRIcon, EmployeeModuleCard, AttendanceIcon, PropertyHouse } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const WaterCard = () => {
 
  const { t } = useTranslation();

  const propsForModuleCard = {
    Icon: "AccountBox",
    moduleName: t("paniii"),
    kpis: [

    ],
    links: [
      {
        label: t("Individual Create"),
        link: `/${window?.contextPath}/employee/water/create-individual`,
      },
      {
        label: t("Individual Search"),
        link: `/${window?.contextPath}/employee/water/sample-search`,
      },
      {
        label: t("Individual View Details"),
        link: `/${window?.contextPath}/employee/water/individual-details-view`,
      },
      
    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default WaterCard;