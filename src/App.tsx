import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/login"
import Navbar from "./components/navbar"
import Register from "./components/register"
import Dashboard from "./components/dashboard"
import { useState } from "react"

interface User {
  user: {
    username: string;
    email: string;
  };
  account: Record<string, string>; // Assuming accountDetails is an object with string keys and values
}

function App() {

  const [user, setUser] = useState(false)
  const [userState, setUserState] = useState(false)

  const [account, setAccount] = useState(false)

  function handleUser() {
    setUser(!user)
  }
  function handleUserData() {
    setUserState(!userState)
  }


  return (
    <div className="bg-white">
      <BrowserRouter >
        <Navbar user={user} handleUser={handleUser} handleUserData={handleUserData} />
        <Routes>
          <Route path="/" element={<Dashboard handleUserData={handleUserData} userState={userState} />} />
          <Route path="/login" element={<Login handleUser={handleUser} account={account} setAccount={setAccount} />} />
          <Route path="/register" element={<Register setAccount={setAccount} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
