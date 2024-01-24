import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/login"
import Navbar from "./components/navbar"
import Register from "./components/register"
import Dashboard from "./components/dashboard"

function App() {

  return (
    <div className="bg-white">
      <BrowserRouter >
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
