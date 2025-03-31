export const newConfig = [
    {
        body : [
            {
                inline: true,
                label: "Connection Category",
                isMandatory: true,
                key:"connectioncategory",
                type: "dropdown",
                disable: false,
                populators: {
                    name: "connectioncategory",
                    optionsKey: "name",
                    error: " Required",
                    required: true,
        
                    options: [
                        {
                            code: "Con1",
                            name: "Residential",
                            label: "connectioncategory",
                            children: [],
                        },
                        {
                            code: "Con1",
                            name: "Corporate",
                            label: "connectioncategory",
                            children: [],
                        },
                    ]
                }
            }   
        ]
    },
    {
      head: "Connection Holder Details",
      body: [
        {
          inline: true,
          label: "Name",
          isMandatory: true,
          key: "applicantname",
          type: "text",
          disable: false,
          populators: { name: "applicantname", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
        },
        {
            label: "Mobile No.",
            isMandatory: true,
            key: "phno",
            type: "number",
            disable: false,
            populators: { name: "phno", error: "Phone no is invalid", validation: {minLength:10, min: 0, max: 9999999999 } },
        },
        {
          inline: true,
          label: "Email ID",
          isMandatory: true,
          key: "emailId",
          type: "text",
          disable: false,
          populators: { name: "emailId", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
        },
        
      ],
    },
    {
      head: "Property Details",
      body: [
        {
            label: "Property Id",
            isMandatory: true,
            key: "propertyId",
            type: "number",
            disable: false,
            populators: { name: "propertyId", error: "propertyId is invalid", validation: {minLength:10, min: 0, max: 9999999999 } },
        },
      ],
    },
    {
      head: "Connection Details",
      subHead: "(To be filled by Citizen / On behalf of citizen by Counter Clerk)",
      key: "connectionDetails",
      body: [
        {
          inline: true,
          label: "Number of proposed taps",
          isMandatory: true,
          key: "numberoftaps",
          type: "number",
          disable: false,
          populators: { name: "numberoftaps", error: "numberoftaps is invalid", validation: {minLength:1, min: 0, max: 9999999999 } },
        },
        {
          inline: true,
          label: "Proposed pipe size(in inches)",
          isMandatory: true,
          key: "pipesize",
          type: "number",
          disable: false,
          populators: { name: "pipesize", error: "pipesize is invalid", validation: {minLength:1, min: 0, max: 9999999999 } },
        },
        {
          inline: true,
          label: "Water source",
          isMandatory: true,
          key:"watersource",
          type: "dropdown",
          disable: false,
          populators: {
              name: "watersource",
              optionsKey: "name",
              error: " Required",
              required: true,
  
              options: [
                  {
                      code: "source1",
                      name: "kaveri",
                      label: "watersource",
                      children: [],
                  },
                  {
                      code: "source2",
                      name: "borewell",
                      label: "watersource",
                      children: [],
                  },
              ]
          }
        },
        {
          inline: true,
          label: "Type of Connection",
          isMandatory: true,
          key:"connectiontype",
          type: "dropdown",
          disable: false,
          populators: {
              name: "connectiontype",
              optionsKey: "name",
              error: " Required",
              required: true,
  
              options: [
                  {
                      code: "source1",
                      name: "Metered",
                      label: "connectiontype",
                      children: [],
                  },
                  {
                      code: "source2",
                      name: "Per hour",
                      label: "connectiontype",
                      children: [],
                  },
              ]
          }
        } 
      ],
    },
    {
      head: "Documents Required",
      key: "documentsrequired",
      body: [
        {
          inline: true,
          isMandatory: true,
          label: "IdentityProof",
          key: "documentsrequired",
          type: "uploadField", 
          disable: false,
        },
      ],
    },
  ];
  