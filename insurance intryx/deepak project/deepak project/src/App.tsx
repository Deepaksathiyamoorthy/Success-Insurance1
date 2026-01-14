import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewPage from './pages/NewPage/NewPage';
import './App.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </Router>
  )
}

export default App
