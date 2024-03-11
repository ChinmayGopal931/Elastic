import React from 'react';

interface Props {
  frequency: string;
}

const FrequencyBox = (props: Props) => {
  const { frequency } = props;
  return (
    <div className="flex flex-row gap-2 p-2 ring-2 rounded-xl items-center">
      <p className="body-medium-14">Frequency: {frequency}</p>
    </div>
  );
};

export default FrequencyBox;
