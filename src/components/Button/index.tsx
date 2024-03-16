import { Squircle } from "@squircle-js/react";
import cs from "classnames";
import pepperSans from "~/assets/fonts/PeppersSansFamily/pepperSans";

import s from "./styles.module.scss";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ label, type = "button", onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={cs(s.button, pepperSans.className)}>
      <Squircle cornerRadius={16} cornerSmoothing={1}>
        {label}
      </Squircle>
    </button>
  );
};

export default Button;
