/** @format */

import React, { SetStateAction } from "react";
import CheckBox from "./CheckBox";
import { cn } from "@/utils/cn";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TodoType } from "@/app/page";

type Props = {
  setTextValue: React.Dispatch<SetStateAction<string>>;
  d: TodoType;
  editModeId: number | null;
  className?: string;
  text: string;
  isCompleted: boolean;
  deleteTodo: (id: number) => void;
  handleIsTodoCompleted: (todo: TodoType) => void;
  //
  textValue: string;
  saveEditTodo: () => void;
  editTodo: (id: number) => void;
};

export default function SingleTodo({
  className,
  text,
  isCompleted,
  deleteTodo,
  handleIsTodoCompleted,
  d,
  setTextValue,
  textValue,
  saveEditTodo,
  editTodo,
  editModeId
}: Props) {
  return (
    <div
      className={cn(
        " border-b dark:border-slate-500  px-5 w-full  h-[50px] flex items-center gap-3 ",
        " ",
        className
      )}
    >
      <button onClick={() => handleIsTodoCompleted(d)}>
        <CheckBox isCompleted={isCompleted} />
      </button>
      <div className="flex w-full h-full justify-between items-center">
        {/*  */}

        {editModeId === d.id ? (
          <>
            <input
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              type="text"
              className=" bg-inherit outline-none w-full h-full px-4"
            />
            <button
              onClick={saveEditTodo}
              className="bg-green-400 text-white rounded-md px-4 py-2"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <p
              className={cn("    text-gray-600 ", {
                "line-through": isCompleted
              })}
            >
              {text}
            </p>

            <div className=" flex gap-2 items-center text-xl ">
              <MdEdit
                onClick={() => editTodo(d.id)}
                className="cursor-pointer dark:text-white"
              />
              <MdDelete
                onClick={() => deleteTodo(d.id)}
                className="cursor-pointer text-red-500"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
