import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { FormComposerV2, Header, Toast, Loader } from "@egovernments/digit-ui-react-components";
import { waterConnectionConfig } from "../../configs/waterConnectionConfig";

const ApplyConnection = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();
  const [showToast, setShowToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const transformWaterConnectionData = (formData) => {
    const connectionDetails = {
      connectionType: formData.connectionType?.code,
      noOfTaps: formData.noOfTaps,
      pipeSize: formData.pipeSize?.code,
      waterSource: formData.waterSource?.code,
    };

    const plumberInfo = {
      detailsProvidedBy: formData.detailsProvidedBy?.code,
      plumberName: formData.plumberName,
      licenseNumber: formData.licenseNumber,
      mobileNumber: formData.mobileNumber,
    };

    const roadCuttingInfo = formData.roadType ? [{
      roadType: formData.roadType?.code,
      roadCuttingArea: formData.roadCuttingArea || 0,
    }] : [];

    const documents = formData.documents?.map(doc => ({
      documentType: doc.documentType,
      fileStoreId: doc.fileStoreId,
      documentUid: doc.documentUid,
    })) || [];

    return {
      WaterConnection: {
        propertyId: formData.propertyId,
        service: "WATER",
        connectionType: connectionDetails.connectionType,
        noOfTaps: connectionDetails.noOfTaps,
        pipeSize: connectionDetails.pipeSize,
        waterSource: connectionDetails.waterSource,
        connectionCategory: "GENERAL",
        additionalDetails: {
          detailsProvidedBy: plumberInfo.detailsProvidedBy,
          plumberName: plumberInfo.plumberName,
          licenseNumber: plumberInfo.licenseNumber,
          mobileNumber: plumberInfo.mobileNumber,
          initialMeterReading: formData.initialMeterReading || null,
        },
        roadCuttingInfo: roadCuttingInfo,
        documents: documents,
      }
    };
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const transformedData = transformWaterConnectionData(data);
      sessionStorage.setItem("WS_APPLICATION_DATA", JSON.stringify(transformedData));
      history.push("/digit-ui/employee/sample/apply-connection-confirmation");
    } catch (error) {
      console.error("Error in form submission:", error);
      setShowToast({ key: "error", label: t("WS_APPLICATION_SUBMISSION_ERROR") });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Header>{t("Apply for New Water Connection")}</Header>
      <FormComposerV2
        label={t("Next")}
        config={waterConnectionConfig.map((config) => {
          return {
            ...config,
          };
        })}
        defaultValues={{}}
        onFormValueChange={(setValue, formData, formState, reset, setError, clearErrors, trigger, getValues) => {
          if (formData?.connectionType?.code === "Metered") {
            setValue("initialMeterReading", "");
          }
        }}
        onSubmit={(data) => onSubmit(data)}
        fieldStyle={{ marginRight: 0 }}
      />
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

export default ApplyConnection;