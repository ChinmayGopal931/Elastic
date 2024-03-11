import { Button } from "components/UI/Button/Button";
import Card from "components/Studio/Card";
import DropDownInfo from "components/DropDownInfo";

interface Props {}

const CARDS = [
  {
    value: "$00.00",
    title: "Total Staked",
  },
  {
    value: "3.5%",
    title: "APY",
    color: "#5BC983",
  },
  {
    value: "$00.00",
    title: "Withdrawal Fee",
  },
];

const YieldFarming = (props: Props) => {
  return (
    <div className="w-full">
      <div className="mt-5">
        <DropDownInfo
          placeHolder="Stake At"
          selectedValue=""
          setValue={() => {}}
          left="00.00"
          right="Balance: 00.00"
        />
      </div>
      <div className="flex justify-between my-5 gap-4">
        {CARDS.map((item) => {
          return (
            <Card
              title={item.value}
              description={item.title}
              color={item.color}
            />
          );
        })}
      </div>
      <Button variant="write-btn">Farm</Button>
    </div>
  );
};

export default YieldFarming;
