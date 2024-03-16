"use client";
import { useState } from "react";
import { LayoutGroup, AnimatePresence, motion } from "framer-motion";

import bedIcon from "~/assets/lottie/bed.json";
import garageIcon from "~/assets/lottie/garage.json";
import toiletIcon from "~/assets/lottie/toilet.json";
import moneyIcon from "~/assets/lottie/money.json";
import housesDB from "~/assets/mock-data/housesDB.json";
import useDebouncedUseMemo from "~/utils/useDebouncedUseMemo";
import HomeLink, { Home } from "~/components/HomeLink";

import Counter from "./components/Counter";
import Slider from "./components/Slider";
import s from "./styles.module.scss";

const typedHousesDB = housesDB as Home[];

const NestsSearcher = () => {
  const [beds, setBeds] = useState(0);
  const [garages, setGarages] = useState(0);
  const [toilets, setToilets] = useState(0);
  const [price, setPrice] = useState(300000);

  const filteredHouses = useDebouncedUseMemo(
    () =>
      typedHousesDB.filter(
        (house) =>
          house.Bedrooms >= beds &&
          house.Parking >= garages &&
          house.Bathrooms >= toilets &&
          house["Sale Price"] <= price,
      ),
    [beds, garages, toilets, price],
    300,
  );

  return (
    <div className="flex col center container gap-1">
      <div className="flex center gap-1-half">
        <Counter icon={bedIcon} value={beds} setValue={setBeds} />
        <Counter icon={garageIcon} value={garages} setValue={setGarages} />
        <Counter icon={toiletIcon} value={toilets} setValue={setToilets} />
        <Slider
          icon={moneyIcon}
          min={300000}
          max={900000}
          step={10000}
          value={price}
          setValue={setPrice}
          label="Price limit"
          labelSuffix="U$"
        />
      </div>
      <hr className="dashedDivider" />
      <motion.div layout="size" className="flex center gap-3 wraps">
        <LayoutGroup>
          <AnimatePresence>
            {(filteredHouses ?? []).map((house, i) => (
              <HomeLink
                key={house.Id}
                style={{ zIndex: typedHousesDB.length - i }}
                home={house}
              />
            ))}
          </AnimatePresence>
        </LayoutGroup>
      </motion.div>
    </div>
  );
};

export default NestsSearcher;
