import { useState, useEffect } from "react";

const MainPage = () => {
  const PreDate = new Date();
  const PreDateStringed = PreDate.toString();
  const [time, setTime] = useState(PreDateStringed);
  const [loading, setLoading] = useState(false);

  const [counter, setCounter] = useState(Number);

  

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
    let value =  0
    if(counter <= value)
    {
      value = 1
    }
    else
    {
      value = counter
    }

  };


  let usingData = () => {
    let DateFunction = new Date();
    let DataString = DateFunction.toString();
    setTime(DataString);
  };

  useEffect(() => {
    setInterval(usingData, 1000);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, setCounter);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1></h1>
      ) : (
        <header className="header">
          <h2 className="logo">Selenium</h2>

          <nav className="navbar">
            <a href="#" className="CurrentTime">
              {time}
            </a>
            <a href="http://127.0.0.1:3001/">Refresh</a>
            <a href="http://127.0.0.1:9091/">Error</a>
            <a href="#">Page Load Time Seconds: {counter}</a>
            <a href="#">
              <button onClick={increment}>+</button>
            </a>
            <a href="#">
              <button onClick={decrement}>-</button>
            </a>
          </nav>
        </header>
      )}
    </div>
  );
};

export default MainPage;
