const defaultSearchValues = {
    consumernumber: "",
    oldconsumernumber: "",
    consumermobilenumber: "",
    propertID: ""
};

export const searchconfig = () => 
    {
      return {
        label: "Search Water Connection",
        type: "search",
        apiDetails: {
            masterName: "commonUiConfig",
            moduleName: "SearchDefaultConfig",
            requestBody: {},
            serviceName: "/egov-hrms/employees/_search",
            requestParam: {
              limit: 10,
              names: "",
              roles: "",
              offset: 0,
              sortBy: "lastModifiedTime",
              tenantId: "pg.amhara",
              sortOrder: "DESC",
            },
            tableFormJsonPath: "requestParam",
            filterFormJsonPath: "requestParam",
            searchFormJsonPath: "requestParam",
            minParametersForFilterForm: 0,
            minParametersForSearchForm: 0,
        },
        sections: {
          search: {
            uiConfig: {
              formClassName: "custom-both-clear-search",
              primaryLabel: "ES_COMMON_SEARCH",
              secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
              minReqFields: 0,
              defaultValues: defaultSearchValues, 
              fields: [
                {
                  label: "Consumer number",
                  isMandatory: false,
                  key: "consumernumber",
                  type: "number",
                  populators: { 
                    name: "consumernumber", 
                    error: "Required", 
                    validation: { min: 0, max: 999999999 } 
                  },
                },
                {
                    label: "Old Consumer number",
                    isMandatory: false,
                    key: "oldconsumernumber",
                    type: "number",
                    populators: { 
                        name: "oldconsumernumber", 
                        error: "Required", 
                        validation: { min: 0, max: 999999999 } 
                    },
                },
                {
                  label: "Consumer mobile number",
                  isMandatory: false,
                  key: "consumermobilenumber",
                  type: "number",
                  disable: false,
                  populators: { name: "mobileNumber", error: "sample error message", validation: { min: 0, max: 999999999} },
                },
                {
                  label: "Property ID",
                  isMandatory: false,
                  type: "text",
                  disable: false,
                  populators: { 
                    name: "propertyID",
                  },
                },
              ],
            },
    
            show: true
          },
          searchResult: {
            show: true,
            children: {},
            uiConfig: {
              columns: [
                {
                  label: "USER_MANAGEMENT_CODE",
                  jsonPath: "code",
                },
                {
                  label: "USER_MANAGEMENT_NAME",
                  jsonPath: "user.name",
                },
                {
                  label: "USER_MANAGEMENT_MOBILE_NO",
                  jsonPath: "user.mobileNumber",
                },
                {
                  label: "MP_USER_MANAGEMENT_ROLE",
                  jsonPath: "user.roles[0].code",
                },
                {
                  label: "USER_MANAGEMENT_EMAIL",
                  jsonPath: "user.emailId",
                },
              ],
              rowClassName: "table-row-mdms table-row-mdms-hover",
              tableClassName: "table pqm-table",
              resultsJsonPath: "Employees",
              enableColumnSort: true,
              enableGlobalSearch: false,
            },
          },
        },
      };
    };