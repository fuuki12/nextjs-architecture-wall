"use client";

import React from "react";
import { Todo } from "../types";
import styles from "./TodoItem.module.scss";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  return (
    <li className={styles.todoItem}>
      <div className={styles.todoContent}>
        <label className={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className={styles.checkbox}
          />
          <span className={styles.checkmark}></span>
        </label>
        <span
          className={`${styles.todoText} ${
            todo.completed ? styles.completed : ""
          }`}
        >
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className={styles.deleteButton}
        aria-label="タスクを削除"
      >
        ✕
      </button>
    </li>
  );
};
