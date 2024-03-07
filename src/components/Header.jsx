/* eslint-disable react/prop-types */
function Header({ handleLightMode, lightMode }) {
  return (
    <header className="flex items-center justify-between mb-5 md:mb-6">
      <h1 className="text-2xl md:text-4xl text-light-100 font-bold tracking-[0.8rem] leading-none md:tracking-[1.2rem] cursor-not-allowed">
        TODO
      </h1>
      <button
        className="focus-visible:outline-dotted outline-4 outline-offset-4 outline-dark-700 dark:outline-light-100"
        onClick={handleLightMode}
        aria-label={`${lightMode ? "Dark mode" : "Light mode"}`}
      >
        {lightMode ? (
          <img
            className="transition-all"
            src="/images/icon-moon.svg"
            alt=""
            width={20}
            height={25}
          />
        ) : (
          <img
            className="transition-all"
            src="/images/icon-sun.svg"
            alt=""
            width={25}
            height={25}
          />
        )}
      </button>
    </header>
  );
}

export default Header;
