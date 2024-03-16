import Lottie, { Options } from "react-lottie";

interface LottieProps {
  icon: any;
  size: number;
}

const StillLottieIcon = ({ icon, size }: LottieProps) => {
  const defaultLottieOptions: Options = {
    loop: false,
    autoplay: false,
    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      options={defaultLottieOptions}
      height={size}
      width={size}
      isStopped={true}
      isPaused={true}
    />
  );
};

export default StillLottieIcon;
