import Header from "./components/Header";

import { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { pretodolist } from "./data";
import { generateRandomID } from "./components/generateId";

function App() {
  const [lightMode, setLightMode] = useState(true);

  const [inputValue, setInputValue] = useState("");

  const [todo, setTodo] = useState([...pretodolist]);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLightMode = () => {
    setLightMode((lightMode) => !lightMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleOnRemove = (itemId) => {
    setTodo((todo) => {
      return todo.filter((item) => item.id !== itemId);
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.length !== 0) {
      setTodo((todo) => [
        ...todo,
        { id: generateRandomID(), task: inputValue, status: false },
      ]);
      setInputValue("");
    }
  };

  const handleCompelete = (itemId) => {
    setTodo(
      todo.map((item) => {
        if (item.id === itemId) {
          return { ...item, status: !item.status };
        }
        return item;
      })
    );
  };

  const handleClearCompleted = () => {
    setTodo(todo.filter((item) => item.status === false));
  };

  return (
    <div className="flex justify-center items-center w-full min-h-svh bg-light-200 dark:bg-dark-700 bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] min-[376px]:bg-[url('/images/bg-desktop-light.jpg')] dark:min-[376px]:bg-[url('/images/bg-desktop-dark.jpg')] bg-no-repeat bg-top">
      <div className="flex flex-col gap-4 w-[min(88%,34rem)] pt-12">
        <Header handleLightMode={handleLightMode} lightMode={lightMode} />
        <Input
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          inputValue={inputValue}
        />
        <TodoList
          todolist={todo}
          onRemove={handleOnRemove}
          onComplete={handleCompelete}
          onClear={handleClearCompleted}
        />

        <p className="py-20 text-center text-light-400 dark:text-dark-500">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
}

export default App;
