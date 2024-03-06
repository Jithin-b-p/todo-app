/* eslint-disable react/prop-types */

function Input({ onChange, onKeyDown, inputValue }) {
  return (
    <div className="flex items-center h-12 gap-3 px-5 rounded-md bg-light-100 dark:bg-dark-600">
      <input
        className="w-5 h-5 border-2 rounded-full appearance-none border-light-200 dark:border-dark-500"
        type="checkbox"
        disabled
        aria-hidden
      />
      <input
        className="flex-1 text-sm bg-inherit text-dark-400 dark:text-light-200 placeholder:text-light-400 dark:placeholder:text-dark-300 placeholder:text-xs focus-visible:outline-dotted focus-visible:outline-2 
        focus-visible:outline-light-500
        dark:focus-visible:outline-dark-200
        focus-visible:outline-offset-[5px]"
        type="text"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default Input;
