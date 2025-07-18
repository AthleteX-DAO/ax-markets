import { ThemeProvider } from "@/components/theme-provider"

import './App.css'
import TopNavigationBar from './components/TopNavigationBar/TopNavigationBar'
import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar'
import Body from "./components/Body/Body"
import PortfolioPage from "./components/PortfolioPage/PortfolioPage"
import LeaderboardPage from "./components/LeaderboardPage/LeaderBoardPage"
import MarketDetail from "./components/MarketDetails/MarketDetails"

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="ax-ui-theme">
      <TopNavigationBar />

    <Body />
    {/* <PortfolioPage /> */}
    {/* <LeaderboardPage /> */}
    {/* <MarketDetail /> */}

    {/* Main Content */}

    <BottomNavigationBar />
    </ThemeProvider>
    </>
  )
}

export default App
