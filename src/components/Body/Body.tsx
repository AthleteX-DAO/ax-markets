import { useState } from 'react'

const Body = () => {
    const [count, setCount] = useState(0)
    return (
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
    )
}

export default Body;