import useDarkMode from 'hooks/useDarkMode';
import React from 'react';
import { Stepper, Step } from 'react-form-stepper';

interface Props {
  steps: Array<{
    label: string;
  }>;
  activeStep: number;
}
function Steps({ steps, activeStep }: Props) {
  const [isDarkMode] = useDarkMode();
  const stepConfiguration = {
    activeBgColor: '#3383C5',
    completedBgColor: '#29C4B8',
    completedTextColor: '#29C4B8',
    inactiveTextColor: '#29C4B8',
    inactiveBgColor: '#29C4B8',
    labelFontSize: 0,
    size: 16,
    activeTextColor: isDarkMode ? '#ffffff' : '#000000',
    circleFontSize: '1rem',
    borderRadius: '50%',
    fontWeight: 500,
  };
  return (
    <Stepper
      activeStep={activeStep}
      connectorStateColors
      connectorStyleConfig={{
        activeColor: '#3383C5',
        size: 3,
        completedColor: '#3383C5',
        disabledColor: '#3383C5',
        style: 'solid',
      }}
    >
      {steps.map((item) => {
        return <Step label={item.label} styleConfig={{ ...stepConfiguration }} />;
      })}
    </Stepper>
  );
}

export default Steps;
