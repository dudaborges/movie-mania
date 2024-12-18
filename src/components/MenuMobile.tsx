import { useState } from 'react'
import '../styles/components/menu-mobile.css'


function MenuMobile() {
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const toggleMenu = () => {
        setIsActiveMenu(!isActiveMenu);
        document.body.classList.toggle('is-activeMenu', !isActiveMenu);
    };

    const closeMenu = () => {
        setIsActiveMenu(false);
        document.body.classList.remove('is-activeMenu');
    };

    return (
    <div>
      <div className="menu-mobile">
        <div className="siteHeader__navToggleWrap" onClick={toggleMenu}>
          <div className={`siteNavToggle ${isActiveMenu ? 'is-active' : ''}`}>
            <div className="siteNavToggle__bar"></div>
          </div>
        </div>
      </div>

      <div id="navlinks-mobile" className={`navLinks-mobile flex-center flex-column flex__gap-100 ${isActiveMenu ? 'show' : ''}`}>
        <nav className="flex-center flex-column flex__gap-30">
            <a onClick={closeMenu}>Sobre</a>
            <a onClick={closeMenu}>Filmes</a>
            <a onClick={closeMenu}>Assistam em Casa</a>
            <a onClick={closeMenu}>Filmes Populares</a>
        </nav>
      </div>

      <div className="overlay" style={{ display: isActiveMenu ? 'block' : 'none' }} onClick={closeMenu}></div>
    </div>
    )
}

export default MenuMobile