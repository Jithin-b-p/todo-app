/* eslint-disable react/prop-types */
import { pretodolist } from "../data";
import TodoItem from "./TodoItem";

function TodoList({ todolist }) {
  const list = [...todolist, ...pretodolist];
  return (
    <main className="overflow-hidden divide-y-[.01rem] rounded-md divide-light-200 dark:divide-dark-500">
      {list.map((item, indx) => (
        <TodoItem key={indx} item={item} indx={indx} />
      ))}
      <div className="flex items-center justify-between px-6 py-4 text-xs bg-light-100 dark:bg-dark-600 text-light-400 dark:text-dark-400">
        <p>5 items left</p>

        <p>Clear Completed</p>
      </div>
    </main>
  );
}

export default TodoList;
