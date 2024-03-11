import { Button } from 'components/UI/Button/Button';
import Dropdown from 'components/UI/Dropdown/Dropdown';
import { Protocol } from 'lib/constants';
import { Token } from 'lib/constants/tokens';
import { useMemo, useState } from 'react';

import SearchInput from './SearchInput';
import SearchTable from './SearchTable/SearchTable';

type Props = {
  vaults: any[];
  tokens: { [key: string]: Token };
  protocols: { [key: string]: Protocol };
};

const SearchVaults = (props: Props) => {
  const { vaults, tokens, protocols } = props;

  const [searchInput, setSearchInput] = useState('');
  const [selectedAsset, setSelectedAsset] = useState('');
  const [selectedProtocol, setSelectedProtocol] = useState('');

  const tokenOptions = [
    { title: 'All' },
    ...Object.values(tokens).map((token) => {
      return {
        title: token.symbol,
      };
    }),
  ];

  const protocolOptions = [
    { title: 'All' },
    ...Object.values(protocols).map((protocol) => {
      return {
        title: protocol.name,
      };
    }),
  ];

  const isUserSearching = searchInput !== '' || selectedAsset !== '' || selectedProtocol !== '';

  const resetSearch = () => {
    setSearchInput('');
    setSelectedAsset('');
    setSelectedProtocol('');
  };

  const defaultSetting = searchInput == '' && selectedAsset == '' && selectedProtocol == '';

  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex flex-col tablet:flex-row gap-4 pb-5">
        <SearchInput
          search={searchInput}
          setSearch={setSearchInput}
          placeholder={'Vault name'}
          width={480}
        />

        <div className="gradiant-border">
          <Dropdown
            selectedLabel={selectedAsset}
            className="w-full desktop:w-[145px]"
            placeHolder="Assets"
            theme={{ type: 'filter' }}
            options={tokenOptions}
            setSelectedOption={(selected: string) =>
              setSelectedAsset(selected === 'All' ? '' : selected)
            }
          />
        </div>
        <div className="gradiant-border">
          <Dropdown
            selectedLabel={selectedProtocol}
            className="w-full desktop:w-[145px]"
            placeHolder="Protocol"
            theme={{ type: 'filter' }}
            options={protocolOptions}
            setSelectedOption={(selected: string) =>
              setSelectedProtocol(selected === 'All' ? '' : selected)
            }
          />
        </div>

        {!defaultSetting && (
          <Button className="border-none" onClick={resetSearch} variant="reset-btn">
            Reset
          </Button>
        )}
      </div>

      <div className="flex fle-col items-center justify-center flex-grow h-40">
        <h1 className="gradiant-color font-bold text-6xl">No Vaults Found!</h1>
      </div>
    </div>
  );
};

export default SearchVaults;
