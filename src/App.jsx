import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Reg from "./pages/Reg"
import Auth from "./pages/Auth"
import Gagarin from "./pages/Gagarin"
import Missions from "./pages/Missions"
import Moon from "./pages/Moon"
import Search from "./pages/Search"


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home name={name} email={email} />} />
        <Route path="/missions" element={<Missions />}></Route>
        <Route path="/reg" element={<Reg setName={setName} />} />
        <Route path="/gagarin" element={<Gagarin />} />
        <Route path="/auth" element={<Auth setEmail={setEmail} />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
