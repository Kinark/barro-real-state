import { Squircle } from "@squircle-js/react";
import cs from "classnames";

import pepperSans from "~/assets/fonts/PeppersSansFamily/pepperSans";

import s from "./styles.module.scss";

interface CommonInputProps {
  label: string;
  placeholder: string;
  value: string;
  required?: boolean;
}

interface InputProps extends CommonInputProps {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  placeholder,
  type,
  value,
  required = false,
  onChange,
}: InputProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.label}>{label}</div>
      <Squircle
        cornerRadius={16}
        cornerSmoothing={1}
        className={cs(s.inputWrapper, "flex col left")}
      >
        <input
          required={required}
          className={pepperSans.className}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Squircle>
    </div>
  );
};

interface TextAreaProps extends CommonInputProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  label,
  required = false,
  placeholder,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.label}>{label}</div>
      <Squircle
        cornerRadius={16}
        cornerSmoothing={1}
        className={cs(s.inputWrapper, "flex col left")}
      >
        <textarea
          required={required}
          className={pepperSans.className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Squircle>
    </div>
  );
};

export default Input;
