
import React,{useState} from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { FormComposerV2, Header,Toast } from "@egovernments/digit-ui-react-components";
import { transformCreateData } from "../../utils/createUtils";
import { config } from "../../configs/ApplyConnectionConfirmation";

const ConnectionConfirmation = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();
  const reqCreate = {
    url: `/egov-hrms/employees/_create`,
    params: {},
    body: {},
    config: {
      enable: true,
    },
  };

  const mutation = Digit.Hooks.useCustomAPIMutationHook(reqCreate);

  const onSubmit = async(data) => {
    console.log(data, "data");
    console.log("I am route ye");
    history.push("/digit-ui/employee/sample/apply-connection-form"); // Redirects to the specified route
  };
  return (
    <div>
      <Header> {t("Water and Sewerage - New Connection")}</Header>
      <FormComposerV2
        label={t("Apply")}
        config={config.map((config) => {
          return {
            ...config,
          };
        })}
        defaultValues={{}}
        onFormValueChange ={ (setValue, formData, formState, reset, setError, clearErrors, trigger, getValues) => {
          console.log(formData, "formData");
        }}
        onSubmit={(data,) => onSubmit(data, )}
        fieldStyle={{ marginRight: 0 }}
      />
    </div>
  );
}

export default ConnectionConfirmation;