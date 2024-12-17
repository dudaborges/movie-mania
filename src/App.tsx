import './App.css'
import Menu from './components/Menu'
import MenuMobile from './components/MenuMobile'
import Catalog from './sections/Catalog'
import Home from './sections/Home'

function App() {

  return (
    <>
      <Menu/>
      <MenuMobile/>
      <Home/>   
      <Catalog/>
    </>
  )
}

export default App
