import Image from "next/image";
import SearchInput from "@/features/Search/ui/SearchInput";
import Link from "next/link";
import AuthButton from "@/features/auth/ui/AuthButton";
import CartButton from "@/features/Cart/ui/CartButton";
import { Container } from "@/shared/ui/container";

function Header() {
  return (
    <header className="border-b border-gray-200">
      <Container className="flex items-center xl:gap-10 lg:gap-5 md:gap-3 justify-between md:py-8 py-5">
        {/*Logo*/}
        <Link href="/" className="flex gap-3 items-center">
          <Image
            src="https://res.cloudinary.com/dgtya5crt/image/upload/v1763979378/logo_xkghxv.png"
            alt="Logo"
            width={45}
            height={45}
            className="xl:w-[45px] xl:h-[45px] lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px]"
          />
          <div className="md:block hidden">
            <h1 className="font-black xl:text-2xl lg:text-xl md:text-base">
              ДОДО ПИЦЦА
            </h1>
            <p className="text-gray-500 xl:text-base lg:text-sm md:text-xs xl:tracking-[0.1em] md:tracking-[0.05em] ">
              вкусней уже некуда
            </p>
          </div>
        </Link>
        {/*Search*/}
        <div className="md:flex-1 md:max-w-[700px] md:block hidden">
          <SearchInput />
        </div>
        {/*Actions*/}
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <SearchInput />
          </div>
          <AuthButton />
          <CartButton />
        </div>
      </Container>
    </header>
  );
}

export default Header;
