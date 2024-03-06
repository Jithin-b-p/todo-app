/* eslint-disable react/prop-types */
function Header({ handleLightMode, lightMode }) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl text-white font-bold tracking-[.5rem] leading-none">
        TODO
      </h1>
      <button onClick={handleLightMode}>
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
