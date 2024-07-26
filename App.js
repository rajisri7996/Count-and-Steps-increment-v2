import { useState } from "react";
import "./App.css";

function App() {
  return <DateCounterV2 />;
}
function DateCounterV2() {
  const currDate = new Date();
  const [val, setVal] = useState(1);
  const [btnIncDec, setBtnIncDec] = useState(0);
  currDate.setDate(currDate.getDate() + btnIncDec);
  function handleClickInc() {
    setBtnIncDec((s) => s + Number(val));
  }
  function handleClickDec() {
    setBtnIncDec((s) => s - Number(val));
  }
  function handleReset() {
    setBtnIncDec(0);
    setVal(1);
  }

  return (
    <div className="datev2">
      <input
        type="range"
        min="0"
        max="10"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          console.log(e.target.value);
        }}
      />
      {val}
      <div className="increment">
        <button onClick={handleClickInc}>+</button>
        <input
          type="text"
          value={btnIncDec}
          // onChange={(e) => setBtnIncDec(Number(e.target.value))}
        />
        <button onClick={handleClickDec}>-</button>
      </div>
      <p>
        {btnIncDec === 0
          ? "Today"
          : btnIncDec > 0
          ? `${btnIncDec} days from Today`
          : `${Math.abs(btnIncDec)} days Ago`}{" "}
        is "{currDate.toDateString()}"
      </p>
      {(val > 1 || btnIncDec > 0) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}

export default App;
