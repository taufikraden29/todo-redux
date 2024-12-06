import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteTodoAsync, fetchTodosAsync } from "../store/slices/todoSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const todos = useSelector((state) => state.todoReducer.todos); //Import Data Todos
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodoAsync(id));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-20 p-14">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-orange-400">Todos</h2>
        <Link
          to="/create"
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
        >
          Create
        </Link>
      </div>
      <div className="flex my-5">
        <table className="table-auto w-full">
          <thead className="bg-orange-400">
            <tr>
              <th className="text-orange-50">Nama</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => (
              <tr key={item.id}>
                <td className="py-4">
                  {item.name} - {item.description}
                  <Link
                    to={`/${item.id}`}
                    className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-2 border-b-4 border-purple-700 hover:border-purple-500 rounded m-2"
                  >
                    Detail
                  </Link>
                  <Link
                    to={`/edit/${item.id}`}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-2 border-b-4 border-red-700 hover:border-red-500 rounded m-2"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="items-center">
        <p>made by ❤️</p>
      </footer>
    </div>
  );
}
