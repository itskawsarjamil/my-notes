import { useEffect, useState } from "react";
import SingleNote from "../Notes/SingleNote";
import CustomModal from "../../components/modal";
import PrivateRoutes from "../../routes/PrivateRoutes";
import AddNote from "../../components/AddNote";

import { CiMenuFries } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";

const MyNotes = () => {
  const [showForm, setshowForm] = useState(false);
  const [note, setNote] = useState(null);
  const [allNotes, setAllNotes] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const value = data.slice(0, 10);
        // console.log(value);
        setAllNotes(value);
      });
  }, []);
  return (
    <div>
      <div className="border  w-3/4 mx-auto my-5 flex justify-between items-center px-4">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden  text-center"
        >
          <CiMenuFries />
        </label>
        <input
          className="m-3 ms-6  w-full"
          type="text"
          placeholder="search note"
        />

        <select
          name="filter"
          id="filter"
          className="border"
          // onChange={}
          required
        >
          <option value="">Select Filter</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      {!showForm ? (
        <div
          onClick={() => setshowForm(true)}
          className="border  w-2/4 mx-auto my-5 flex justify-center p-2 rounded-lg items-center px-4"
        >
          <IoAdd />
        </div>
      ) : (
        <div className="mb-10 max-w-xl mx-auto">
          <AddNote setshowForm={setshowForm} />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allNotes.map((note) => (
          <SingleNote key={note.id} data={note} setNote={setNote} />
        ))}
      </div>
      {note && (
        <PrivateRoutes>
          <CustomModal data={note} setNote={setNote} />
        </PrivateRoutes>
      )}
    </div>
  );
};

export default MyNotes;
