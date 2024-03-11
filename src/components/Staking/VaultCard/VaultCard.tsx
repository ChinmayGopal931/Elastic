import vaultLogo from 'assets/main-logo-blue.svg';
import { Link } from 'react-router-dom';
import { StakingVault } from 'state/governance/types';

export interface IStakingVaultProps {
  title: string;
  bulletOne: string;
  bulletTwo: string;
  totalStaked: string;
  apy: string;
  path: string;
  choosenPool: StakingVault;
}

const StakingVaultCard = (props: IStakingVaultProps) => {
  const handleVaultSelect = async () => {
    // TODO: add to zustand store
  };
  return (
    <>
      <div className="w-[350px] h-[330px] flex flex-col bg-background rounded-xl ">
        <div className="flex flex-row">
          <img className="h-[50px] w-[50px] ml-8 mr-3 my-4" src={vaultLogo} alt="Vault Logo" />
          <p className="tracking-[4px] uppercase font-medium text-2xs flex items-center text-heading_dark">
            {props.title}
          </p>
        </div>

        <div className="flex flex-col flex-grow w-">
          <div className="flex flex-col mx-4 ml-12 mb-2 w-[250px]">
            <div className="roboto_normal text-2xs leading-5 text-heading_dark flex items-center tracking-tight mb-1">
              {props.bulletOne}
            </div>
            <div className="roboto_normal text-2xs leading-5 text-heading_dark flex items-center tracking-tight mb-2">
              {props.bulletTwo}
            </div>
          </div>
          <div className="flex flex-row py-5 pb-4 text-medium">
            <div className="ml-12 mr-4 text-2xs text-bold">Total Staked</div>
            <div className="mr-12 text-2xs">{props.totalStaked}</div>
            <div className="mr-2 text-2xs">APY</div>
            <div className="mr-4 text-2xs text-success">+{props.apy}</div>
          </div>
          <div className="flex justify-center items-center mt-3">
            <Link to={props.path} onClick={() => handleVaultSelect()}>
              <button className="rounded-xl outline-none font-bold p-3 h-[60.17px] w-[287.76px] bg-background text-honeydew  border-none cursor-pointer hover:bg-border hover:border-none hover:transition duration-300 ease-in-out">
                Stake FCTR
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakingVaultCard;
