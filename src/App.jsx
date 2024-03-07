import Header from "./components/Header";

import { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { pretodolist } from "./data";
import { generateRandomID } from "./generateId";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

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
    console.log("checkbox");
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

  const getTaskPosition = (id) => todo.findIndex((item) => item.id === id);

  const handleDragEnd = (event) => {
    console.log(event);
    const { active, over } = event;

    if (active.id === over.id) return;

    setTodo((todo) => {
      const originalPos = getTaskPosition(active.id);
      const newPos = getTaskPosition(over.id);

      return arrayMove(todo, originalPos, newPos);
    });
  };

  const handleDragStart = (event) => {
    console.log(event);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 250,
      },
    }),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="flex justify-center items-center w-full min-h-svh bg-light-200 dark:bg-dark-700 bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] min-[376px]:bg-[url('/images/bg-desktop-light.jpg')] dark:min-[376px]:bg-[url('/images/bg-desktop-dark.jpg')] bg-no-repeat bg-top md:pt-7">
      <div className="flex flex-col gap-4 md:gap-6 w-[min(88%,34rem)] pt-12">
        <Header handleLightMode={handleLightMode} lightMode={lightMode} />
        <Input
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          inputValue={inputValue}
        />
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <TodoList
            todolist={todo}
            onRemove={handleOnRemove}
            onComplete={handleCompelete}
            onClear={handleClearCompleted}
          />
        </DndContext>

        <p className="py-24 text-sm text-center text-light-400 dark:text-dark-500 md:py-10">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
}

export default App;
