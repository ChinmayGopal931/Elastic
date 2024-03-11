import { useEffect } from 'react';
import { useBoundStore } from 'state/store';

type CurrentTab = {
  id: string;
  title: string;
};

interface TabHeaderProps {
  currentTab: CurrentTab;
  setCurrentTab: Function;
  tabs: CurrentTab[];
}

const Header = (props: TabHeaderProps) => {
  const handleTabSelect = (tab: CurrentTab) => {
    props.setCurrentTab(tab);
  };

  return (
    <div className="flex flex-row justify-center gap-2 mt-10 mb-5 desktop:mt-4">
      {props.tabs.map((tab) => {
        return (
          <div
            key={tab.id}
            className={`w-[170px] h-[44px] font-bold text-center rounded-lg border-none px-6 py-3 uppercase cursor-pointer tracking-widest  ${
              props.currentTab.id == tab.id
                ? 'gradiant-color'
                : 'text-body_light_dark opacity-80 hover:opacity-100 '
            } text-xs font-roboto_normal tracking-[0.75px]`}
            onClick={() => handleTabSelect(tab)}
          >
            {tab.title}
            {props.currentTab.id == tab.id && (
              <hr className="mx-auto my-3 transition-all duration-200 border-primary_brand_01" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Header;
