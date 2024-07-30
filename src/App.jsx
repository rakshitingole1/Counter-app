import React,{useState,useEffect} from 'react';
import './App.css';

const App = () => {
const [count, setCount] = useState(0);
const [isActive, setIsActive] = useState(false);
let intervalId = null;

useEffect(() => {
  if (isActive) {
    intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  } else {
    clearInterval(intervalId);
  }
  // Cleanup interval on component unmount
  return () => clearInterval(intervalId);
}, [isActive]);

const startCounter = () => {
  setIsActive(true);
};

const stopCounter = () => {
  setIsActive(false);
};
const resetcount = ()=>{
  setCount(0);
}

  return (
    <article className="article">
      <header className="header">Counter App</header>
      <section className="section">
        <h1 className="h1">{count}</h1>
        <div className="buttons">
          <button className="button" onClick={()=>setCount(count-1)}>-</button>
          <button className="button" onClick={()=>setCount(count+1)}>+</button><br/>
          <button className="button" onClick={startCounter}>START</button>
          <button className="button" onClick={stopCounter}>STOP</button>
          <button className="button" onClick={resetcount}>Reset</button>
        </div>
      </section>
      <footer className="footer"> &copy;  All right reserved by Rakshit</footer>
    </article>
  );
};

export default App;
