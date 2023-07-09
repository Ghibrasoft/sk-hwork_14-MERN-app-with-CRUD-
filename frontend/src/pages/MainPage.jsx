import React from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

export default function MainPage() {
  return (
    <div className="flex flex-col items-center">
      <AddTodo />
      <TodoList />
    </div>
  );
}