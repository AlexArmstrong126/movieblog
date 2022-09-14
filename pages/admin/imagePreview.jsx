import React, { useState, useEffect } from "react";

const ImagePreview = (poster) => {
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    if (Object.values(poster)[0].length > 0) {
      // console.log(Object.values(poster)[0]);
      const str2blob = (txt) => new Blob([txt]);
      setImageUri(URL.createObjectURL(str2blob(Object.values(poster)[0])));
    }
  }, [poster]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 h-full">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-center">
        Preview
      </h3>
      {
        imageUri === null ? (
          console.log("empty")
        ) : (
          <img src={imageUri} alt="test" />
        )
        // console.log(imageUri)
      }
    </div>
  );
};

export default ImagePreview;
