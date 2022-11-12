import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

export default function Timer() {
  const [count, setCount] = useState(100);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}
