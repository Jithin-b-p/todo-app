import Header from "./components/Header";

import { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [lightMode, setLightMode] = useState(true);

  const [inputValue, setInputValue] = useState("");

  const [todo, setTodo] = useState([]);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLightMode = () => {
    setLightMode((lightMode) => !lightMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setTodo((todo) => [...todo, inputValue]);
      setInputValue("");
    }
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
        <TodoList todolist={todo} />
      </div>
    </div>
  );
}

export default App;
