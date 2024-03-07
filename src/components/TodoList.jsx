/* eslint-disable react/prop-types */

import { useState } from "react";
import TodoItem from "./TodoItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const initalFilterState = {
  all: true,
  active: false,
  completed: false,
};

function TodoList({ todolist, onRemove, onComplete, onClear }) {
  // state to keep track of the filter preference.
  const [filterState, setFilterState] = useState(initalFilterState);
  console.log(todolist);
  // creating a new list of tasks based on the filter prefered.
  const newFilteredList = filterState.active
    ? todolist.filter((item) => item.status === false)
    : filterState.completed
    ? todolist.filter((item) => item.status === true)
    : [...todolist];

  return (
    <main className="relative divide-y-[.01rem] rounded-md divide-light-200 dark:divide-dark-500 shadow-xl">
      <SortableContext
        items={newFilteredList}
        strategy={verticalListSortingStrategy}
      >
        {newFilteredList.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onRemove={onRemove}
            onComplete={onComplete}
          />
        ))}
      </SortableContext>
      <div className="flex items-center justify-between px-6 py-4 text-xs rounded-b-md bg-light-100 dark:bg-dark-600 text-light-400 dark:text-dark-400 md:text-sm">
        <p>
          {todolist.filter((item) => item.status === false).length} items left
        </p>
        <div className="absolute md:static bottom-[-4.5rem] inset-x-0 rounded-md flex !border-t-0 gap-4 justify-center items-center px-5 md:px-0 md:py-0 py-4 text-base bg-light-100 dark:bg-dark-600 text-light-400 dark:text-dark-400">
          <span
            className={`${
              filterState.all
                ? "text-primaryBlue"
                : "hover:text-light-500 dark:hover:text-dark-100"
            } cursor-pointer transition-colors focus-visible:outline-dashed outline-2 outline-light-500 outline-offset-2 dark:outline-dark-100`}
            onClick={() => {
              setFilterState({
                ...initalFilterState,
              });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setFilterState({
                  ...initalFilterState,
                });
              }
            }}
            tabIndex={0}
          >
            All
          </span>
          <span
            className={`${
              filterState.active
                ? "text-primaryBlue"
                : "hover:text-light-500 dark:hover:text-dark-100"
            } cursor-pointer focus-visible:outline-dashed outline-2 outline-light-500 outline-offset-2 transition-colors dark:outline-dark-100`}
            onClick={() => {
              setFilterState({
                ...initalFilterState,
                all: false,
                active: true,
              });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setFilterState({
                  ...initalFilterState,
                  all: false,
                  active: true,
                });
              }
            }}
            tabIndex={0}
          >
            Active
          </span>
          <span
            className={`${
              filterState.completed
                ? "text-primaryBlue"
                : "hover:text-light-500 dark:hover:text-dark-100"
            } cursor-pointer focus-visible:outline-dashed outline-2 outline-light-500 outline-offset-2  transition-colors dark:outline-dark-100`}
            onClick={() => {
              setFilterState({
                ...initalFilterState,
                all: false,
                completed: true,
              });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setFilterState({
                  ...initalFilterState,
                  all: false,
                  completed: true,
                });
              }
            }}
            tabIndex={0}
          >
            Completed
          </span>
        </div>
        <span
          onClick={onClear}
          className="transition-colors cursor-pointer dark:hover:text-dark-100 focus-visible:outline-dashed outline-2 outline-light-500 outline-offset-2 dark:outline-dark-100 hover:text-light-50"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClear();
            }
          }}
        >
          Clear Completed
        </span>
      </div>
    </main>
  );
}

export default TodoList;
