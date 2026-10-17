import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Employees from './Employees'
import EmployeeDetail from './EmployeeDetail'
import NotFound from './NotFound'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:id" element={<EmployeeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
