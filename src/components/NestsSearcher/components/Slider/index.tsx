import PopupCard from "~/components/PopupCard";

import s from "./styles.module.scss";

interface Props {
  icon: any;
  value: number;
  label: string;
  min: number;
  max: number;
  step: number;
  labelSuffix?: String;
  setValue: (value: number) => void;
}

const Slider = ({
  icon,
  value,
  label,
  setValue,
  min,
  max,
  labelSuffix,
  step,
}: Props) => {
  return (
    <PopupCard icon={icon}>
      <div className="flex col left">
        <div className={s.label}>{label}</div>
        <div className="flex center gap-1-half">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            className={s.slider}
            onChange={(e) => setValue(parseInt(e.target.value))}
          />
          <div
            className={s.value}
            style={{
              width: (`${value}`.length + (labelSuffix?.length ?? 0)) * 12,
            }}
          >
            {value.toLocaleString()}
            {labelSuffix}
          </div>
        </div>
      </div>
    </PopupCard>
  );
};

export default Slider;
