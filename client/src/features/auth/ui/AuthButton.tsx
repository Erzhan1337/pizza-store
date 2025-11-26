import { UserRound } from "lucide-react";
import Link from "next/link";

function AuthButton() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-primary border border-primary rounded-lg lg:rounded-2xl xl:p-3 lg:p-2 p-1"
    >
      <UserRound className="xl:w-[18px] xl:h-[18px] w-[16px] h-[16px]" />
      <p className="xl:text-base text-sm">Войти</p>
    </Link>
  );
}

export default AuthButton;
