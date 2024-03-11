import React from 'react';

interface Props {
  left: JSX.Element;
  right: JSX.Element;
  bordered?: boolean;
  className?: string;
}

function ListItem({ left, right, bordered = false, className = '' }: Props) {
  return (
    <div
      style={bordered ? { border: 'solid #192F4D 1px' } : {}}
      className={`bg-white dark:bg-background cursor-pointer flex justify-between p-4 rounded-xl mt-3 items-center ${className} w-full`}
    >
      {left}
      {right}
    </div>
  );
}

export default ListItem;
