/* eslint-disable react/prop-types */
function TodoItem({ item, indx, onRemove }) {
  return (
    <div className="relative flex items-center gap-3 px-5 py-4 text-xs bg-light-100 dark:bg-dark-600 first:rounded-t-md">
      <input
        id={`itemcheck-${indx}`}
        className="absolute appearance-none peer"
        type="checkbox"
      />
      <label
        htmlFor={`itemcheck-${indx}`}
        className="absolute top-[1.09rem] left-[1.33rem] w-[1.11rem] h-[1.11rem] bg-light-100 dark:bg-dark-600 cursor-pointer peer-[:checked]:invisible rounded-full peer/label"
        aria-hidden
      ></label>
      <label
        className="block w-5 h-5 bg-center bg-no-repeat 
        bg-light-200 dark:bg-dark-500 
        hover:bg-gradient-to-br hover:from-primaryCyan hover:to-primaryPurple p-[.1rem]
        rounded-full cursor-pointer  border-light-200 peer-[:checked]:border-none dark:border-dark-500 peer-[:checked]:bg-gradient-to-br peer-[:checked]:from-primaryCyan peer-[:checked]:to-primaryPurple
        peer-hover/label:bg-gradient-to-br
        peer-hover/label:from-primaryCyan peer-hover/label:to-primaryPurple"
        htmlFor={`itemcheck-${indx}`}
        aria-hidden
      ></label>

      <label
        htmlFor={`itemcheck-${indx}`}
        className="absolute left-[1.56rem] top-[1.35rem] cursor-pointer w-3 h-3 bg-no-repeat bg-[url('/images/icon-check.svg')] invisible peer-[:checked]:visible"
        aria-hidden
      />

      <label
        htmlFor={`itemcheck-${indx}`}
        className="cursor-pointer text-light-600 dark:text-dark-300"
      >
        {item}
      </label>
      <img
        className="ml-auto cursor-pointer"
        src="/images/icon-cross.svg"
        width={12}
        height={12}
        alt=""
        onClick={() => onRemove(indx)}
      />
    </div>
  );
}

export default TodoItem;
