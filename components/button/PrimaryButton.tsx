import React, { HTMLAttributes, ReactNode } from "react";

type TButtonProps = HTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  children,
  className,
  ...otherProps
}: TButtonProps) {
  return (
    <button
      {...otherProps}
      className={`primary-btn bg-[#17B657] text-white py-3 px-[40px]  rounded-lg hover:bg-[#0a873c] text-[14px] transition-colors ${className}`}>
      {children}
    </button>
  );
}
