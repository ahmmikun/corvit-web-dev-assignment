import Title from "./components/Title";
import Counter from "./components/Counter";
import Reset from "./components/Reset";
import CounterButton from "./components/CounterButton";
import { useState } from "react";

export default function App() {
  const [count, setCount]= useState(0);
  return(
    <>
    <main>
      <div className="card">
    <Title />
    <Counter count={count} setCount={setCount}/>
    <Reset setCount={setCount} />
    <CounterButton count={count} setCount={setCount} />
      </div>
    </main>
    </>
  )
}