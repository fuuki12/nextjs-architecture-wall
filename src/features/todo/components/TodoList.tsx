"use client";

import React from "react";
import { TodoItem } from "./TodoItem";
import { Todo, TodosFilter } from "../types";
import styles from "./TodoList.module.scss";

interface TodoListProps {
  todos: Todo[];
  filter: TodosFilter;
  onFilterChange: (filter: TodosFilter) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  loading: boolean;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  filter,
  onFilterChange,
  onToggle,
  onDelete,
  loading,
}) => {
  const activeTodos = todos.filter((todo) => !todo.completed).length;
  const completedTodos = todos.length - activeTodos;

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.filters}>
        <button
          className={`${styles.filterButton} ${
            filter === "all" ? styles.active : ""
          }`}
          onClick={() => onFilterChange("all")}
        >
          全て ({todos.length})
        </button>
        <button
          className={`${styles.filterButton} ${
            filter === "active" ? styles.active : ""
          }`}
          onClick={() => onFilterChange("active")}
        >
          未完了 ({activeTodos})
        </button>
        <button
          className={`${styles.filterButton} ${
            filter === "completed" ? styles.active : ""
          }`}
          onClick={() => onFilterChange("completed")}
        >
          完了済 ({completedTodos})
        </button>
      </div>

      {loading ? (
        <div className={styles.loader}>読み込み中...</div>
      ) : todos.length === 0 ? (
        <div className={styles.emptyState}>
          {filter === "all"
            ? "タスクがありません。新しいタスクを追加してください。"
            : filter === "active"
            ? "未完了のタスクはありません。"
            : "完了済みのタスクはありません。"}
        </div>
      ) : (
        <ul className={styles.todoList}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
