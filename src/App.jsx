import { useState } from 'react'
import './App.css'
import Game from './components/x-o game/x-o'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Game />
    </div>
  )
}

export default App
