import React, { HTMLAttributes, ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLButtonElement>["className"];
};

export default function ContainerWrapper({
  children,
  className,
}: TContainerProps) {
  return (
    <section
      className={`container overflow-x-clip p-[20px] h-full w-full max-w-[1300px]  m-auto  ${className}`}>
      {children}
    </section>
  );
}
