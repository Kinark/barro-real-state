"use client";
import { useRouter } from "next/navigation";

import s from "./page.module.scss";

export default function DimmedBG() {
  const router = useRouter();
  return <div className={s.dimmedBG} onClick={() => router.push("/")} />;
}
