import { useState, useEffect, useRef } from "react";

export default function useDebouncedUseMemo<T>(
  compute: () => T, // Factory function type annotation for returning a generic type T
  dependencies: React.DependencyList, // Type annotation for dependencies array
  delay: number, // Type annotation for delay in milliseconds
): T | undefined {
  // The hook can return a value of type T or undefined before the first computation
  // State to store the computed value with type T or undefined
  const [value, setValue] = useState<T | undefined>();

  // Using useRef to store the latest compute function and delay
  // to avoid issues with their changing identities
  const computeRef = useRef<() => T>(compute);
  const delayRef = useRef<number>(delay);
  useEffect(() => {
    computeRef.current = compute;
    delayRef.current = delay;
  }, [compute, delay]);

  useEffect(() => {
    // Set up the debounce timer
    const handler = setTimeout(() => {
      // Compute the new value and update state
      setValue(computeRef.current());
    }, delayRef.current);

    // Clean up the timer if the dependencies change or the component unmounts
    return () => clearTimeout(handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies); // Depend on the passed dependencies

  // Return the computed value
  return value;
}
