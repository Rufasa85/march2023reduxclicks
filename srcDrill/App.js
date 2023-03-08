import React,{useState} from "react"
import First from "./components/First";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
     <h1>Its a me, Mario</h1>
     <First count={count} setCount={setCount}/>
     <h2>And me, Luigi</h2>
     <First count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
