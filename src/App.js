import './App.css';
import HandleAsyncData from "./learningReact/HandleAsyncData";
import AllInSimple from "./learningReact/hooks/reducer/allInSimple";
import AllInComplex from "./learningReact/hooks/reducer/allInComplex";


function App() {
  return (
    <div className="App">
    <h2>ahoj</h2>
      <HandleAsyncData/>
      <AllInSimple/>
      <br/>
      <AllInComplex/>
    </div>
  );
}

export default App;
