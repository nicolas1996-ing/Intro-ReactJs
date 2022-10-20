import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/greeting";
import Fgreeting from "./components/pure/fgreeting";
import TaskListComponent from "./components/container/taskList";
import ComponentA from "./components/container/componentA";

const userInfo = {
  name: "nicolas",
  age: 25,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>component 1. Tasks</h2>
        <TaskListComponent />
        <h2>component 2. Contact</h2>
        <ComponentA></ComponentA>

        {/* 
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="nicolas" />
        <Greeting name="rafael"></Greeting>
        <Fgreeting name="camilo" age={30} brothers={2} />
        */}
      </header>
      {/* 
        <h1>{userInfo.name}</h1>
        <h1>{userInfo.age}</h1>
      */}
    </div>
  );
}

export default App;
