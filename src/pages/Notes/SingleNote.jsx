/* eslint-disable react/prop-types */
import {
  MdOutlinePushPin,
  MdPushPin,
  MdFavoriteBorder,
  MdFavorite,
  MdDone,
  MdDelete,
} from "react-icons/md";

const SingleNote = ({ data, setNote }) => {
  const string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aspernatur!`;
  const final = string.length > 20 ? string.slice(0, 50) + "..." : string;
  const handleFavorite = () => {
    // console.log("favoorite btn clicked of", data.id);
  };
  const handlePinned = () => {
    // console.log("pinned btn clicked of", data.id);
  };
  const handleComplete = () => {
    // console.log("complete btn clicked of", data.id);
  };
  const handleDeleted = () => {
    // console.log("complete btn clicked of", data.id);
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
            handlePinned();
          }}
          className="absolute top-0 right-0 bg-transparent rounded-full p-2"
        >
          <MdOutlinePushPin />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDeleted();
          }}
          className="absolute top-8 right-0 bg-transparent rounded-full p-2"
        >
          <MdDelete />
        </button>
      </div>
      <p className="text-sm p-3">{final}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleFavorite();
        }}
        className="absolute -left-4 bottom-0 bg-white rounded-full p-1 border border-black"
      >
        <MdFavoriteBorder />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleComplete();
        }}
        className="border border-black flex justify-center p-2 w-full  m-0 rounded-sm border-b-0 border-x-0 hover:bg-slate-100"
      >
        <MdDone />
      </button>
    </label>
  );
};

export default SingleNote;
