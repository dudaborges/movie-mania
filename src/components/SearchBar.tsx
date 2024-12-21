import "../styles/components/search-bar.css";
import searchIcon from '../assets/icons/search-icon.svg'
import { useState, useEffect } from "react";

function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <div className="search-container">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="search-bar"
        placeholder="Busque por título"
        autoComplete="off"
      />
    <img className="search-icon" src={searchIcon}/>    
    </div>
  );
}

export default SearchBar;

