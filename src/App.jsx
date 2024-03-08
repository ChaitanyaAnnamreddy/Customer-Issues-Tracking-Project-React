import { Outlet } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header>
        <h1>Customer Issues Tracking Project using React</h1>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
