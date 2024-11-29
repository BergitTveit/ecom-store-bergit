interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
  }
  
  const SearchBar = ({ onSearch }: SearchBarProps) => {
    return (
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg"
        />
      </div>
    );
  };
  
  export default SearchBar;