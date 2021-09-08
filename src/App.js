import './App.css';
import HandleAsyncData from "./learningReact/HandleAsyncData";
import SimpleReducer from "./learningReact/hooks/useReducer/SimpleReducer";
import ComplexReducer from "./learningReact/hooks/useReducer/ComplexReducer";
import LoginPage from "./Components/LoginPage";


function App() {
  return (
    <div className="App">
    <h2>ahoj</h2>
      <HandleAsyncData/>
      <SimpleReducer/>
      <br/>
      <ComplexReducer/>
      <LoginPage/>
    </div>
  );
}

export default App;
