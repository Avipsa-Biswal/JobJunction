import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const random = [1, 2, 3, 4, 5, 6, 7, 8];
const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({random.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {random.map((item, index) => {
            return <Job />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
