/** @format */

import React, { SetStateAction } from "react";
import CheckBox from "./CheckBox";
import { AiOutlineEnter } from "react-icons/ai";
import { cn } from "@/utils/cn";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  setTodoCompleted: React.Dispatch<SetStateAction<boolean>>;
  isTodoCompleted: boolean;
  isCheckBoxDisabled: boolean;
};

export default function InputBox({
  value,
  onChange,
  onSubmit,
  setTodoCompleted,
  isTodoCompleted,
  isCheckBoxDisabled
}: Props) {
  function toggleCompleted() {
    setTodoCompleted(!isTodoCompleted);
  }

  return (
    <form onSubmit={onSubmit} className="w-full relative flex items-center">
      <button
        type="button"
        disabled={isCheckBoxDisabled}
        // disabled={true}
        className="absolute  left-5 "
        onClick={toggleCompleted}
      >
        <CheckBox
          className={cn({
            "border-gray-200  dark:border-gray-700 cursor-not-allowed":
              isCheckBoxDisabled
          })}
          isCompleted={isTodoCompleted}
        />
      </button>
      <input
        value={value}
        onChange={onChange}
        className=" pl-14 shadow-sm w-full h-[50px] bg-white dark:bg-slate-800 rounded-md"
        type="text"
      />

      <button className=" absolute right-5 text-xl">
        <AiOutlineEnter />
      </button>
    </form>
  );
}
