/* eslint-disable @next/next/no-img-element */
import cs from "classnames";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Squircle } from "@squircle-js/react";
import { FaLocationArrow } from "react-icons/fa";

import fixForBirds from "~/utils/fixForBirds";
import bedIcon from "~/assets/lottie/static/bed.svg";
import garageIcon from "~/assets/lottie/static/garage.svg";
import toiletIcon from "~/assets/lottie/static/toilet.svg";

import s from "./styles.module.scss";

export interface Home {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  "Sale Price": number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
}

interface HomeLinkProps {
  home: Home;
  style?: React.CSSProperties;
}

const HomeLink = ({ home, style }: HomeLinkProps) => (
  <motion.div
    layout="position"
    initial={{ opacity: 0, scale: 0.1 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05, rotate: -3 }}
    whileTap={{ scale: 1 }}
    exit={{ opacity: 0, scale: 0.1 }}
    className={s.priceReferenceWrapper}
    style={style}
  >
    <Link href={`/house/${home.Id}`}>
      <Squircle
        cornerRadius={24}
        cornerSmoothing={1}
        className={cs(s.wrapper, "flex gap-2")}
      >
        <Squircle
          cornerRadius={12}
          cornerSmoothing={1}
          className={s.imgSquircle}
        >
          <img
            src={home.ThumbnailURL}
            alt={home.Title}
            width={150}
            height={150}
          />
        </Squircle>
        <div className={cs(s.body, "flex col left")}>
          <div className={s.title}>{fixForBirds(home.Title.toLowerCase())}</div>
          <div className="flex center gap-1">
            <div className="flex center gap-1-half">
              <Image src={bedIcon} width={22} height={22} alt="Bed icon" />
              <div>{home.Bedrooms}</div>
            </div>
            <div className="flex center gap-1-half">
              <Image
                src={toiletIcon}
                width={22}
                height={22}
                alt="Toilet icon"
              />
              <div>{home.Bathrooms}</div>
            </div>
            <div className="flex center gap-1-half">
              <Image
                src={garageIcon}
                width={22}
                height={22}
                alt="Garage icon"
              />
              <div>{home.Parking}</div>
            </div>
          </div>
          <div className={cs(s.price, "flex center gap-1")}>
            <div>U${home["Sale Price"].toLocaleString()}</div>
          </div>
        </div>
      </Squircle>
      <Squircle
        cornerRadius={24}
        cornerSmoothing={1}
        className={cs(s.tag, "flex gap-1")}
      >
        <FaLocationArrow />
        <div>{home.Location}</div>
      </Squircle>
    </Link>
  </motion.div>
);

export default HomeLink;


