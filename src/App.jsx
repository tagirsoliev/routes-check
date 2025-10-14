import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reg from './pages/Reg';
import Auth from './pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reg' element={<Reg />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
