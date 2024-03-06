/* eslint-disable react/prop-types */
function TodoItem({ item, indx }) {
  return (
    <div className="flex items-center gap-3 px-5 py-4 text-xs bg-light-100 dark:bg-dark-600">
      <label className="sr-only" htmlFor={`itemcheck-${indx}`}>
        list item checked
      </label>
      <label
        className="block relative w-5 h-5 bg-center bg-no-repeat 
        bg-light-200 dark:bg-dark-500 
        hover:bg-gradient-to-br hover:from-primaryCyan hover:to-primaryPurple p-[.1rem]
        rounded-full cursor-pointer  border-light-200 has-[:checked]:border-none dark:border-dark-500 has-[:checked]:bg-gradient-to-br has-[:checked]:from-primaryCyan has-[:checked]:to-primaryPurple"
        htmlFor={`itemcheck-${indx}`}
      >
        <input
          id={`itemcheck-${indx}`}
          className="appearance-none peer"
          type="checkbox"
        />
        <div className="absolute top-[0.12rem] left-[0.11rem] w-[85%] h-[85%] bg-light-100 dark:bg-dark-600 peer-[:checked]:invisible rounded-full"></div>

        <img
          className="absolute left-[0.3rem] top-[0.4rem] cursor-pointer invisible peer-[:checked]:visible"
          src="/images/icon-check.svg"
          alt=""
        />
      </label>
      <label
        htmlFor={`itemcheck-${indx}`}
        className="cursor-pointer text-light-600 dark:text-dark-300"
      >
        {item}
      </label>
      <img
        className="ml-auto"
        src="/images/icon-cross.svg"
        width={12}
        height={12}
        alt=""
      />
    </div>
  );
}

export default TodoItem;
