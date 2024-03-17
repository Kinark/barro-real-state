"use client";
import { useState } from "react";
import Lottie, { Options } from "react-lottie";
import { motion, AnimatePresence } from "framer-motion";
import { Squircle } from "@squircle-js/react";

import envelopeIcon from "~/assets/lottie/envelope.json";
import checkIcon from "~/assets/lottie/check.json";
import Input, { TextArea } from "~/components/Input";
import Button from "~/components/Button";

import s from "./styles.module.scss";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comments, setComments] = useState("");
  const [sent, setSent] = useState(false);
  const defaultEnvelopeLottieOptions: Options = {
    loop: false,
    autoplay: true,
    animationData: envelopeIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultCheckLottieOptions: Options = {
    loop: false,
    autoplay: true,
    animationData: checkIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({
      fullName,
      email,
      phoneNumber,
      comments,
    });
    setSent(true);
  }
  return (
    <motion.div
      layout="size"
      className={s.wrapper}
      style={{ borderRadius: 32, overflow: "hidden" }}
    >
      <Squircle cornerRadius={32} cornerSmoothing={1} className={s.contactForm}>
        <motion.div layout="size">
          <AnimatePresence>
            {sent ? (
              <motion.div
                key="sent"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                className={s.sent}
              >
                <Lottie
                  options={defaultCheckLottieOptions}
                  height={46}
                  width={46}
                  isStopped={false}
                  isPaused={false}
                />
                <h1>Thanks for reaching out!</h1>
                <p>We&apos;ll pew back to you as soon as we can</p>
                <Button
                  label="Send another pew!"
                  onClick={() => setSent(false)}
                />
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submitForm}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0, zIndex: -1 }}
                className="flex col left gap-1"
              >
                <div className="flex center gap-1-half">
                  <Lottie
                    options={defaultEnvelopeLottieOptions}
                    height={46}
                    width={46}
                    isStopped={false}
                    isPaused={false}
                  />
                  <h1>Get in touch!</h1>
                </div>
                <Input
                  required
                  label="Name"
                  placeholder="Your name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <Input
                  required
                  label="Email"
                  placeholder="email@something.com"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  required
                  label="Phone number"
                  placeholder="(xxx) xxx-xxxx"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextArea
                  required
                  label="Message"
                  placeholder="Pew pew! Pew poo pew?"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
                <Button type="submit" label="Send" />
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </Squircle>
    </motion.div>
  );
};

export default ContactForm;
