import React from "react"
import First from "./components/First";
import { CountProvider } from "./utils/CountContext";

function App() {
  return (
    <CountProvider>

    <div className="App">
     <h1>Its a me, Mario</h1>
     <First/>
    </div>
    </CountProvider>
  );
}

export default App;
