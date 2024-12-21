import { Link } from "react-router-dom"; 
import '../styles/components/menu.css'
import logoImg from '../assets/logos/logo-white5.png'

function Menu() {
  return (
    <div id='menu-primary'>
      <div id='nav-primary'>
        <div className='flex-center flex__gap-20'>
          <div id='logo' className='img'>
            <img src={logoImg} alt='Filme Mania' />
          </div>
        </div>
        <nav id='nav-links-primary' className='flex-center flex__gap-10'>
          <Link to="/">Todos os Filmes</Link> 
          <Link to="/popular-movies">Filmes Populares</Link> 
        </nav>
      </div>
    </div>
  );
}

export default Menu;
