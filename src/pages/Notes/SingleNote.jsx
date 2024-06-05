/* eslint-disable react/prop-types */
import {
  MdOutlinePushPin,
  MdFavoriteBorder,
  MdFavorite,
  MdDone,
  MdDelete,
} from "react-icons/md";
import { LuPin } from "react-icons/lu";
import { useEffect, useState } from "react";

const SingleNote = ({ data, setNote, setAllNotes }) => {
  const [modifiedData, setModifiedData] = useState(data);
  // const [count, setcount] = useState(0);
  let string = "";
  string =
    data.description.length > 50
      ? data.description.slice(0, 50) + "..."
      : data.description;
  const handlePinned = () => {
    // setcount((count) => count + 1);
    console.log("pin btnclicked");

    setModifiedData((prevState) => {
      return {
        ...prevState,
        isPinned: !prevState.isPinned,
      };
    });
  };
  const handleFav = () => {
    // setcount((count) => count + 1);
    console.log("fav btnclicked");
    setModifiedData((prevState) => {
      return {
        ...prevState,
        isFav: !prevState.isFav,
      };
    });
  };
  const handleComplete = () => {
    // setcount((count) => count + 1);
    console.log("complete btnclicked");
    setModifiedData((prevState) => {
      return {
        ...prevState,
        isCompleted: !prevState.isCompleted,
      };
    });
  };
  const handleDeleted = (id) => {
    // setcount((count) => count + 1);
    console.log("delete btnclicked");
    // if (window.confirm("are you sure?")) {
    setModifiedData((prevState) => {
      // console.log("111");
      return {
        ...prevState,
        isDeleted: true,
      };
    });
    // }
    setAllNotes((prevState) => {
      const finaldata = prevState.filter((note) => note._id !== id);
      return finaldata;
    });
    deleteFunc();
  };

  useEffect(() => {
    const func = async () => {
      const fetchResponse = await fetch(
        `http://localhost:5001/note/${modifiedData._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(modifiedData),
        }
      );
      await fetchResponse.json();
    };
    func();
  }, [modifiedData]);
  const deleteFunc = async () => {
    await fetch(`http://localhost:5001/note/${modifiedData._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    //   <label  className="btn">open modal</label>

    <label
      htmlFor="my_modal_6"
      onClick={() => {
        // console.log("note clicked of", data.id);
        setNote(data);
      }}
      className="hover:cursor-pointer text-xl  text-black pt-5 pb-0  border-2 border-slate-500 bg-slate-50 relative mx-5 rounded-md"
      // [clip - path: polygon(0 % _0 %, _100 % _0 %, _100 % _100 %, _5 % _100 %, _0_70 %)]
      //   style={{ backgroundColor: bgColor }}
    >
      <div className="border-b-2 border-black flex justify-center items-center m-2 mx-8">
        {data.title}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleFav();
          }}
          className="absolute top-0 right-0 bg-transparent rounded-full p-2"
        >
          {modifiedData.isFav === true ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDeleted(data._id);
          }}
          className="absolute top-8 right-0 bg-transparent rounded-full p-2"
        >
          <MdDelete />
        </button>
      </div>
      <p className="text-sm p-3">{string}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePinned();
        }}
        className={`absolute -left-4 bottom-0  rounded-full p-1 border border-black ${
          modifiedData.isPinned === true
            ? "bg-black text-white"
            : "bg-white text-black"
        }`}
      >
        {modifiedData.isPinned === true ? <LuPin /> : <MdOutlinePushPin />}
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleComplete();
        }}
        className={`border border-black flex justify-center p-2 w-full  m-0 rounded-sm border-b-0 border-x-0 hover:bg-slate-100 ${
          modifiedData.isCompleted ? "bg-slate-300" : "bg-transparent"
        }`}
      >
        {modifiedData.isCompleted === false ? <MdDone /> : "In Progress.."}
      </button>
    </label>
  );
};

export default SingleNote;
