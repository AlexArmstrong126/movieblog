import React from "react";
import AddReview from "./addReview";

const Admin = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="text-center  text-yellow-500 text-xl">Add A Review</div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* <div className="lg:col-span-8 col-span-1"> */}
        <AddReview />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Admin;
