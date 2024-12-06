import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodoAsync } from "../store/slices/todoSlice";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      name,
      description,
    };

    dispatch(createTodoAsync(payload));
    navigate("/");
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-20 p-14">
      <h2 className="text-4xl font-bold text-orange-400">Isi Todos</h2>
      <form className="my-5">
        <label>Nama</label>
        <br />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
          type="text"
          value={name}
          placeholder="Isi Dengan Nama Anda"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Description</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
          type="text"
          value={description}
          placeholder="Isi Dengan Penjelasan"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="submit"
          value="create"
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-full my-4"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
