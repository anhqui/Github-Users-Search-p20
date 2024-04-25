import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './users/Users'
import { useState } from 'react'
import Search from './users/Search'
import Alert from './components/layout/Alert'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import User from './users/User'
import GithubState from './components/context/github/GithubState'


function App() {

  const [alert, setAlert] = useState(null)

  // Show Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null)
    }, 5000)
  }

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Routes>
              <Route path="/" element={
                <>
                  <Search
                    showAlert={showAlert}
                  />
                  <Users />
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/user/:id" element={<User />} />

            </Routes>

          </div>
        </div>
      </Router>
    </GithubState>
  )
}

export default App
