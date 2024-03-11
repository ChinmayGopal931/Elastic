import { ReactNode } from 'react';

type InfoCard = {
  key: string;
  value: ReactNode;
};

interface IInfoCardProps {
  infoCard: Array<InfoCard | null>;
  children?: ReactNode;
}

const InfoCard = (props: IInfoCardProps) => {
  return (
    <div className="w-full desktop:w-[432px] h-[110px] p-4 flex flex-row  bg-white dark:bg-ui_surface rounded-xl gap-5 items-center justify-evenly text-pewter_blue shadow-xl dark:shadow-lg text-center">
      {props.infoCard.map((item) => {
        if (!item) return null;
        return (
          <div key={item?.key} className="flex flex-col w-full my-4 h-full">
            <p className="mb-2 text-md font-semibold gradiant-color ">{item.key}</p>
            <div className="tracking-wider flex flex-grow items-center justify-center body-regular-15 font-semibold">
              {item.value}
            </div>
          </div>
        );
      })}
      {props.children}
    </div>
  );
};

export default InfoCard;
