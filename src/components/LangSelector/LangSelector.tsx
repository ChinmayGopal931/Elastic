import Dropdown, { DropdownItem } from 'components/UI/Dropdown/Dropdown';
import { useTranslation } from 'react-i18next';

const LangSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const options: DropdownItem[] = [{ title: 'en' }, { title: 'de' }];

  const setSelectedOption = (value: string) => {
    changeLanguage(value);
  };

  return (
    <Dropdown
      selectedLabel={i18n.language.toUpperCase()}
      bordered
      className=" border-primary_brand_01"
      width={60}
      placeHolder="Choose Frequency"
      theme={{ type: 'asset' }}
      options={options}
      setSelectedOption={setSelectedOption}
    />
  );
};

export default LangSelector;
