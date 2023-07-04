import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../data";

function Home() {
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
        <div className="flex justify-center items-center flex-wrap p-2 gap-8">
          {logos.map((logo, index) => {
            return (
              <div key={index} className="md:w-[120px] w-[100px]">
                <img src={logo} alt="logo" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
