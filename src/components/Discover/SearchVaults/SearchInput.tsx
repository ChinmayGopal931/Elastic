import searchSvg from 'assets/search.svg';
import { useMediaQuery } from 'usehooks-ts';

interface Props {
  className?: string;
  placeholder?: string;
  search: string;
  setSearch: (value: string) => void;
  transparent?: boolean;
  width?: number;
}

const SearchInput = (props: Props) => {
  const { className, placeholder, search, setSearch, transparent, width = 300 } = props;
  const backgroundStyle = transparent ? 'transparent' : '';
  const commonClasses = `flex justify-between items-center rounded-lg h-[40px] ${className}`;
  const backgroundClasses = transparent ? '' : 'dark:bg-ui_surface_opc bg-white';
  const inputClasses = `w-full focus:ring-0 body-regular-14 outline-none h-[17px] px-2 border-none`;
  const isMobileView = useMediaQuery('(max-width: 768px)');

  return (
    <div className="gradiant-border">
      <div
        className={`${commonClasses} ${backgroundClasses}`}
        style={{ background: backgroundStyle, width: !isMobileView ? `${width}px` : '100%' }}
      >
        <div className="flex flex-row justify-center items-center px-3 flex-grow">
          <input
            type="text"
            className={`${inputClasses} ${backgroundClasses}`}
            value={search}
            style={{ background: backgroundStyle }}
            placeholder={placeholder}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <img src={searchSvg} className="h-[17px] w-[17px] mr-4" alt="Search" />
      </div>
    </div>
  );
};

export default SearchInput;
