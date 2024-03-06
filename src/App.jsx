import Header from "./components/Header";

import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [lightMode, setLightMode] = useState(true);

  const handleLightMode = () => {
    setLightMode((lightMode) => !lightMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex justify-center items-center w-full min-h-svh bg-light-200 dark:bg-dark-700 bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] min-[375px]:bg-[url('/images/bg-desktop-light.jpg')] dark:min-[375px]:bg-[url('/images/bg-desktop-dark.jpg')] bg-no-repeat bg-top">
      <div className="flex flex-col gap-6 w-[min(88%,34rem)]">
        <Header handleLightMode={handleLightMode} lightMode={lightMode} />
        <Input />
      </div>
    </div>
  );
}

export default App;
