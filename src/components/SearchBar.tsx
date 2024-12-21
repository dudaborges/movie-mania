import "../styles/components/search-bar.css";
import searchIcon from '../assets/icons/search-icon.svg';
import { useState } from "react";

function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form className="search-container flex-center" onSubmit={handleSearch}>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="search-bar"
        placeholder="Busque por título"
      />
      <button type="submit" className="submit-btn">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
