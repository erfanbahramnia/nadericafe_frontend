import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Home from './pages/home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="dashboard" element={<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App
