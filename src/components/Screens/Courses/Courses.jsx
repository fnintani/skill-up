import React from "react";
import Categories from "./Categories";
import { categories, courses } from "../../../data";
import Course from "./Course";

function Courses() {
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          <span className="text-blueMain">Kategori</span> Kelas Teratas
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          tempora illo laborum ex cupiditate tenetur doloribus non velit atque
          amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
          sit! Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mt-12">
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </div>

      <div className="text-xl font-bold mt-32">Kelas terpopuler</div>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;
