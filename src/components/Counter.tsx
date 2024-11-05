import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <section>
      <h1>Counter Page</h1>
      <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
    </section>
  );
}

export default Counter;
