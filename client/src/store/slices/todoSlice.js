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
      state.todos = action.payload;
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});
export const { setTodos, setTodo } = todoSlice.actions; //Distruk

export function fetchTodosAsync() {
  return (dispatch) => {
    fetch("http://localhost:3000/todos")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal Fetch Todos");

        return res.json();
      })
      .then((data) => {
        dispatch(setTodos(data));
      })
      .catch(console.log);
  };
}

export function fetchTodoAsync(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/todos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal Masuk Om!");
        return res.json();
      })
      .then((data) => {
        dispatch(setTodo(data));
      })
      .catch(console.log);
  };
}

export function createTodoAsync(payload) {
  return (dispatch) => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Gagal Menambahkan Data");
        return res.json();
      })
      .then((data) => {
        console.log(data, "Data Baru");
      })
      .catch(console.log);
  };
}

export default todoSlice.reducer;
