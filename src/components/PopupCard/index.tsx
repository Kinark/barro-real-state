import { useState } from "react";
import cs from "classnames";
import Lottie, { Options } from "react-lottie";
import { Squircle } from "@squircle-js/react";

import s from "./styles.module.scss";

interface PopupCardProps {
  icon: any;
  children: React.ReactNode;
  className?: string;
}

const PopupCard = ({ icon, children, className }: PopupCardProps) => {
  const [isStopped, setIsStopped] = useState(true);

  function onMouseEnter() {
    if (isStopped) {
      setIsStopped(false);
    }
  }

  const defaultLottieOptions: Options = {
    loop: false,
    autoplay: false,
    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Squircle
      cornerRadius={16}
      cornerSmoothing={1}
      className={cs("flex center gap-1-half", s.wrapper, className)}
      onMouseEnter={onMouseEnter}
    >
      <Lottie
        options={defaultLottieOptions}
        height={46}
        width={46}
        isStopped={isStopped}
        isPaused={false}
        eventListeners={[
          {
            eventName: "complete",
            callback: () => setIsStopped(true),
          },
        ]}
      />
      {children}
    </Squircle>
  );
};

export default PopupCard;
