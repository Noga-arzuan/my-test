import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
function customSetIcon(props) {
  const icons = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  };

  return (
    <div
      className="iconeStyle"
      style={{ height: 0, width: 0, backgroundColor: " #ffe9e9" }}
    >
      {icons[String(props.icon)]}
    </div>
  );
}
export default function CustomStepper(props) {
  function getSteps() {
    return [" ", " ", " ", " ", ""];
  }
  let steps = getSteps();
  return (
    <Stepper
      style={{ height: 0, width: 0 }}
      activeStep={props.stepNum}
      alternativeLabel
    >
      {steps.map((label) => (
        <Step key={label} style={{ height: 0, width: 0 }}>
          <StepLabel
            style={{ height: 0, width: 0 }}
            StepIconComponent={customSetIcon}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
