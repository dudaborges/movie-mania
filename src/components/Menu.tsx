import '../styles/components/menu.css'
import logoImg from '../assets/logos/logo-white5.png'


function Menu() {
  return (
    <div id='menu-primary'>
      <div id='nav-primary'>
        <div className='flex-center flex__gap-20'>
          <div id='logo' className='img'><img src={logoImg} alt='Filme Mania'/></div>
        </div>
          <nav id='nav-links-primary' className='flex-center flex__gap-10'>
            <a>Sobre</a>
            <a>Filmes</a>
            <a>Assistam em Casa</a>
            <a>Filmes Populares</a>
          </nav>
      </div>
    </div>


  )
}

export default Menu