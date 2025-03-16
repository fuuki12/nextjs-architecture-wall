"use client";

import React, { useState } from "react";
import { NewTodo } from "../types";
import styles from "./TodoForm.module.scss";

interface TodoFormProps {
  onAdd: (todo: NewTodo) => Promise<unknown>;
  loading: boolean;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd, loading }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError("タスク名を入力してください");
      return;
    }

    if (trimmedTitle.length < 3) {
      setError("タスク名は3文字以上で入力してください");
      return;
    }

    if (trimmedTitle.length > 100) {
      setError("タスク名は100文字以内で入力してください");
      return;
    }

    try {
      await onAdd({ title: trimmedTitle });
      setTitle("");
      setError(null);
    } catch (error) {
      setError("タスクの追加に失敗しました");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError(null);
          }}
          placeholder="新しいタスクを入力..."
          disabled={loading}
          className={styles.input}
          data-testid="todo-input"
        />
        <button
          type="submit"
          disabled={loading}
          className={styles.addButton}
          data-testid="add-todo-button"
        >
          {loading ? "追加中..." : "追加"}
        </button>
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
    </form>
  );
};
