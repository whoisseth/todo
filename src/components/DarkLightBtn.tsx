/** @format */

"use client";

import { useTheme } from "next-themes";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { useAutoAnimate } from "@formkit/auto-animate/react";
type Props = {};

export default function DarkLightBtn({}: Props) {
  const [animationParent] = useAutoAnimate();
  const { theme, setTheme, resolvedTheme } = useTheme();

  function toggleTheme() {
    if (resolvedTheme === "light") setTheme("dark");
    if (resolvedTheme === "dark") setTheme("light");
  }

  return (
    <button
      ref={animationParent}
      className="text-3xl text-white"
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? <FaMoon /> : <IoSunny />}
    </button>
  );
}
