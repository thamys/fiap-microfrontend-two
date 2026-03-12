import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>MFE 2</h1>
      <div className="card">
        <button className='btn btn-danger' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
