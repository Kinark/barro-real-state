/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import cs from "classnames";
import Image from "next/image";
import { Squircle } from "@squircle-js/react";

import { FaLocationArrow } from "react-icons/fa";

import fixForBirds from "~/utils/fixForBirds";
import housesDB from "~/assets/mock-data/housesDB.json";
import bedIcon from "~/assets/lottie/static/bed.svg";
import garageIcon from "~/assets/lottie/static/garage.svg";
import toiletIcon from "~/assets/lottie/static/toilet.svg";
import { Home } from "~/components/HomeLink";
import ContactForm from "~/components/ContactForm";

import s from "./page.module.scss";
import DimmedBG from "./DimmedBG";
import LockBG from "./LockBG";

const typedHousesDB = housesDB as Home[];

export default function Page({ params }: { params: { slug: string } }) {
  const home = typedHousesDB.find((h) => h.Id === +params.slug);

  return home ? (
    <div className={s.wrapper}>
      <Suspense fallback={<div className={s.dimmedBG} />}>
        <DimmedBG />
        <LockBG />
      </Suspense>

      <div className={cs(s.cardsWrapper, "flex top gap-3-half")}>
        <Squircle cornerRadius={32} cornerSmoothing={1} className={cs(s.card)}>
          <div className="flex col left gap-2">
            <Squircle
              cornerRadius={16}
              cornerSmoothing={1}
              className={s.imgSquircle}
            >
              <img src={home.PictureURL} alt={home.Title} />
            </Squircle>
            <div className={cs(s.body, "flex col left")}>
              <div className={s.title}>
                {fixForBirds(home.Title.toLowerCase())}
              </div>
              <div className={s.location}>{home.Location}</div>
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
              <p>{fixForBirds(home.Description)}</p>
              <div className={cs(s.price, "flex center gap-1")}>
                <div>U${home["Sale Price"].toLocaleString()}</div>
              </div>
            </div>
          </div>
        </Squircle>
        <Suspense fallback={<div className={s.contactForm} />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  ) : (
    <div>404</div>
  );
}
