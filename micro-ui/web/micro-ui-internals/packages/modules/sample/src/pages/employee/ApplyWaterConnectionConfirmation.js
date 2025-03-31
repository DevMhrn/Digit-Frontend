import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { 
  FormComposerV2, 
  Header, 
  Toast, 
  Card, 
  CardHeader, 
  StatusTable, 
  Row, 
  SubmitBar, 
  Loader 
} from "@egovernments/digit-ui-react-components";

const ConnectionConfirmation = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();
  const [showToast, setShowToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [applicationData, setApplicationData] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("WS_APPLICATION_DATA");
    if (data) {
      setApplicationData(JSON.parse(data));
    } else {
      history.push("/digit-ui/employee/sample/apply-connection-form");
    }
  }, []);

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await Digit.WSService.create(applicationData, tenantId);
      if (response?.WaterConnection?.[0]?.applicationNo) {
        setShowToast({ key: "success", label: t("WS_APPLICATION_SUBMITTED_SUCCESSFULLY") });
        setTimeout(() => {
          history.push(`/digit-ui/employee/ws/application-details/${response.WaterConnection[0].applicationNo}`);
        }, 3000);
      } else {
        throw new Error("Application submission failed");
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      setShowToast({ key: "error", label: t("WS_APPLICATION_SUBMISSION_ERROR") });
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    history.push("/digit-ui/employee/sample/apply-connection-form");
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!applicationData) {
    return <Loader />;
  }

  const connection = applicationData.WaterConnection;
  
  return (
    <div>
      <Header>{t("Water Connection - Application Summary")}</Header>
      <Card>
        <CardHeader>{t("Property Details")}</CardHeader>
        <StatusTable>
          <Row label={t("Property ID")} text={connection.propertyId} />
        </StatusTable>
      </Card>
      
      <Card>
        <CardHeader>{t("Connection Details")}</CardHeader>
        <StatusTable>
          <Row label={t("Connection Type")} text={t(connection.connectionType === "Metered" ? "WS_METERED_CONNECTION" : "WS_NON_METERED_CONNECTION")} />
          <Row label={t("No. of Water Taps")} text={connection.noOfTaps} />
          <Row label={t("Pipe Size (in inches)")} text={connection.pipeSize} />
          <Row label={t("Water Source")} text={t(`WS_${connection.waterSource.replace(".", "_")}`)} />
        </StatusTable>
      </Card>

      <Card>
        <CardHeader>{t("Plumber Details")}</CardHeader>
        <StatusTable>
          <Row label={t("Plumber Provided By")} text={t(connection.additionalDetails.detailsProvidedBy === "ULB" ? "WS_PROVIDED_BY_ULB" : "WS_PROVIDED_BY_SELF")} />
          <Row label={t("Plumber Name")} text={connection.additionalDetails.plumberName} />
          <Row label={t("License Number")} text={connection.additionalDetails.licenseNumber} />
          <Row label={t("Mobile Number")} text={connection.additionalDetails.mobileNumber} />
        </StatusTable>
      </Card>

      {connection.roadCuttingInfo && connection.roadCuttingInfo.length > 0 && (
        <Card>
          <CardHeader>{t("Road Cutting Details")}</CardHeader>
          <StatusTable>
            <Row label={t("Road Type")} text={t(`WS_ROAD_TYPE_${connection.roadCuttingInfo[0].roadType}`)} />
            <Row label={t("Road Cutting Area (in sq ft)")} text={connection.roadCuttingInfo[0].roadCuttingArea} />
          </StatusTable>
        </Card>
      )}

      <div className="submit-bar-wrapper">
        <SubmitBar label={t("Back")} onSubmit={goBack} />
        <SubmitBar label={t("Submit")} onSubmit={onSubmit} />
      </div>

      {showToast && (
        <Toast
          style={{ zIndex: 10001 }}
          label={showToast.label}
          type={showToast.key}
          error={showToast.key === "error"}
          onClose={() => setShowToast(null)}
        />
      )}
    </div>
  );
};

export default ConnectionConfirmation;