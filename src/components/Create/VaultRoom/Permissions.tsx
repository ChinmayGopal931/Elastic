import React from 'react';
import ListItem from 'components/ListItem';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import copy from 'assets/icons/copy.svg';
import link from 'assets/icons/link.svg';

function Permissions() {
  return (
    <div className="flex flex-col shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface p-6 rounded-lg w-full">
      <h2 className="text-xl mb-4 text-center desktop:text-left leading-6 tracking-wider font-semibold text-heading_light dark:text-white">
        Permissions
      </h2>
      <div className="flex mobile:flex-col desktop:flex-row w-full justify-between desktop:gap-10">
        <ListItem
          left={<p className="text-heading_light dark:text-white">Privacy</p>}
          right={<div className="text-xs text-link">Public</div>}
        />
        <ListItem
          left={<p className="text-heading_light dark:text-white">Modification</p>}
          right={<div className="text-xs text-link">Locked</div>}
        />
      </div>
      <h2 className="text-xl mb-4 text-center desktop:text-left leading-6 tracking-wider font-semibold mt-5 text-heading_light dark:text-white">
        Managers
      </h2>
      <div className="flex items-center">
        <div className="flex w-full justify-between">
          <ListItem
            left={
              <div className="flex items-center">
                <SymbolLogo symbol="FCTRLOGO" height={30} width={30} />
                <p className="mobile:block desktop:hidden px-2 text-xs muted-text">
                  0xbc7...e2ee6a9
                </p>
                <p className="mobile:hidden desktop:block px-2 text-xs muted-text">
                  0xb513325d0fbbf99deewc59932ec7e2ee785e6a9
                </p>
                <img className="h-[16px] w-[16px]" src={copy} alt="Copy Address" />
                <img className="h-[16px] w-[16px] mx-3" src={link} alt="Share Address" />
              </div>
            }
            right={
              <div className="flex justify-center items-center">
                <p className="mr-2 mobile:hidden text-heading_light dark:text-white">
                  Share of generated fees
                </p>
                <div className="gradiant-border-tag">
                  <div className="min-w-[14px] text-xs text-center dark:bg-ui_surface_opc text-heading_dark py-1 px-5 rounded-lg flex flex-row justify-evenly items-center">
                    15%
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
      <h2 className="text-xl mb-4 text-center desktop:text-left leading-6 tracking-wider font-semibold mt-5 text-heading_light dark:text-white">
        Strategist
      </h2>
      <div className="flex items-center">
        <div className="flex w-full justify-between">
          <ListItem
            left={
              <div className="flex items-center">
                <SymbolLogo symbol="FCTRLOGO" height={30} width={30} />
                <p className="mobile:block desktop:hidden px-2 text-xs muted-text">
                  0xbc7...e2ee6a9
                </p>
                <p className="mobile:hidden desktop:block px-2 text-xs muted-text">
                  0xb513325d0fbbf99deewc59932ec7e2ee785e6a9
                </p>
                <img className="h-[16px] w-[16px]" src={copy} alt="Copy Address" />
                <img className="h-[16px] w-[16px] mx-3" src={link} alt="Share Address" />
              </div>
            }
            right={
              <div className="flex justify-center items-center">
                <p className="mr-2 mobile:hidden">Share of generated fees</p>
                <div className="gradiant-border-tag">
                  <div className="min-w-[14px] text-xs text-center text-heading_dark py-1 px-5 rounded-lg flex flex-row justify-evenly items-center dark:bg-ui_surface_opc">
                    20%
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Permissions;
