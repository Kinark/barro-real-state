import { Squircle } from "@squircle-js/react";
import Image from "next/image";
import cs from "classnames";

import joaoDeBarroPic from "~/assets/imgs/joao-de-barro.webp";

import s from "./styles.module.scss";

const JoaoDeBarro = () => {
return (
   <div className={cs("flex center gap-6", s.wrapper)}>
      <Image
         className={s.picture}
         src={joaoDeBarroPic}
         alt="João de Barro picture"
         width={300}
         height={300}
      />
      <div className="flex col left">
         <h3 className={s.title}>João de Barro</h3>
         <p className={s.description}>
            The joão-de-barro is a bird that builds its nest with mud and straw.
            The nest is so well built that it can withstand the weight of a person
            stepping on it. The bird lives in the south of Brazil, mainly in the
            cerrado and caatinga biomes.
         </p>
      </div>
   </div>
);
};

export default JoaoDeBarro;
