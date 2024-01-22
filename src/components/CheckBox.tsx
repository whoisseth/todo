/** @format */

import { cn } from "@/utils/cn";
import React from "react";
import { FaCheck } from "react-icons/fa6";

type Props = {
  className?: string;
  isCompleted?: boolean;
};

export default function CheckBox({ className, isCompleted }: Props) {
  return (
    <div
      className={cn(
        "h-5 w-5 cursor-pointer  min-h-5 min-w-5  border rounded-full flex items-center justify-center  text-white text-center",
        {
          "bg-gradient-to-t  from-[hsl(280,87%,65%)] to-[hsl(192,100%,67%)]":
            isCompleted
        },
        className
      )}
    >
      {isCompleted && <FaCheck className="text-sm" />}
    </div>
  );
}
