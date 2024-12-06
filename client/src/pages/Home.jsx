import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodoAsync } from "../store/slices/todoSlice";

export default function Home() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  console.log(todos, "<<<<< ini todos");

  useEffect(() => {
    // dispatch(fetchTodoAsync());
  }, [dispatch]);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
