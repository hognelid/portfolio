import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card/card'
import * as Core from "@sebgroup/green-core/react"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Card/>
  <Core.GdsButton>hello</Core.GdsButton>
    </>
  )
}

export default App
