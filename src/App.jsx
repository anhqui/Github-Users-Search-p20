import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './users/Users'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './users/Search'
import Alert from './components/layout/Alert'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import User from './users/User'
import GithubState from './components/context/github/GithubState'


function App() {

  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  // Get user repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${import.meta.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setRepos(res.data);
    setLoading(false);

  }

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
              <Route path="/user/:id" element={<User loading={loading} repos={repos} getUserRepos={getUserRepos} />} />

            </Routes>

          </div>
        </div>
      </Router>
    </GithubState>
  )
}

export default App
