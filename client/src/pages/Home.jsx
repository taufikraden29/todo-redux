import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodosAsync } from "../store/slices/todoSlice";
import { Link } from "react-router-dom";

export default function Home() {
  const todos = useSelector((state) => state.todoReducer.todos); //Import Data Todos
  const dispatch = useDispatch();

  console.log(todos, "<<<<< ini todos");
  // console.log(fetchTodoAsync);
  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-20 p-14">
      <div className="flex space-x-8">
        <h2 className="text-4xl font-bold text-orange-400">Todos</h2>
        <Link
          to="/create"
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
        >
          Create
        </Link>
      </div>
      <div className="my-4">
        <table className="table-auto">
          <thead className="bg-orange-400">
            <tr>
              <th className="text-orange-50">Nama</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.name} - <Link to={`/${item.id}`}>/detail</Link> |
                  <Link
                    to={`/edit/${item.id}`}
                    className="bg-blue-600 text-white"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
