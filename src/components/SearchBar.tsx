import "../styles/components/search-bar.css"
import searchIcon from '../assets/icons/search-icon.svg'

function SearchBar() {
  return (
    <form className="search-container">
    <input type="text" id="search-bar" placeholder="Busque por título, diretor, elenco ou descrição..."/>
    <a href="#"><img className="search-icon" src={searchIcon}/></a>
  </form>
  )
}

export default SearchBar
