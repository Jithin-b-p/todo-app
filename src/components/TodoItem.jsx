import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/* eslint-disable react/prop-types */
function TodoItem({ item, onRemove, onComplete }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className="relative flex items-center gap-3 px-5 py-4 text-xs md:py-4 md:text-lg md:gap-6 md:px-8 bg-light-100 dark:bg-dark-600 first:rounded-t-md touch-none"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <input
        id={`itemcheck-${item.id}`}
        className="absolute appearance-none peer"
        type="checkbox"
        onChange={() => onComplete(item.id)}
        checked={item.status}
        tabIndex={-1}
      />
      <label
        htmlFor={`itemcheck-${item.id}`}
        className="absolute top-[1.09rem] left-[1.33rem] md:left-[2.15rem] md:top-[1.25rem] w-[1.11rem] h-[1.11rem] md:w-[1.2rem] md:h-[1.2rem] bg-light-100 dark:bg-dark-600 cursor-pointer peer-[:checked]:invisible rounded-full peer/label"
        aria-hidden
      ></label>
      <label
        className="block w-5 h-5 md:w-6 md:h-6 bg-center bg-no-repeat 
        focus-visible:outline-dashed
        outline-dark-700 dark:outline-light-100 outline-2 outline-offset-2
        bg-light-200 dark:bg-dark-500 
        hover:bg-gradient-to-br hover:from-primaryCyan hover:to-primaryPurple p-[.1rem]
        rounded-full cursor-pointer  border-light-200 peer-[:checked]:border-none dark:border-dark-500 peer-[:checked]:bg-gradient-to-br peer-[:checked]:from-primaryCyan peer-[:checked]:to-primaryPurple
        peer-hover/label:bg-gradient-to-br
        peer-hover/label:from-primaryCyan peer-hover/label:to-primaryPurple"
        htmlFor={`itemcheck-${item.id}`}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onComplete(item.id);
          }
        }}
        tabIndex={0}
      ></label>

      <label
        htmlFor={`itemcheck-${item.id}`}
        className="absolute left-[1.56rem] top-[1.35rem] md:left-[2.45rem] md:top-[1.6rem] cursor-pointer w-3 h-3 bg-no-repeat bg-[url('/images/icon-check.svg')] invisible peer-[:checked]:visible"
        aria-hidden
      />
      <label
        htmlFor={`itemcheck-${item.id}`}
        className="cursor-pointer text-light-500 dark:text-dark-300 peer-[:checked]:line-through peer-[:checked]:text-light-400 dark:peer-[:checked]:text-dark-400"
      >
        {item.task}
      </label>
      <img
        className="ml-auto cursor-pointer focus-visible:outline-dashed outline-2 outline-offset-4 outline-light-500 dark:outline-dark-100 md:w-4"
        src="/images/icon-cross.svg"
        width={12}
        height={12}
        alt=""
        onClick={() => onRemove(item.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onRemove(item.id);
          }
        }}
        tabIndex={0}
      />
    </div>
  );
}

export default TodoItem;
