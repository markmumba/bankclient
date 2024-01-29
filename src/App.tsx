import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/login"
import Navbar from "./components/navbar"
import Register from "./components/register"
import Dashboard from "./components/dashboard"
import { useState } from "react"
import MainTransaction from "./components/mainTransaction"
import Transfer from "./components/transfer"
import TransactionForm from "./components/trasactionform"


function App() {

  const [user, setUser] = useState(false)

  const [username, setUsername] = useState("")

  const [account, setAccount] = useState(false)

  const [transactionType, setTransactionType] = useState("")

  function handleTransactionType(type: string) {
    setTransactionType(type)
  }

  function handleUser(isLoggedIn: boolean) {
    setUser(isLoggedIn)
  }

  function handleUserName(username: string) {
    setUsername(username)
    return username
  }


  return (
    <div className="bg-white overflow-hidden">
      <BrowserRouter >
        <Navbar user={user} handleUser={handleUser} />
        <Routes>
          <Route path="/" element={<Dashboard handleUserData={handleUser} user={user} handleUserName={handleUserName} />} />
          <Route path="/login" element={<Login handleUser={handleUser} account={account} />} />
          <Route path="/register" element={<Register setAccount={setAccount} />} />
          <Route path="/transactions" element={<MainTransaction username={username} />} />
          <Route path="/transfer" element={<Transfer username={username} handleTransactionType={handleTransactionType} />} />
          <Route path="/form" element={<TransactionForm transactionType={transactionType} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
