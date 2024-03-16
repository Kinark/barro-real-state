"use client";
import { useEffect } from "react";

const LockBG = () => {
  useEffect(() => {
    console.log("lamslasm")
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return <></>;
};

export default LockBG;
