"use client";

import React from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { useTodos } from "../hooks/useTodos";
import styles from "./TodoContainer.module.scss";

export const TodoContainer: React.FC = () => {
  const {
    todos,
    loading,
    error,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
  } = useTodos();

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}>タスク管理</h1>
        <p className={styles.subtitle}>
          やることを管理して生産性を高めましょう
        </p>
      </div>

      <TodoForm onAdd={addTodo} loading={loading} />

      {error && (
        <div className={styles.error}>
          <p>{error.message}</p>
          <button onClick={() => window.location.reload()}>再読み込み</button>
        </div>
      )}

      <TodoList
        todos={todos}
        filter={filter}
        onFilterChange={setFilter}
        onToggle={toggleTodo}
        onDelete={removeTodo}
        loading={loading}
      />
    </div>
  );
};
