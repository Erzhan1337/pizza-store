"use client";
import { Search, X } from "lucide-react";
import { useSearch } from "@/features/Search/model/use-search";
import { cn } from "@/shared/lib/cn";
import SearchResults from "@/features/Search/ui/SearchResults";
import { useState } from "react";

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

  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const handleMobileClose = () => {
    setIsMobileSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      {(isFocused || isMobileSearchOpen) && (
        <div
          className="fixed inset-0 z-10 backdrop-blur-xs transition-all duration-300"
          onClick={handleMobileClose}
        />
      )}

      {/* Mobile */}
      <button
        onClick={() => setIsMobileSearchOpen(true)}
        className="md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
      >
        <Search className="w-5 h-5" />
      </button>

      {isMobileSearchOpen && (
        <div className="md:hidden fixed inset-x-0 top-0 z-40 bg-white p-4 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-3">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  autoFocus
                  className="bg-transparent outline-none w-full"
                  type="text"
                  placeholder="Поиск пиццы..."
                  value={searchQuery}
                  onFocus={handleFocus}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {items.length > 0 && isMobileSearchOpen && (
                <div className="absolute left-0 top-18 w-full bg-white rounded-2xl py-2 shadow-xl max-h-[60vh] overflow-y-scroll animate-in fade-in slide-in-from-top-2">
                  <SearchResults items={items} onSelected={handleSelect} />
                </div>
              )}
            </div>

            <button
              onClick={handleMobileClose}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Desktop */}
      <div
        ref={ref}
        className={cn(
          "hidden md:flex p-1 rounded-full items-center gap-3 md:rounded-xl lg:rounded-2xl md:py-1 md:px-2 lg:py-2 lg:px-3 xl:px-4 xl:py-3 bg-gray-100 relative z-20 transition-all duration-500",
          isFocused && "bg-white shadow-lg ring-2 ring-primary",
        )}
      >
        <Search className="xl:w-[18px] xl:h-[18px] md:w-[16px] md:h-[16px]" />
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder="Поиск пиццы..."
          value={searchQuery}
          onFocus={handleFocus}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {items.length > 0 && isFocused && (
          <div className="absolute left-0 top-14 border w-full bg-white rounded-2xl py-2 shadow-xl animate-in fade-in slide-in-from-top-2 max-h-[500px] overflow-y-auto">
            <SearchResults items={items} onSelected={handleSelect} />
          </div>
        )}
      </div>
    </>
  );
}

export default SearchInput;
