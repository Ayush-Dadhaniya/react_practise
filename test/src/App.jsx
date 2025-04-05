import React, { useState,createContext } from "react";
import Footer from "./components/Footer.jsx";
const App = () => {
  const [count,setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  }

  const counterContext = createContext();
  const CounterProvider = counterContext.Provider;
  return (
    <><CounterProvider value={count}>
      <button onClick={handleClick}>Click me to see magic</button>
      <p>You clicked {count} times</p>
      <Footer count={count}/>
      </CounterProvider>
    </>
  );
};

export default App;
