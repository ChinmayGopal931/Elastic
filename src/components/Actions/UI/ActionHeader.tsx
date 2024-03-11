import React from 'react';

interface Props {
  action: string;
  description: string;
}

const ActionHeader = (props: Props) => {
  const { action, description } = props;

  // Helper function to capitalize first letter
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 mb-4">
      <h3 className="heading text-2xl">{capitalize(action)}</h3>
      <div className="body-medium-12 text-center">{description}</div>
    </div>
  );
};

export default ActionHeader;
