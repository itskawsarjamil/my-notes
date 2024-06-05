/* eslint-disable react/prop-types */
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import PropTypes from "prop-types";
import { useState } from "react";
import {
  MdOutlinePushPin,
  // MdPushPin,
  MdFavoriteBorder,
  MdCancel,
  // MdFavorite,
  // MdDone,
} from "react-icons/md";
const CustomModal = ({ data, setNote }) => {
  // const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    title: data.title,
    description: data.description,
    category: data.category,
    isCompleted: data.isCompleted,
    isFav: data.isFav,
    isPinned: data.isPinned,
    isDeleted: data.isDeleted,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const categories = ["easy", "medium", "hard"];
  //   console.log(data);
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box relative">
          {/* <h3 className="font-bold text-lg">{data.title}</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          */}
          <div
            className="border p-6 rounded-md"
            style={{
              boxShadow:
                "box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
            }}
          >
            <label
              htmlFor="my_modal_6"
              className="w-10 h-10 rounded-full p-1 bg-transparent top-0 right-0 text-3xl absolute"
            >
              <MdCancel />
            </label>
            <form onSubmit={handleSubmit} className="">
              <div className="flex justify-between items-center">
                <label htmlFor="title" className="font-semibold">
                  Title
                </label>
                <input
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
                <label htmlFor="description" className="font-semibold">
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
              <div className="flex justify-around ">
                <button
                  onClick={() => {
                    // setNote(null);
                  }}
                  className="modal-action border border-black p-1 rounded-md w-3/4 mx-auto mt-4 text-center"
                >
                  <p className="w-full mx-auto ">Post!</p>
                  {/* <label htmlFor="my_modal_6" className="w-full mx-auto ">
                    close!
                  </label> */}
                </button>
                <button className="border border-black p-1 rounded-md  mt-4 me-2 ">
                  <MdFavoriteBorder />
                </button>
                <button className="border border-black p-1 rounded-md  mt-4 ">
                  <MdOutlinePushPin />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// CustomModal.modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }, { font: [] }],
//     [{ size: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" },
//     ],
//     // ["link", "image", "video"],
//     // ["clean"],
//   ],
//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: false,
//   },
// };
// /*
//  * Quill editor formats
//  * See https://quilljs.com/docs/formats/
//  */
// CustomModal.formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   //   "link",
//   //   "image",
//   //   "video",
// ];

// /*
//  * PropType validation
//  */
// CustomModal.propTypes = {
//   placeholder: PropTypes.string,
// };
export default CustomModal;
