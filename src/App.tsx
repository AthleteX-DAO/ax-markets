import { useState } from 'react'
import { ThemeProvider } from "@/components/theme-provider"

import './App.css'
import TopNavigationBar from './components/TopNavigationBar/TopNavigationBar'
import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="ax-ui-theme">
      <TopNavigationBar />

      <div className="App">
        <header className="App-header">
          <h1>Welcome to AX Markets</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR.
          </p>
          <button onClick={() => setCount((count) => count + 1)}>
            Count is: {count}
          </button>
        </header>
      </div>

    <BottomNavigationBar />
    </ThemeProvider>
    </>
  )
}

export default App
