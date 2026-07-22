import type { 
  Dispatch, 
  SetStateAction, 
  ChangeEvent } from "react";

interface SearchBarProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search student by name..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;
