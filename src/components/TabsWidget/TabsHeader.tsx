type CurrentTab = {
  id: string;
  title: string;
};

interface TabHeaderProps {
  currentTab: CurrentTab;
  setCurrentTab: Function;
  tabs: CurrentTab[];
}

const TabsHeader = (props: TabHeaderProps) => {
  const handleTabSelect = (tab: CurrentTab) => {
    props.setCurrentTab(tab);
  };
  return (
    <div className="flex flex-row w-full justify-center gap-2 mb-4">
      {props.tabs.map((tab) => {
        return (
          <div
            key={tab.id}
            className={`w-full h-[44px] font-bold text-center rounded-lg border-none px-2 py-3 uppercase cursor-pointer tracking-widest ${
              props.currentTab.id == tab.id
                ? 'gradiant-color'
                : 'text-body_light_dark opacity-80 hover:opacity-100 '
            } text-xs font-roboto_normal tracking-[0.75px] transition-all duration-200 `}
            onClick={() => handleTabSelect(tab)}
          >
            {tab.title}
            {props.currentTab.id == tab.id && (
              <hr className="mx-auto my-3 border-primary_brand_01 transition-all duration-200" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TabsHeader;
