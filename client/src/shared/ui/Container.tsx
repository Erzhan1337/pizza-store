import React from "react";
import { cn } from "@/shared/lib/cn";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <div className={cn("mx-auto max-w-[1280px]", className)}>{children}</div>
  );
};
