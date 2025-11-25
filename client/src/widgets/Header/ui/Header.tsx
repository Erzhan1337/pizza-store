import Image from "next/image";
import SearchInput from "@/features/Search/ui/SearchInput";
import Link from "next/link";
import AuthButton from "@/features/auth/ui/AuthButton";
import CartButton from "@/features/Cart/ui/CartButton";
import { Container } from "@/shared/ui/Container";

function Header() {
  return (
    <header className="border-b border-gray-200">
      <Container className="flex items-center justify-between py-8">
        {/*Logo*/}
        <Link href="/" className="flex gap-3 items-center">
          <Image
            src="https://res.cloudinary.com/dgtya5crt/image/upload/v1763979378/logo_xkghxv.png"
            alt="Logo"
            width={45}
            height={45}
            className="w-[45px] h-[45px]"
          />
          <div>
            <h1 className="font-black text-2xl">ДОДО ПИЦЦА</h1>
            <p className="text-gray-500 tracking-[0.1em]">вкусней уже некуда</p>
          </div>
        </Link>
        {/*Search*/}
        <div className="flex-1 max-w-[700px]">
          <SearchInput />
        </div>
        {/*Actions*/}
        <div className="flex items-center gap-2">
          <AuthButton />
          <CartButton />
        </div>
      </Container>
    </header>
  );
}

export default Header;
