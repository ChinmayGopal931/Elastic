import React from 'react';
import ListItem from 'components/ListItem';
import { AssetsAndParams } from 'types/VaultForm';

interface Props {
  data: AssetsAndParams;
}

function Parameters({ data }: Props) {
  return (
    <div className="flex flex-col shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface p-6 rounded-lg w-full">
      <h2 className="text-xl text-heading_light dark:text-white mb-4 text-center desktop:text-left leading-6 tracking-wider font-semibold">
        Parmeters
      </h2>
      <div className="flex w-full mobile:flex-col desktop:flex-row justify-between desktop:gap-10">
        <ListItem
          left={<p className="text-heading_light dark:text-white">Rebalancing Logic</p>}
          right={
            <div className="text-xs text-link">
              {data.params.equalWeight ? 'Equal Weights' : ''}
            </div>
          }
        />
        <ListItem
          left={<p className="text-heading_light dark:text-white">Rebalancing Frequency</p>}
          right={<div className="text-xs text-link">Monthly</div>}
        />
      </div>
    </div>
  );
}

export default Parameters;
