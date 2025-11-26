import { ResultProps } from "@/features/Search/model/types";
import Link from "next/link";
import Image from "next/image";

function SearchResults({ items, onSelected }: ResultProps) {
  return (
    <div className="flex flex-col px-4 hover:bg-primary/5 transition-all duration-300">
      {items.map((item) => (
        <Link
          href="/"
          key={item.name}
          onClick={onSelected}
          className="flex items-center gap-3"
        >
          <Image
            src="https://res.cloudinary.com/dgtya5crt/image/upload/v1763979378/logo_xkghxv.png"
            alt={item.name}
            width={35}
            height={35}
          />
          <span>{item.name}</span>
          <span className="ml-10 text-gray-500">{item.price} ₸</span>
        </Link>
      ))}
    </div>
  );
}

export default SearchResults;
