import React from 'react'
import teacher1 from "../../assets/teacher1.jpg"
import teacher2 from "../../assets/teacher2.jpg"

function Teacher() {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold text-[1.875rem] sm:text-[1.5rem]">
            Bergabung menjadi <span className="text-blueMain">instruktur</span> <br/>
            platform kami
          </div>
          <p className="text-sm leading-7 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugiat.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quam rerum nemo rem doloribus dolores excepturi assumenda repellat similique natus!
          </p>
          <button className="font-bold mt-5 py-4 px-3 bg-blueMain rounded-lg text-sm">
            Mulai mengajar
          </button>
        </div>
          <div className="p-4 md:w-3/4 sm:row-start-1">
            <img src={teacher1} alt="" />
          </div>
          <div className="pl-5">
          <div className="font-bold text-[1.875rem] sm:text-[1.5rem]">
            Bergabung menjadi <span className="text-blueMain">instruktur</span> <br/>
            platform kami
          </div>
          <p className="text-sm leading-7 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugiat.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quam rerum nemo rem doloribus dolores excepturi assumenda repellat similique natus!
          </p>
          <button className="font-bold mt-5 py-4 px-3 bg-pinkAccent text-limeSecondary rounded-lg text-sm">
            Cari tahu lebih lanjut
          </button>
        </div>
          <div className="p-4 md:w-3/4">
            <img src={teacher2} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Teacher