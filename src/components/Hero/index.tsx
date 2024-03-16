import Image from "next/image";
import cs from "classnames";

import fullLogo from "~/assets/imgs/full-logo.svg";

import s from "./styles.module.scss";

const Hero = () => {
  return (
    <div className="container">
      <div className={cs("flex top gap-3", s.wrapper)}>
        <p className={s.bigPhrase}>The best nests...</p>
        <Image src={fullLogo} alt="Full Logo" width={300} />
        <p className={cs(s.bigPhrase, s.last)}>
          ...for the
          <br />
          best birds.
        </p>
      </div>
    </div>
  );
};

export default Hero;
