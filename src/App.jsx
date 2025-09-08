import { useState } from 'react'
import './App.css'
import Socialabiz from './components/socialabiz/Socialabiz'
import Replo from './components/replo/replo'
import Logo from './components/logo/logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <Socialabiz/> */}
      {/* <Replo/>  */}
      <Logo />

    </>
  )
}

export default App
