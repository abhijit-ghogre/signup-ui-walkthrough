import React from "react";
import { cn } from "~/utils";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  className?: string;
  type?: string;
}

function Input(props: Props) {
  const { name, placeholder, className, type = "text", label } = props;
  return (
    <label>
      <div className={"text-[16px]"}>{label}</div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={cn(
          "mt-[7px] h-[48px] w-full rounded-[6px] border border-[#C1C1C1] px-[16px]",
          className,
        )}
      />
    </label>
  );
}

export default Input;
