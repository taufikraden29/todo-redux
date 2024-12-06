import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: null,
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      //   console.log(action, "<<<<");
      state.todos = action.payload;
    },
  },
});
export const { setTodos } = todoSlice.actions;

export function fetchTodoAsync() {
  fetch("http://localhost:3000/todos")
    .then((res) => {
      if (!res.ok) throw new Error("Gagal Fetch Todos");
      return res.json();
    })
    .then((data) => {
      dispatch(setTodos(data));
    })
    .catch(console.log);
}

export default todoSlice.reducer;
