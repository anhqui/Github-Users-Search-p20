import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './users/Users'
import Search from './users/Search'
import Alert from './components/layout/Alert'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import User from './users/User'
import GithubState from './components/context/github/GithubState'
import AlertState from './components/context/alert/AlertState'


function App() {


  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className="container">
              <Alert />
              <Routes>
                <Route path="/" element={
                  <>
                    <Search
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
      </AlertState>
    </GithubState>
  )
}

export default App
