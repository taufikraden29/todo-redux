import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTodoAsync } from "../store/slices/todoSlice";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodoAsync } from "../store/slices/todoSlice";

export default function Edit() {
  const todo = useSelector((state) => state.todoReducer.todo);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTodoAsync(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (todo) {
      setName(todo.name);
      setDescription(todo.description);
    }
  }, [todo]);

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      name,
      description,
    };

    dispatch(updateTodoAsync(id, payload));
    navigate("/");
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-20 p-14">
      <h2 className="text-4xl font-bold text-orange-400">Edit Pages</h2>
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
        <br />
        <label>Description</label>
        <br />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
          type="text"
          value={description}
          placeholder="Isi Dengan Penjelasan"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />

        <input
          type="submit"
          value="update"
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
