import { Todo, NewTodo } from "../types";

// モック用のデータ
const MOCK_TODOS: Todo[] = [
  {
    id: "1",
    title: "Next.jsの学習",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Reactコンポーネントの実装",
    completed: true,
    createdAt: new Date().toISOString(),
  },
];

/**
 * Todo一覧を取得する
 */
export const fetchTodos = async (): Promise<Todo[]> => {
  // 実際のアプリケーションではfetchを使ってAPIから取得
  // この例ではモックデータを返す
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...MOCK_TODOS]);
    }, 500);
  });
};

/**
 * 新しいTodoを作成する
 */
export const createTodo = async (newTodo: NewTodo): Promise<Todo> => {
  const todo: Todo = {
    id: Math.random().toString(36).substring(2, 9),
    title: newTodo.title,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  // 実際のアプリケーションではfetchを使ってAPIにPOST
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todo);
    }, 500);
  });
};

/**
 * Todoのステータスを更新する
 */
export const toggleTodoStatus = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  // 実際のアプリケーションではfetchを使ってAPIにPATCH/PUT
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todo = MOCK_TODOS.find((t) => t.id === id);
      if (todo) {
        const updatedTodo = { ...todo, completed };
        resolve(updatedTodo);
      } else {
        reject(new Error("Todo not found"));
      }
    }, 500);
  });
};

/**
 * Todoを削除する
 */
export const deleteTodo = async (id: string): Promise<void> => {
  // 実際のアプリケーションではfetchを使ってAPIにDELETE
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todoIndex = MOCK_TODOS.findIndex((t) => t.id === id);
      if (todoIndex !== -1) {
        resolve();
      } else {
        reject(new Error("Todo not found"));
      }
    }, 500);
  });
};
