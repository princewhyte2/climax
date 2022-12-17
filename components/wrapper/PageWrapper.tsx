import React, { HTMLAttributes } from "react";

type TPageProps = HTMLAttributes<HTMLDivElement>;

export default function PageWrapper({
  children,
  className,
  ...otherProps
}: TPageProps) {
  return (
    <main
      {...otherProps}
      className={`min-h-screen h-auto w-full flex flex-col  ${className}`}>
      {children}
    </main>
  );
}
