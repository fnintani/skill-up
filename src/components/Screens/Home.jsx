import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../data";
import { motion } from "framer-motion";

function Home() {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-blueMain mb-4">
            Platform e-learning terbaik untuk kamu
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Ini adalah <br />
            cara baru
            <br /> belajar online
          </div>
          <p className="text-sm leading-7 text-darktext max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            voluptatum? Perferendis assumenda deleniti dolorem aspernatur.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-limeSecondary bg-blueMain rounded-lg mr-4 text-sm">
              Mulai sekarang
            </button>
            <button className="px-6 py-3 sm:mt-3 font-bold border-[3px] border-solid border-pinkAccent rounded-lg text-sm">
              Cari tahu lebih lanjut
            </button>
          </div>
        </div>
        <div className="md:-w-[60%]">
          <img src={hero} alt="hero-image"></img>
        </div>
      </div>
      {/*logos */}
      <div>
        <p className="text-center text-xl mb-2 ">
          Kami telah berkolaborasi dengan{" "}
          <span className="text-blueMain">100+ universitas di Indonesia</span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center items-center flex-wrap p-2 gap-8"
        >
          {logos.map((logo, index) => {
            return (
              <motion.div
                variants={item}
                whileHover={{ scale: 1.1 }}
                key={index}
                className="md:w-[120px] w-[100px]"
              >
                <img src={logo} alt="logo" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
