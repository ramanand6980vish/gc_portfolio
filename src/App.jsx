import { useState } from 'react'
import { Routes, Route, BrowserRouter  } from 'react-router-dom'
import './App.css'
import HomeNew from './Components/HomeNew'
import ClientProjectPortfolio from './Components/ClientProjectPortfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeNew />} />
          <Route path="/portfolio" element={<ClientProjectPortfolio />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
