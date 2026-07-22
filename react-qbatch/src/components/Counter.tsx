import { 
  useState, 
  useMemo, 
  useRef, 
  useCallback } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../shad-ui/components/ui/card";

import { Button } from "../../shad-ui/components/ui/button";
import { Separator } from "../../shad-ui/components/ui/separator";

function Counter() {
  const [count, setCount] = useState(0);

  const renderCount = useRef(1);
  renderCount.current++;

  const square = useMemo(() => {
    console.log("Calculating square...");
    return count * count;
  }, [count]);

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
    <Card className="mt-10 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          ⚛️ React Hooks Counter
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-6 text-center text-6xl font-bold text-primary">
          {count}
        </div>

        <div className="mb-8 flex justify-center gap-4">
          <Button variant="destructive" onClick={decrement}>
            −
          </Button>

          <Button variant="secondary" onClick={reset}>
            Reset
          </Button>

          <Button onClick={increment}>+</Button>
        </div>

        <Separator className="mb-6" />

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="py-6 text-center">
              <p className="text-sm text-muted-foreground">Square</p>

              <p className="mt-2 text-3xl font-bold text-primary">{square}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-6 text-center">
              <p className="text-sm text-muted-foreground">Render Count</p>

              <p className="mt-2 text-3xl font-bold">{renderCount.current}</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}

export default Counter;
