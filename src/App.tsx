import './App.css'
import Menu from './components/Menu'
import MenuMobile from './components/MenuMobile'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './sections/Home'
import PopularMovies from './sections/PopularMovies';

function App() {

  return (
    <Router>
      <Menu />
      <MenuMobile/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular-movies" element={<PopularMovies/>} />
      </Routes>
    </Router>
  )
}

export default App
