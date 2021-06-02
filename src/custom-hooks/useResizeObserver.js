import { useRef, useState, useEffect } from "react";

const initialDimentions = {
  width: 0,
  height: 0,
};

export default function useResizeObserver(elRef) {
  const [dimentions, setDimentions] = useState(initialDimentions);

  const observer = useRef(
    new ResizeObserver((entries) => {
      const d = entries[0].contentRect;
      setDimentions(d);
    })
  );

  useEffect(() => {
    if (elRef.current) {
      observer.current.observe(elRef.current);
    }

    return () => {
      observer.current.unobserve();
    };
  }, [elRef, observer]);

  return dimentions;
}
