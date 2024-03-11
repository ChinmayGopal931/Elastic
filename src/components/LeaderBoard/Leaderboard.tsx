import { getAllDepositLeaderBoardV2 } from 'state/V2Vaults/hooks';
import LeaderBoardTable from './LeaderBoardTable';

const Leaderboard = () => {
  const leaderBoardData = getAllDepositLeaderBoardV2();

  return (
    <>
      <h2 className="text-2xl font-semibold desktop:text-7xl heading mt-4">Leaderboard</h2>
      <div className="flex desktop:flex-row mobile:flex-col">
        <LeaderBoardTable userData={leaderBoardData} />
      </div>
    </>
  );
};

export default Leaderboard;
