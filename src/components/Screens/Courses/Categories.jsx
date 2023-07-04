import React from "react";

const Categories = ({ icon, category }) => {
  return (
    <div className="flex items-center flex-col gap-4 bg-limeSecondary p-8 rounded-md">
      <div className="text-4xl text-Teal">{icon}</div>
      <div>{category}</div>
      <a href="" className="text-sm text-pinkAccent">
        lihat lebih lanjut...
      </a>
    </div>
  );
};

export default Categories;
