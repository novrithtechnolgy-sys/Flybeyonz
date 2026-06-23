import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-[20px] sm:px-6 lg:px-8 2xl:px-28",
        className
      )}
    >
      {children}
    </div>
  );
}