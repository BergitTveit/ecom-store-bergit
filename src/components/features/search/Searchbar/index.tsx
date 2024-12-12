import { useState } from "react";
import { Product } from "../../../../api";
import { getSearchProductSuggestions } from "../../../../utils/searchFilters";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  products: Product[];
}

export const SearchBar = ({ onSearch, products }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
    const newSuggestions = getSearchProductSuggestions(products, term);
    setSuggestions(newSuggestions);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="flex justify-center  m-4">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search products..."
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        className="w-full max-w-md  px-4 py-2 border rounded-lg"
        aria-label="Search products"
        aria-expanded={showSuggestions}
        aria-controls="search-suggestions"
        aria-describedby="search-description"
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute w-full max-w-md mt-1 bg-white border rounded-lg shadow-lg z-10">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
