import { useState, useMemo, useRef, useEffect } from "react";
import { useClickOutsideAndEscape } from "next/dist/next-devtools/dev-overlay/components/errors/dev-tools-indicator/utils";
import { useClickOutside } from "@/shared/lib/hook/use-click-outside";
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
  const close = () => {
    setIsFocused(false);
    setSearchQuery("");
    ref.current?.querySelector("input")?.blur();
  };

  const ref = useClickOutside({ close, isFocused });

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
