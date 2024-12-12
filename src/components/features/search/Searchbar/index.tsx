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
    <div className="flex justify-center m-4">
      <div className="relative w-full max-w-md">
        {" "}
        <input
          type="text"
          value={searchTerm}
          placeholder="Search products..."
          onChange={(e) => handleChange(e.target.value)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="w-full px-4 py-2 border rounded-lg"
          aria-label="Search products"
          role="combobox"
          aria-controls="search-suggestions"
          aria-expanded={showSuggestions}
          aria-haspopup="listbox"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul
            id="search-suggestions"
            role="listbox"
            className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10"
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion}
                role="option"
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                aria-selected={searchTerm === suggestion}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
