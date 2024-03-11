import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import { Token } from 'lib/constants/tokens';

interface Props {
  token: Token;
  width?: number;
  height?: number;
}

const TokenBox = (props: Props) => {
  const { token, width = 150, height = 40 } = props;

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="flex flex-row items-center justify-center gap-2 p-2 ring-2 rounded-xl"
    >
      <SymbolLogo symbol={token?.symbol} height={24} width={24} />
      <p className="body-medium-14">{token?.name}</p>
    </div>
  );
};

export default TokenBox;
