import React, { FC } from "react";
import { TodoItemProps } from "../types/types";

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div style={{ padding: 15, border: "1px solid gray" }}>
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;
