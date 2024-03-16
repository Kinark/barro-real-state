import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

import PopupCard from "~/components/PopupCard";

import s from "./styles.module.scss";

interface CounterProps {
  icon: any;
  value: number;
  setValue: (value: number) => void;
}

const Counter = ({ icon, value, setValue }: CounterProps) => {
  function handleIncrement() {
    setValue(value + 1);
  }

  function handleDecrement() {
    if (value > 0) {
      setValue(value - 1);
    }
  }

  return (
    <PopupCard icon={icon} className={s.wrapper}>
      <FaCirclePlus onClick={handleIncrement} className={s.button} />
      <div className={s.value} style={{ width: `${value}`.length * 12 }}>
        {value}
      </div>
      <FaCircleMinus onClick={handleDecrement} className={s.button} />
    </PopupCard>
  );
};

export default Counter;
