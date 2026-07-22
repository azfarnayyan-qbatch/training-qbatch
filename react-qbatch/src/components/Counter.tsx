import { 
  useState, 
  useEffect, 
  useMemo, 
  useRef, 
  useCallback 
} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Count how many times the component renders
  const renderCount = useRef(1);

  renderCount.current++;

  // Memoized expensive calculation
  const square = useMemo(() => {
    console.log("Calculating square...");
    return count * count;
  }, [count]);

  // Memoized handlers
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="counter">
      <h2>React Hooks Counter</h2>

      <h1>{count}</h1>

      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>

      <p>
        <strong>Square:</strong> {square}
      </p>

      <p>
        <strong>Renders:</strong> {renderCount.current}
      </p>
    </div>
  );
}

export default Counter;
