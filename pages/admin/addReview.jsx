import React, { useState, useEffect } from "react";
import { getCategories } from "../../services";
const AddReview = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    title: null,
    image: null,
    excerpt: null,
    content: null,
    featured: false,
    author: "Alex Armstrong",
  });
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Add A Review</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <select className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700">
          <option
            className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer"
            value=""
            disabled
            selected
          >
            Select your option
          </option>
          {categories.map((category) => (
            <option className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              {category.name}
            </option>
          ))}
        </select>
        <input
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          type="search"
          placeholder="Review Category"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          type="search"
          placeholder="Movie Poster"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          //   ref={nameEl}
          placeholder="Movie Title"
          name="title"
        />
        <input
          type="number"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          //   ref={emailEl}
          placeholder="Score /10"
          name="score"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          //   ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Excerpt"
          name="review"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          //   ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Review"
          name="review"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            // ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-grey-500 cursor-pointer ml-2"
            htmlFor="storeData"
          >
            Featured Post?
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p>}
      <div className="mt-8">
        <button
          type="button"
          //   onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comments
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comment Submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default AddReview;
