"use client";
import { Search } from "lucide-react";
import { useSearch } from "@/features/Search/model/use-search";
import { cn } from "@/shared/lib/cn";
import SearchResults from "@/features/Search/ui/SearchResults";

function SearchInput() {
  const {
    ref,
    isFocused,
    searchQuery,
    setSearchQuery,
    items,
    handleFocus,
    handleSelect,
  } = useSearch();

  return (
    <>
      {isFocused && (
        <div className="fixed inset-0 bg-black-50 z-10 backdrop-blur-xs transition-all duration-500" />
      )}

      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 rounded-2xl px-4 py-3 bg-gray-100 relative z-20 transition-all duration-500",
          isFocused && "bg-white shadow-lg ring-2 ring-primary",
        )}
      >
        <Search size={18} color="gray" />
        <input
          className={cn("bg-transparent outline-none w-full")}
          type="text"
          placeholder="Поиск пиццы..."
          value={searchQuery}
          onFocus={handleFocus}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {items.length > 0 && isFocused && (
        <div className="absolute left-0 top-25 w-full bg-white rounded-2xl py-2 z-20">
          <SearchResults items={items} onSelected={handleSelect} />
        </div>
      )}
    </>
  );
}

export default SearchInput;
