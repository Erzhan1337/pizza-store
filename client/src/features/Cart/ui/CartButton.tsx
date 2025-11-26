import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

function CartButton() {
  return (
    <Link
      href="/"
      className="text-white bg-primary xl:py-3 xl:px-4 lg:py-2 lg:px-3 px-2 py-1 flex items-center gap-2 xl:gap-3 lg:rounded-2xl rounded-lg group"
    >
      <div>
        <span className="xl:text-base text-sm">2000 ₸</span>
      </div>
      <div className="w-[1px] self-stretch bg-white/50" />
      <div className="flex items-center overflow-hidden relative">
        <ArrowRight className="absolute -left-5 group-hover:left-2 transition-all duration-500" />
        <div className="flex items-center gap-1 group-hover:opacity-0 transition-all duration-500">
          <ShoppingCart className="xl:w-[20px] xl:h-[20px] w-[16px] h-[16px]" />
          <span className="xl:text-base md:text-sm">0</span>
        </div>
      </div>
    </Link>
  );
}

export default CartButton;
