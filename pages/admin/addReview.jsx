import React, { useState, useEffect } from "react";
import { getCategories } from "../../services";
import ImagePreview from "./imagePreview";
const AddReview = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    image: "",
    title: "",
    score: 0,
    excerpt: "",
    content: "",
    featured: true,
    author: "Alex Armstrong",
  });

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setFormData({ ...formData, featured: !formData.featured });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="lg:col-span-8 col-span-1">
        <form>
          <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
              Add A Review
            </h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <select
                className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                name="category"
                defaultValue={""}
                onChange={handleChange}
                required
              >
                <option
                  className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer"
                  value=""
                  disabled
                >
                  Select your option
                </option>
                {categories.map((category) => (
                  <option
                    key={category.name}
                    className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer"
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                type="file"
                placeholder="Movie Poster"
                name="image"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <input
                // type="text"
                className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                //   ref={nameEl}
                placeholder="Movie Title"
                name="title"
                onChange={handleChange}
              />
              <input
                type="number"
                className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                //   ref={emailEl}
                placeholder="Score /10"
                name="score"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <textarea
                //   ref={commentEl}
                className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                placeholder="Excerpt"
                name="excerpt"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <textarea
                //   ref={commentEl}
                className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                placeholder="Review"
                name="content"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <input
                  // ref={storeDataEl}
                  type="checkbox"
                  id="storeData"
                  name="featured"
                  onChange={handleCheck}
                  value={formData.featured}
                  checked={formData.featured}
                />
                <label
                  className="text-grey-500 cursor-pointer ml-2"
                  htmlFor="storeData"
                >
                  Featured Post?
                </label>
              </div>
            </div>
            {error && (
              <p className="text-xs text-red-500">All fields are required</p>
            )}
            <div className="mt-8">
              <button
                type="button"
                onClick={handleSubmit}
                className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
              >
                Post Review
              </button>
              {showSuccessMessage && (
                <span className="text-xl float-right font-semibold mt-3 text-green-500">
                  Review Submitted to be Published
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <ImagePreview poster={formData.image} />
        </div>
      </div>
    </>
  );
};

export default AddReview;
