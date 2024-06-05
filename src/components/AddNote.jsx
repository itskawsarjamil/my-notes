/* eslint-disable react/prop-types */
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  MdOutlinePushPin,
  MdFavoriteBorder,
  MdFavorite,
  MdClose,
} from "react-icons/md";
import { LuPin } from "react-icons/lu";

const AddNote = ({ setAllNotes, setshowForm }) => {
  // const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    isCompleted: false,
    isFav: false,
    isPinned: false,
    isDeleted: false,
    createdAt: new Date(),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlePinned = () => {
    console.log("pin btnclicked");

    setFormData((prevState) => {
      return {
        ...prevState,
        isPinned: !prevState.isPinned,
      };
    });
  };
  const handleFav = () => {
    console.log("fav btnclicked");
    setFormData((prevState) => {
      return {
        ...prevState,
        isFav: !prevState.isFav,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sendDatatoDB();

    setshowForm(false);
  };
  const sendDatatoDB = async () => {
    // console.log(recipes);
    console.log(formData);
    const fetchResponse = await fetch(
      "https://my-notes-server.vercel.app/addnote",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await fetchResponse.json();
    setAllNotes(data);
    // console.log(data);
  };
  const categories = ["easy", "medium", "hard"];
  return (
    <div className="border p-6 rounded-md shadow-md relative">
      <button onClick={() => setshowForm(false)}>
        <MdClose />
      </button>
      <form onSubmit={handleSubmit} className="">
        <div className="flex justify-between items-center">
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input
            onChange={handleChange}
            name="title"
            id="title"
            type="text"
            placeholder="Enter Title"
            className="border p-2 m-2 rounded-md w-3/4"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="description" className="font-semibold">
            description
          </label>
          <input
            onChange={handleChange}
            name="description"
            id="description"
            type="text"
            placeholder="Enter description"
            className="border p-2 m-2 rounded-md w-3/4"
          />
          {/* <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="bg-transparent p-2 m-2 rounded-lg w-3/4 text-black"
          ></ReactQuill> */}
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="category" className="font-semibold">
            Select Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="border w-2/3 p-1 rounded-md me-3"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-around">
          <button
            className="border border-black p-1 rounded-md w-3/4 mx-auto mt-4 "
            type="submit"
          >
            Post
          </button>
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleFav();
            }}
            className="border border-black p-1 rounded-md  mt-4 me-2"
          >
            {formData.isFav === true ? <MdFavorite /> : <MdFavoriteBorder />}
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              handlePinned();
            }}
            className={`border border-black p-1 rounded-md  mt-4 ${
              formData.isPinned === true
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {formData.isPinned === true ? <LuPin /> : <MdOutlinePushPin />}
          </div>
        </div>
      </form>
    </div>
  );
};
AddNote.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    // ["link", "image", "video"],
    // ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
AddNote.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  //   "link",
  //   "image",
  //   "video",
];

/*
 * PropType validation
 */
AddNote.propTypes = {
  placeholder: PropTypes.string,
};
export default AddNote;
