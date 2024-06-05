/* eslint-disable react/prop-types */
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import PropTypes from "prop-types";
import { useState } from "react";
import { LuPin } from "react-icons/lu";
import {
  MdOutlinePushPin,
  // MdPushPin,
  MdFavoriteBorder,
  MdCancel,
  MdFavorite,
  // MdFavorite,
  // MdDone,
} from "react-icons/md";
const CustomModal = ({ data, setNote }) => {
  // const [value, setValue] = useState("");
  const [formData, setFormData] = useState(data);
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    func();
    location.reload();
    // const finaldata2 = allNotes.filter((note) => note._id !== data._id);
    // const finaldata = [formData, ...finaldata2];
    // await setAllNotes(finaldata);
    setNote(null);
  };

  // const findOne = async () => {
  //   console.log("inside findone");
  //   const fetchResponse = await fetch(`https://my-notes-server.vercel.app/note/${data._id}`);
  //   const data = await fetchResponse.json();
  //   return data;
  // };
  const func = async () => {
    const fetchResponse = await fetch(
      `https://my-notes-server.vercel.app/note/${data._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    await fetchResponse.json();
  };
  const categories = ["easy", "medium", "hard"];
  // const { title, description, category, isCompleted, isFav, isPinned } = data;
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box relative">
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
                  name="title"
                  onChange={handleChange}
                  defaultValue={formData.title}
                  placeholder="Enter Title"
                  className="border p-2 m-2 rounded-md w-3/4"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="description" className="font-semibold">
                  description
                </label>
                <input
                  name="description"
                  onChange={handleChange}
                  defaultValue={formData.description}
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
                  defaultValue={formData.category}
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
                <div
                  className="border border-black p-1 rounded-md  mt-4 me-2 "
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFav();
                  }}
                >
                  {formData.isFav === true ? (
                    <MdFavorite />
                  ) : (
                    <MdFavoriteBorder />
                  )}
                </div>
                <div
                  className={`border border-black p-1 rounded-md  mt-4 ${
                    formData.isPinned === true
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePinned();
                  }}
                >
                  {formData.isPinned === true ? (
                    <LuPin />
                  ) : (
                    <MdOutlinePushPin />
                  )}
                </div>
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
