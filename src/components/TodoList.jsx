/* eslint-disable react/prop-types */

import { useState } from "react";
import { pretodolist } from "../data";
import TodoItem from "./TodoItem";

const initalFilterState = {
  all: true,
  active: false,
  completed: false,
};

function TodoList({ todolist, onRemove }) {
  const list = [...todolist, ...pretodolist];

  const [filterState, setFilterState] = useState(initalFilterState);

  return (
    <main className="relative divide-y-[.01rem] rounded-md divide-light-200 dark:divide-dark-500">
      {list.map((item, indx) => (
        <TodoItem key={indx} item={item} indx={indx} onRemove={onRemove} />
      ))}
      <div className="flex items-center justify-between px-6 py-4 text-xs rounded-b-md bg-light-100 dark:bg-dark-600 text-light-400 dark:text-dark-400">
        <p>{10 - list.length} items left</p>
        <p className="cursor-pointer dark:hover:text-dark-100">
          Clear Completed
        </p>
      </div>
      <div className="absolute bottom-[-4.5rem] inset-x-0 rounded-md flex !border-t-0 gap-4 justify-center items-center px-5 py-4 text-md bg-light-100 dark:bg-dark-600 text-light-400 dark:text-dark-400">
        <span
          className={`${
            filterState.all
              ? "text-primaryBlue"
              : "hover:text-light-500 dark:hover:text-dark-100"
          } cursor-pointer`}
          onClick={() => {
            setFilterState({
              ...initalFilterState,
            });
          }}
        >
          All
        </span>
        <span
          className={`${
            filterState.active
              ? "text-primaryBlue"
              : "hover:text-light-500 dark:hover:text-dark-100"
          } cursor-pointer`}
          onClick={() => {
            setFilterState({
              ...initalFilterState,
              all: false,
              active: true,
            });
          }}
        >
          Active
        </span>
        <span
          className={`${
            filterState.completed
              ? "text-primaryBlue"
              : "hover:text-light-500 dark:hover:text-dark-100"
          } cursor-pointer`}
          onClick={() => {
            setFilterState({
              ...initalFilterState,
              all: false,
              completed: true,
            });
          }}
        >
          Completed
        </span>
      </div>
    </main>
  );
}

export default TodoList;
