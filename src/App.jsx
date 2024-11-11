import React, { useMemo, useState } from "react";
import User from "./user";
// import Qube from "./qube";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const d = (num) => {
    console.log("function call");
    return Math.pow(num, 3);
  };
  // const result = d(number);
  // useMemo(()=>{
  //   return d(number)
  // },[number])

  const result = useMemo(() => {
    return d(number);
  }, [number]);

  function h() {
    console.log("bbbb");
  }

  return (
    <div>
      <h1>usememo</h1>
      <h1>{count}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={() => setCount((pre) => pre + 1)}>click</button>

      <User a={h} />
      {/* <Qube /> */}
    </div>
  );
}

export default App;
