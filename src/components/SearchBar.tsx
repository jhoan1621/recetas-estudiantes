import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
        <div className="d-flex w-75">
    <input
      type="text"
      className="search-input"
      placeholder="Buscar receta..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button type="submit" className="btn btn-primary btn-lg">
      Buscar
    </button>
  </div>
</form>

  );
};

export default SearchBar;
