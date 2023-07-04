import React from "react";
import about from "../../assets/about.jpg";

function About() {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-blueMain border-solid rounded-lg">
          <img src={about} alt="about picture" className="p-4"></img>
        </div>
        <div>
          <div className="font-bold mb-5 sm:text-[1.875rem] text-[1.5rem]">
            Kami menyediakan <br />
            <span className="text-blueMain">Kelas online terbaik</span>
          </div>
          <p className="text-darkText leading-7 text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            animi atque ab eum quasi veritatis dolorem aperiam magni et quidem!
          </p>

          <button className="border-[3px] border-pinkAccent border-solid py-3 px-6 text-sm rounded-lg font-bold">
            Baca lebih lanjut
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
