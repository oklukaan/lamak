"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={theme === "dark" ? { backgroundColor: "white",transition: "background-color 0.5s ease", } : { backgroundColor: "#0f172a",transition: "background-color 0.5s ease", } }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={theme === "dark"? { left: 1, background: "#0f172a",transition: "left 0.5s ease, right 0.5s ease, background 0.5s ease", }: { right: 1, background: "white",transition: "left 0.5s ease, right 0.5s ease, background 0.5s ease", }}
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
