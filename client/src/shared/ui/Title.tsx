import { cn } from "@/shared/lib/utils/cn";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

const sizeMap: Record<TitleSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

function Title({
  text,
  size,
  className,
}: {
  text: string;
  size: TitleSize;
  className?: string;
}) {
  return <p className={cn("font-bold", sizeMap[size], className)}>{text}</p>;
}

export default Title;
