export const waterConnectionConfig = [
  {
    head: "Property Details",
    body: [
      {
        type: "component",
        component: "PropertySearchBar",
        key: "propertyId",
        withoutLabel: true,
        isMandatory: true
      }
    ]
  },
  {
    head: "Connection Details",
    body: [
      {
        label: "Connection Type",
        type: "dropdown",
        populators: {
          name: "connectionType",
          optionsKey: "i18nKey",
          options: [
            { code: "Metered", i18nKey: "WS_METERED_CONNECTION" },
            { code: "Non-Metered", i18nKey: "WS_NON_METERED_CONNECTION" }
          ]
        },
        isMandatory: true
      },
      {
        label: "No. of Water Taps",
        type: "number",
        populators: {
          name: "noOfTaps",
          validation: {
            required: true,
            min: 1
          }
        },
        isMandatory: true
      },
      {
        label: "Pipe Size (in inches)",
        type: "dropdown",
        populators: {
          name: "pipeSize",
          optionsKey: "i18nKey",
          options: [
            { code: "0.25", i18nKey: "0.25 inch" },
            { code: "0.5", i18nKey: "0.5 inch" },
            { code: "0.75", i18nKey: "0.75 inch" },
            { code: "1", i18nKey: "1 inch" },
            { code: "1.5", i18nKey: "1.5 inch" },
            { code: "2", i18nKey: "2 inch" }
          ]
        },
        isMandatory: true
      },
      {
        label: "Water Source",
        type: "dropdown",
        populators: {
          name: "waterSource",
          optionsKey: "i18nKey",
          options: [
            { code: "GROUND.WELL", i18nKey: "WS_GROUND_WELL" },
            { code: "GROUND.HANDPUMP", i18nKey: "WS_GROUND_HANDPUMP" },
            { code: "SURFACE.RIVER", i18nKey: "WS_SURFACE_RIVER" },
            { code: "SURFACE.CANAL", i18nKey: "WS_SURFACE_CANAL" }
          ]
        },
        isMandatory: true
      },
      {
        label: "Initial Meter Reading",
        type: "number",
        populators: {
          name: "initialMeterReading",
          validation: {
            min: 0
          }
        },
        isMandatory: false,
        condition: (formData) => formData?.connectionType?.code === "Metered"
      }
    ]
  },
  {
    head: "Plumber Details",
    body: [
      {
        label: "Plumber Provided By",
        type: "dropdown",
        populators: {
          name: "detailsProvidedBy",
          optionsKey: "i18nKey",
          options: [
            { code: "ULB", i18nKey: "WS_PROVIDED_BY_ULB" },
            { code: "SELF", i18nKey: "WS_PROVIDED_BY_SELF" }
          ]
        },
        isMandatory: true
      },
      {
        label: "Plumber Name",
        type: "text",
        populators: {
          name: "plumberName",
          validation: {
            required: true
          }
        },
        isMandatory: true
      },
      {
        label: "License Number",
        type: "text",
        populators: {
          name: "licenseNumber",
          validation: {
            required: true
          }
        },
        isMandatory: true
      },
      {
        label: "Mobile Number",
        type: "mobileNumber",
        populators: {
          name: "mobileNumber",
          validation: {
            required: true,
            pattern: /^[6-9]\d{9}$/
          }
        },
        isMandatory: true
      }
    ]
  },
  {
    head: "Road Cutting Details",
    body: [
      {
        label: "Road Type",
        type: "dropdown",
        populators: {
          name: "roadType",
          optionsKey: "i18nKey",
          options: [
            { code: "BERMUDA", i18nKey: "WS_ROAD_TYPE_BERMUDA" },
            { code: "ARTERIAL", i18nKey: "WS_ROAD_TYPE_ARTERIAL" },
            { code: "SUB_ARTERIAL", i18nKey: "WS_ROAD_TYPE_SUB_ARTERIAL" }
          ]
        },
        isMandatory: false
      },
      {
        label: "Road Cutting Area (in sq ft)",
        type: "number",
        populators: {
          name: "roadCuttingArea",
          validation: {
            min: 0
          }
        },
        isMandatory: false
      }
    ]
  },
  {
    head: "Documents Upload",
    body: [
      {
        label: "Required Documents",
        type: "multiupload",
        populators: {
          name: "documents",
          allowedFileTypes: ["image/png", "image/jpeg", "application/pdf"]
        }
      }
    ]
  }
];
