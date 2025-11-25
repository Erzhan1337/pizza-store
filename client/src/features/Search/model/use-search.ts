import { useState, useMemo, useRef, useEffect } from "react";
const products = [
  {
    name: "Пеппирони",
    price: 12,
  },
  {
    name: "Гавайская",
    price: 12,
  },
];

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const close = () => {
    setIsFocused(false);
    setSearchQuery("");
    ref.current?.querySelector("input")?.blur();
  };

  useEffect(() => {
    if (!isFocused) return;

    const handleClickOutside = (event: Event) => {
      if (!ref.current) return;
      if (!ref.current.contains(event.target as Node)) {
        close();
      }
    };

    const handleScroll = () => {
      close();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("scroll", handleScroll, true);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("scroll", handleScroll, true);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFocused]);

  const items = useMemo(() => {
    if (!searchQuery) return [];
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const handleFocus = () => setIsFocused(true);

  const handleSelect = () => {
    setIsFocused(false);
    setSearchQuery("");
  };

  return {
    ref,
    isFocused,
    searchQuery,
    setSearchQuery,
    items,
    handleFocus,
    handleSelect,
  };
};
