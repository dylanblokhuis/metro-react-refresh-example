import React, { useEffect, useState } from "react";

export function App() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((prev) => prev + 5);
    }, 1000);
  }, []);

  return <div><h1>Hello!!!!!{counter} </h1></div>;
}
