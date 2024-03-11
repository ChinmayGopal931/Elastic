import React from 'react';

type MobileListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

const MobileList = <T extends unknown>(props: MobileListProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      {props.items.map((item, index) => props.renderItem(item))}
    </div>
  );
};

export default MobileList;
