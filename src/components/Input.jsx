function Input() {
  return (
    <div className="flex items-center h-12 gap-5 px-6 rounded-md bg-light-100 dark:bg-dark-600">
      <input
        className="w-6 h-6 border-2 rounded-full appearance-none border-light-200 dark:border-dark-500"
        type="checkbox"
        disabled
      />
      <input
        className="flex-1 bg-inherit text-light-200 placeholder:text-light-500"
        type="text"
        placeholder="Create a new todo..."
      />
      <img src="/images/icon-cross.svg" alt="" width={15} height={15} />
    </div>
  );
}

export default Input;
