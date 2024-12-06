import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodoAsync } from "../store/slices/todoSlice";
import { useParams } from "react-router-dom";

export default function Detail() {
  const todo = useSelector((state) => state.todoReducer.todo);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTodoAsync(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>Detail Page</h2>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
    </div>
  );
}
