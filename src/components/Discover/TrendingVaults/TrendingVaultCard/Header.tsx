import ProtocolIcon from 'components/UI/Icons/ProtocolIcon';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import { Protocol } from 'lib/constants';

type Props = {
  title: string;
  owner: Protocol;
  symbol: string;
};

const Header = (props: Props) => {
  const { title, owner, symbol } = props;
  return (
    <div className="flex flex-row justify-center items-center mt-4 gap-4">
      <SymbolLogo height={40} width={40} symbol={symbol} />
      <div className="flex flex-col gap-1">
        <p className="font-bold tracking-wide text-xl flex items-center heading text-center">
          {title}
        </p>
        <p className="body-regular-14">{owner?.name}</p>
      </div>
    </div>
  );
};

export default Header;
