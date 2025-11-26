"use client";

import { cn } from "@/shared/lib/utils/cn";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { id: 0, name: "Все" },
  { id: 1, name: "Мясные" },
  { id: 2, name: "Вегетарианские" },
  { id: 3, name: "Острые" },
  { id: 4, name: "Сладкие" },
  { id: 5, name: "С курицей" },
];

const Categories = () => {
  const router = useRouter();
  const params = useSearchParams();
  const activeCategory = params?.get("category") || "0";
  const activeLabel = categories?.find(
    (cat) => String(cat.id) === activeCategory,
  );

  const onSelectCategory = (index: number) => {
    const searchParams = new URLSearchParams(params?.toString());
    if (index === 0) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", String(index));
    }
    router.push(`?${searchParams.toString()}`, { scroll: false });
  };

  const onHandleClick = (id: number) => {
    onSelectCategory(id);
  };

  return (
    <div
      className={cn(
        "w-full md:w-auto flex md:inline-flex justify-around md:gap-1 bg-gray-50 p-1 rounded-2xl overflow-x-auto hide-scrollbar",
      )}
    >
      {categories.map((cat, index) => (
        <button
          key={cat.name}
          onClick={() => onHandleClick(cat.id)}
          className={cn(
            "md:text-sm lg:text-base cursor-pointer relative px-2 py-1 md:p-2 lg:px-4 lg:py-2 flex items-center justify-center rounded-2xl transition-colors duration-300 ease-in-out outline-none select-none",
            activeLabel?.id === index ? "text-primary" : "text-black",
          )}
        >
          {activeLabel?.id === index && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white shadow-md rounded-2xl z-0"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}

          <span className="relative z-10">{cat.name}</span>
        </button>
      ))}
    </div>
  );
};
export default Categories;
