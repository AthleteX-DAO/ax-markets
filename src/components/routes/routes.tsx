import { Routes, Route } from 'react-router-dom';
import Body from '../Body/Body';
import LeaderboardPage from '../LeaderboardPage/LeaderBoardPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';


const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default RoutesComponent;