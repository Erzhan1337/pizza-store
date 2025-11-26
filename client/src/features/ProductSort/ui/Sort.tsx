"use client";
import type { SortItem } from "@/features/ProductSort/model/types";
import { useState } from "react";
import { useClickOutside } from "@/shared/lib/hook/use-click-outside";
import {
  ArrowUpDown,
  ArrowUpWideNarrow,
  ArrowDownWideNarrow,
  Star,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const sortItems: SortItem[] = [
  { name: "по рейтингу", value: "rating", icon: <Star size={18} /> },
  {
    name: "по цене",
    value: "price_asc",
    icon: <ArrowUpWideNarrow size={18} />,
  },
  {
    name: "по цене",
    value: "price_desc",
    icon: <ArrowDownWideNarrow size={18} />,
  },
];

function SortPopup() {
  const router = useRouter();
  const params = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useClickOutside({
    close: () => setIsOpen(false),
    isFocused: isOpen,
  });
  const activeSort = params?.get("sort") || "rating";
  const activeLabel = sortItems.find((obj) => obj.value === activeSort);

  const onSelectSort = (sortValue: string) => {
    const searchParams = new URLSearchParams(params?.toString());
    searchParams.set("sort", sortValue);
    router.push(`?${searchParams.toString()}`, { scroll: false });
    setIsOpen(false);
  };
  return (
    <div ref={ref} className="hidden md:block bg-gray-100 py-2 px-3 rounded-2xl relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1 cursor-pointer"
      >
        <ArrowUpDown className="lg:w-[18px] lg:h-[18px] md:w-[16px] md:h-[16px]" />
        <p className="md:text-sm lg:text-base">Сортировка: </p>
        <span className="md:text-sm lg:text-base text-primary flex items-center">
          {activeLabel?.name} {activeLabel?.icon}
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-10 top-12 left-1 bg-gray-100 rounded-2xl w-full animate-in fade-in slide-in-from-top-2">
          <ul>
            {sortItems.map((obj) => (
              <li
                key={obj.value}
                onClick={() => onSelectSort(obj.value)}
                className={`lg:text-base md:text-sm px-4 flex items-center gap-1 py-2 hover:bg-orange-100 hover:text-primary rounded-2xl ${activeSort === obj.value ? "text-primary font-bold" : ""}`}
              >
                {obj.name} {obj.icon}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortPopup;
