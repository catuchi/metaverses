"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title={"| People on the World"} textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />
        <div className="absolute lg:bottom-[19%] bottom-[35%] lg:right-[11%] right-[7%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute lg:top-[8%] top-[22%] max-xs:hidden lg:left-[13%] left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute max-sm:hidden top-1/3 left-[20%] w-[200px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img
            src="upside_down_map.png"
            alt="place"
            className="w-full h-full rounded-[24px]"
          />
          <div className="absolute bottom-0 right-0 justify-start w-full flex-col rounded-b-[24px]">
            <div className="flex flex-row mx-6 items-center gap-2">
              <div className="flex flex-row">
                <img
                  src="people-04.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-40"
                />
                <img
                  src="people-05.png"
                  alt="people"
                  className="w-[24px] h-[24px] -ml-[13px] z-30"
                />
                <img
                  src="people-06.png"
                  alt="people"
                  className="w-[24px] h-[24px] -ml-[13px] z-20"
                />
              </div>
              <p className="font-normal text-[12px] leading-[15px] text-white">
                + 264 has joined
              </p>
            </div>
            <h2
              className={`mt-[8px] mb-[24px] font-bold md:text-[18px] text-[16px] md:leading-[22px] leading-[20px] text-white mx-6`}
            >
              The Upside Down
            </h2>
          </div>
        </div>
        <div className="absolute max-sm:hidden top-[10%] right-[20%] w-[200px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img
            src="hawkins_lab_map.png"
            alt="place"
            className="w-full h-full rounded-[24px]"
          />
          <div className="absolute bottom-0 right-0 justify-start w-full flex-col rounded-b-[24px]">
            <div className="flex flex-row mx-6 items-center gap-2">
              <div className="flex flex-row">
                <img
                  src="people-04.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-40"
                />
                <img
                  src="people-05.png"
                  alt="people"
                  className="w-[24px] h-[24px] -ml-[13px] z-30"
                />
                <img
                  src="people-06.png"
                  alt="people"
                  className="w-[24px] h-[24px] -ml-[13px] z-20"
                />
              </div>
              <p className="font-normal text-[12px] leading-[15px] text-white">
                + 264 has joined
              </p>
            </div>
            <h2
              className={`mt-[8px] mb-[24px] font-bold md:text-[18px] text-[16px] md:leading-[22px] leading-[20px] text-white mx-6`}
            >
              Hawkins Labs
            </h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
