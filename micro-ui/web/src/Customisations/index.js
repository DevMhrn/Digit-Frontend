import { ptComponents } from "./pt";
import { tlComponents } from "./tl";
import { LabExerciseCard } from "@egovernments/digit-ui-module-lab-exercise";

var Digit = window.Digit || {};

const customisedComponent = {
    ...ptComponents,
    ...tlComponents
}

export const initCustomisationComponents = () => {
    Object.entries(customisedComponent).forEach(([key, value]) => {
        Digit.ComponentRegistryService.setComponent(key, value);
    });
};

const UICustomizations = {
    homePageModules: {
        LabExercise: {
            icon: "lab-exercise-icon",
            module: "LabExercise",
            links: [
                {
                    link: "lab-exercise",
                    i18nKey: "LAB_EXERCISE_MODULE",
                    module: "LabExercise",
                }
            ]
        }
    },
    overrideModuleComponents: {
        LabExercise: {
            HomeCard: LabExerciseCard
        }
    }
};

export default UICustomizations;


