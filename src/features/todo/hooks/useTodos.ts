"use client";

import { useState, useEffect, useCallback } from "react";
import { Todo, NewTodo, TodosFilter } from "../types";
import {
  fetchTodos,
  createTodo,
  toggleTodoStatus,
  deleteTodo,
} from "../api/todoApi";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [filter, setFilter] = useState<TodosFilter>("all");

  const loadTodos = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Unknown error occurred")
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const addTodo = useCallback(async (newTodo: NewTodo) => {
    try {
      setLoading(true);
      const todo = await createTodo(newTodo);
      setTodos((prev) => [...prev, todo]);
      return todo;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to create todo"));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleTodo = useCallback(
    async (id: string) => {
      try {
        const todo = todos.find((t) => t.id === id);
        if (!todo) return;

        const updatedTodo = await toggleTodoStatus(id, !todo.completed);
        setTodos((prev) => prev.map((t) => (t.id === id ? updatedTodo : t)));
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to update todo")
        );
      }
    },
    [todos]
  );

  const removeTodo = useCallback(async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to delete todo"));
    }
  }, []);

  const filteredTodos = useCallback(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return {
    todos: filteredTodos(),
    loading,
    error,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
    refreshTodos: loadTodos,
  };
};
