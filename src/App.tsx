import { ThemeProvider } from "@/components/theme-provider"

import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom';
import RoutesComponent from './components/routes/routes';
import TopNavigationBar from './components/TopNavigationBar/TopNavigationBar'
import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar'
import Body from "./components/Body/Body"



function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="ax-ui-theme">
    <BrowserRouter>
      <TopNavigationBar />
      <RoutesComponent />
    </BrowserRouter>
    <BottomNavigationBar />
    </ThemeProvider>
    </>
  )
}

export default App
