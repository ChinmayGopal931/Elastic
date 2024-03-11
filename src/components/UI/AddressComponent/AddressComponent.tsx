import { truncatehex } from 'lib/helpers/helpers';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

interface VaultAddressProps {
  address: string;
  isTrunced?: boolean;
}

const ARBISCAN_URL = 'https://arbiscan.io/address';

const AddressComponent = (props: VaultAddressProps) => {
  return (
    <Link
      className="anchor-element"
      style={{ color: 'inherit', textDecoration: 'inherit' }}
      to={`${ARBISCAN_URL}/${props.address}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col gap-y-2 desktop:flex-row desktop:items-center">
        <div className="flex flex-row hover:opacity-50 cursor-pointer hover:transition-all duration-300 tracking-wider">
          <p className={`text-2xs mr-4`}>
            {props.isTrunced ? truncatehex(props.address, 10, 10) : props.address}
          </p>
        </div>
      </div>
      <Tooltip place="bottom" id="my-tooltip" anchorSelect=".anchor-element">
        <p className={`text-2xs mr-4`}>{props.address}</p>
      </Tooltip>
    </Link>
  );
};

export default AddressComponent;
