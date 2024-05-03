import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import More from './components/pages/More'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/food/:id" element={<More />} />
  </Routes>
)

export default Rotas
