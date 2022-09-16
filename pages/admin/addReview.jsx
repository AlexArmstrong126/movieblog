import React, { useState, useEffect, useRef } from "react";
import { getCategories } from "../../services";
import { submitReview } from "../../services";
import ImagePreview from "./imagePreview";
const AddReview = () => {
  const titleEl = useRef();
  const slugEl = useRef();
  const excerptEl = useRef();
  const featuredImageEl = useRef();
  const featuredPostEl = useRef();
  const authorEl = useRef("Alex Armstrong");
  const categoriesEl = useRef();
  const scoreEl = useRef();
  const contentEl = useRef();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [featuredPostSubmit, setFeaturedPostSubmit] = useState(false);

  const [formData, setFormData] = useState({
    image: "",
  });
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    let path = e.target.value;
    let fileName = path.replace(/^C:\\fakepath\\/, "");
    // setFormData({ ...formData, [e.target.name]: fileName });

    setImagePreview({
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleCheck = (e) => {
    setFormData({ ...formData, featured: !formData.featured });
  };

  const checkHandler = () => {
    setFeaturedPostSubmit((current) => !current);
    console.log(typeof featuredPostSubmit);
  };

  const handleSubmit = (evt) => {
    const featuredPost = featuredPostSubmit;
    const { value: title } = titleEl.current;
    const { value: slug } = slugEl.current;
    const { value: excerpt } = excerptEl.current;
    // const { value: featuredImage } = featuredImageEl.current;
    const { value: content } = contentEl.current;
    const { value: author } = authorEl.current;
    const { value: categories } = categoriesEl.current;
    var score = parseInt(scoreEl.current.value);
    evt.preventDefault();
    // console.log(title);

    const reviewObj = {
      title,
      excerpt,
      slug,
      content,
      featuredPost,
      // author,
      categories,
      score,
    };

    console.log(reviewObj);

    submitReview(reviewObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      // console.log(res);
    });
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
                ref={categoriesEl}
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
                onChange={handleImageChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                //   ref={commentEl}
                className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                placeholder="Page Link"
                name="slug"
                ref={slugEl}
                // onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <input
                // type="text"
                className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                ref={titleEl}
                placeholder="Movie Title"
                name="title"
                // onChange={handleChange}
              />
              <input
                type="number"
                className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                //   ref={emailEl}
                placeholder="Score /10"
                name="score"
                ref={scoreEl}
                max={10}
                min={0}
                // onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <textarea
                className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                placeholder="Excerpt"
                name="excerpt"
                // onChange={handleChange}
                ref={excerptEl}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <textarea
                //   ref={commentEl}
                className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                placeholder="Review"
                name="content"
                ref={contentEl}
                // onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <input
                  onChange={checkHandler}
                  type="checkbox"
                  id="storeData"
                  name="featured"
                  checked={featuredPostSubmit}
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
          <ImagePreview poster={imagePreview} />
        </div>
      </div>
    </>
  );
};

export default AddReview;
