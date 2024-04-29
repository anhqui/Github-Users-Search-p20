import './App.css'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import User from './users/User'
import Home from './components/pages/Home'
import GithubState from './components/context/github/GithubState'
import AlertState from './components/context/alert/AlertState'
import NotFound from './components/pages/NotFound'

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
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
