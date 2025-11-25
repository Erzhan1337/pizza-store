import { ShoppingCart } from "lucide-react";
import Link from "next/link";

function CartButton() {
  return (
    <Link
      href="/"
      className="text-white bg-primary py-3 px-4 flex items-center gap-3 rounded-2xl"
    >
      <div>
        <span>2000 ₸</span>
      </div>
      <div className="w-[1px] self-stretch bg-white/50" />
      <div className="flex items-center gap-1">
        <ShoppingCart size={20} />
        <span>0</span>
      </div>
    </Link>
  );
}

export default CartButton;
