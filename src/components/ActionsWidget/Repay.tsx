import { Button } from "components/UI/Button/Button";
import Card from "components/Studio/Card";
import Dropdown from "components/UI/Dropdown/Dropdown";
import DropDownInfo from "components/DropDownInfo";

interface Props {}

const CARDS = [
  {
    value: "14%",
    title: "Remaining Loan",
  },
  {
    value: "Week",
    title: "Next Payment",
  },
];

const CARDS_2 = [
  {
    value: "14%",
    title: "Interest Paid",
  },
  {
    value: "$XX.XX",
    title: "Total Paid",
  },
];

const Repay = (props: Props) => {
  return (
    <div className="w-full">
      <DropDownInfo
        placeHolder="Choose Loan"
        selectedValue=""
        setValue={() => {}}
        left="00.00"
        right="Balance: 00.00"
      />
      <div className="flex justify-between my-5 gap-4">
        {CARDS.map((item) => {
          return <Card title={item.value} description={item.title} />;
        })}
      </div>
      <div className="flex justify-between my-5 gap-4">
        {CARDS_2.map((item) => {
          return <Card title={item.value} description={item.title} />;
        })}
      </div>
      <Button variant="write-btn">Repay</Button>
    </div>
  );
};

export default Repay;
