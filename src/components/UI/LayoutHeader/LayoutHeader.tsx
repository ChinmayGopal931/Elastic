import SymbolLogo from '../SymbolLogo/SymbolLogo';

interface ILayoutHeaderProps {
  title: string;
  description?: string;
  symbol?: string;
}

const SymbolView = ({ symbol }: { symbol?: string }) =>
  symbol ? (
    <div className="flex mr-2 mb-1">
      <SymbolLogo symbol={symbol} height={49} width={36} />
    </div>
  ) : null;

const TitleView = ({ title }: { title: string }) => <h1 className="heading ml-2">{title}</h1>;

const SymbolTextView = ({ symbol }: { symbol?: string }) =>
  symbol ? (
    <p className="text-body_dark_light dark:text-body_light_dark ml-2 mr-2 font-bold text-lg mb-1">
      {symbol}
    </p>
  ) : null;

const DescriptionView = ({ description }: { description?: string }) =>
  description ? <p className="body-regular-15 ml-2 mr-2 max-w-[800px]">{description}</p> : null;

const LayoutHeader = (props: ILayoutHeaderProps) => {
  const { title, symbol, description } = props;
  return (
    <div className="flex flex-col items-start justify-start mb-2 desktop:justify-start h-13">
      <div className="flex flex-row items-end">
        <SymbolView symbol={symbol} />
        <TitleView title={title} />
        <SymbolTextView symbol={symbol} />
      </div>
      {description && (
        <div className="my-4">
          <DescriptionView description={description} />
        </div>
      )}
    </div>
  );
};

export default LayoutHeader;
