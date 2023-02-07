import { useState } from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(true);
  const [number, setNumber] = useState(1);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  let increaseNumber = () => {
    setNumber(number + 1);
  }

  const decreaseNumber = () => {
    setNumber(number -1);
  }

  // const decreaseNum = ( setNumber ) => {
  //   return setNumber-1;
  // }
  // if(toggle ) {
  //   return (
  //     <div>
  //       <h2>if/else statement</h2>
  //       <p> condition is true</p>
  //       <button onClick={handleToggle}>Change toggle</button>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <h2>if/else statement</h2>
  //       <p> condition is false</p>
  //       <button onClick={handleToggle}>Change toggle</button>
  //     </div>
  //   )
  // }

  return (
    <div className="App">


      <h1> In/de-creaser</h1>
        <div id='creaser'>
          <button onClick={() => increaseNumber(number)}>+</button>
          <h1>{number}</h1>
          <button onClick={() => decreaseNumber(number)}>-</button>
        </div>







      <h1 className={ toggle ? "funky" : ""}> CONDITIONNAL RENDERING </h1>

      <button onClick={handleToggle}> {toggle ? "hide content" : "show content"} </button>

      <h2>Ternary Operator</h2>

      { toggle ? (
        <div> 
          <h1>Hello can you hear me</h1>
          <h2>Toggle is true</h2>
          <p>some cool text</p>
        </div>
      ) : (
        <div> 
          <h1>Booya!</h1>
          <h2>Toggle is false</h2>
          <p>some even cooler text</p>
        </div>
      )}

      <h2>Short Circuit Evaluation</h2>

      { toggle && (
        <div>
          <h1>Short Circuit Evaluation</h1>
          <p>this is displayed when condition is true</p>
        </div>
      )}

      


    </div>
  );
}









// function App() {
//   const [message, setMessage] = useState("hello world");

//   const handleClick = (textToDisplay) => {
//     setMessage(textToDisplay);
//   }


//   return (
//     <div className="App">
//       <h1>state</h1>
//       <h2>{message}</h2>
//       <button onClick={() => handleClick("Oranges")}>Click Me!</button>

//       {/* <Person changeMsgFunc={handleClick} text="fsdfsdf"/> */}
//     </div>
//   );
// }

// const Person = ({changeMsgFunc, text}) => {
//   return (
//     <h1 onClick={changeMsgFunc}>{text}</h1>
//   )
// }





export default App;
