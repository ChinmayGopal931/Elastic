interface StepProps {
  children: React.ReactNode;
  isActive: boolean;
}

const Step = ({ children, isActive }: StepProps) => {
  return isActive ? children : null;
};

export default Step;
