import { useEffect, useRef } from "react";

export const useClickOutside = ({
  close,
  isFocused,
}: {
  close: () => void;
  isFocused: boolean;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
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
  }, [isFocused, close]);
  return ref;
};
