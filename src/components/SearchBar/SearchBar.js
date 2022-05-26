import "./searchBar.css";

const SearchBar = ({ setSearchQuery }) => (
  <input
    className="searchBar"
    onChange={({ target }) => setSearchQuery(target.value)}
  />
);

export default SearchBar;
