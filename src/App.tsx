import { ThemeProvider } from "@/components/theme-provider"

import './App.css'
import TopNavigationBar from './components/TopNavigationBar/TopNavigationBar'
import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar'
import Body from "./components/Body/Body"

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="ax-ui-theme">
      <TopNavigationBar />

    <Body />

    <BottomNavigationBar />
    </ThemeProvider>
    </>
  )
}

export default App
