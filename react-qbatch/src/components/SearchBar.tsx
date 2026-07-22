import { 
  useEffect, 
  useMemo, 
  type Dispatch, 
  type SetStateAction } from "react";
  
import debounce from "lodash/debounce";
import { Search } from "lucide-react";

import { Input } from "../../shad-ui/components/ui/input";

interface SearchBarProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

function SearchBar({ search, setSearch }: SearchBarProps) {
  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearch(value);
      }, 300),
    [setSearch],
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="relative mb-8">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

      <Input
        type="text"
        value={search}
        placeholder="Search students by name..."
        className="pl-10"
        onChange={(e) => debouncedSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
