import { useState } from 'react'
import './App.css'
import Socialabiz from './components/socialabiz/Socialabiz'
import Replo from './components/replo/replo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <Socialabiz/> */}
      <Replo/> 
    </>
  )
}

export default App
941