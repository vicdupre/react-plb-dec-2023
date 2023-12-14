import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import RandomColorButton from "../components/RandomColorButton";
import Clock from "../components/Clock";
import Timer from "../components/Timer";
import usePersistedState from "../hooks/usePersistedState";
import Button from "../components/Button";

function Home() {
  const [count, setCount] = usePersistedState("counter", 0);

  const [shouldShowClock, setShouldShowClock] = useState(true);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {shouldShowClock && <Clock />}
      <Button onClick={() => setShouldShowClock((prev) => !prev)}>
        Toogle clock
      </Button>
      <Timer />
      <h1>Formation PLB</h1>
      <RandomColorButton />

      <input className="input" />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Home;
