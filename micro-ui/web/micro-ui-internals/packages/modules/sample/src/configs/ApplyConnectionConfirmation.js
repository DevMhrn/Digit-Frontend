import { last } from "lodash";

export const config = [
    {
        head : "Identity proof",
        body : [
            {
                inline: false,
                label: "One of these documents is needed to apply for this service",
            },
            {
                inline: false,
                label: "1. Aadhar Card",
            },
            {
                inline: false,
                label: "2. Voter ID",
            },
            {
                inline: false,
                label: "3. Driving License",
            },
            {
                inline: false,
                label: "4. Pan Card",
            },
            {
                inline: false,
                label: "5. PassPort",
            },
            {
                inline: false,
                label: "*In case of multiple / institutional Applicant please provide ID or Authorized person"
            }
        ]
    },
    {
        head : "Address proof",
        body : [
            {
                inline: false,
                label: "One of these documents is needed to apply for this service",
                
            },
            {
                inline: false,
                label: "1. Electricity Bill",
        
            },
            {
                inline: false,
                label: "2. Driving License",
            },
            {
                inline: false,
                label: "3. Voter ID",
            },
            {
                inline: false,
                label: "4. Aadhar Card",
            },
            {
                inline: false,
                label: "5. Pan Card"
            },
            {
                inline: false,
                label: "6. PassPort",
            },
            {
                inline: false,
                label: "*In case of multiple / institutional Applicant please provide ID or Authorized person"
            }
        ]
    },
    {
        head:"Usage Proof",
        body:[
            {
                inline: false,
                label: "1. Electricity Bill"
            },
            {
                inline: false,
                label: "*In case of multiple Registration please provide Registration proof for all Registration"
            }
        ]
    },
    {
        head:"Plumber Report Proof",
        body:[
            {
                inline: false,
                label: "1. Plumber Report / Drawing"
            },
            {
                inline: false,
                label: "*In case of multiple Registration please provide Registration proof for all Registration"
            }
        ]
    },
    {
        head:"Construction Proof",
        body:[
            {
                inline: false,
                label: "1. Building Plan / Completion Certificate"
            },
            {
                inline: false,
                label: "*In case of multiple Registration please provide Registration proof for all Registration"
            }
        ]
    },
    {
        head:"Occupancy Proof",
        body:[
            {
                inline: false,
                label: "1. Property Tax Receipt",
                fontweight: 600,
            },
            {
                inline: false,
                label: "*In case of multiple Registration please provide Registration proof for all Registration"
            }
        ]
    }
];