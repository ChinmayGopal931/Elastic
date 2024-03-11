import React from 'react';
import ListItem from 'components/ListItem';

function Fees() {
  return (
    <div className="flex flex-col shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface p-6 rounded-lg w-full">
      <h2 className="text-xl mb-4 text-center desktop:text-left leading-6 tracking-wider font-semibold text-heading_light dark:text-white">
        Fees
      </h2>

      <div className="flex w-full mobile:flex-col desktop:flex-row justify-between desktop:gap-5">
        <ListItem
          left={<p className="text-heading_light dark:text-white">Performance Fee</p>}
          right={
            <div className="gradiant-border-tag">
              <div className="min-w-[14px] text-xs text-center dark:bg-ui_surface_opc text-heading_dark py-1 px-5 rounded-lg flex flex-row justify-evenly items-center">
                15%
              </div>
            </div>
          }
        />
        <ListItem
          left={<p className="text-heading_light dark:text-white">Management Fee</p>}
          right={
            <div className="gradiant-border-tag">
              <div className="min-w-[14px] text-xs text-center dark:bg-ui_surface_opc text-heading_dark py-1 px-5 rounded-lg flex flex-row justify-evenly items-center">
                2%
              </div>
            </div>
          }
        />
      </div>
      <div className="flex items-center">
        <div className="flex w-full justify-between">
          <ListItem
            left={<p className="text-heading_light dark:text-white">Shares Fee</p>}
            right={
              <div className="gradiant-border-tag">
                <div className="min-w-[14px] text-xs text-center dark:bg-ui_surface_opc text-heading_dark py-1 px-5 rounded-lg flex flex-row justify-evenly items-center">
                  5%
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Fees;
