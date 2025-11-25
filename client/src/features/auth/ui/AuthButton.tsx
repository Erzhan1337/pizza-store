import { UserRound } from "lucide-react";
import Link from "next/link";

function AuthButton() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-primary border border-primary rounded-2xl p-3"
    >
      <UserRound size={18} />
      <p>Войти</p>
    </Link>
  );
}

export default AuthButton;
