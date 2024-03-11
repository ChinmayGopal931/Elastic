import ProtocolIcon from 'components/UI/Icons/ProtocolIcon';
import { Protocol } from 'lib/constants';
import React from 'react';

interface Props {
  protocol: Protocol;
}

const ProtocolBox = (props: Props) => {
  const { protocol } = props;
  return (
    <div className="flex flex-col gap-2 p-2 ring-2 rounded-xl">
      <ProtocolIcon protocol={protocol} />
      <p className="body-medium-14">{protocol.name}</p>
    </div>
  );
};

export default ProtocolBox;
