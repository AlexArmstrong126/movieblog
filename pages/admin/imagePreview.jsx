import React, { useState, useEffect } from "react";

const ImagePreview = (poster) => {
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  useEffect(() => {
    if (Object.values(poster)[0] !== "") {
      setImageUrl(Object.values(poster)[0].imagePreview);
    }
  }, [poster]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 h-full">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-center">
        Image Preview
      </h3>
      <img src={imageUrl} alt={imageUrl} id="img" className=" rounded-md" />
    </div>
  );
};

export default ImagePreview;
