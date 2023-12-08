import logo from "./logo.svg";
import "./App.css";
import {routes}from "./Routes"
import { Route, Routes } from "react-router-dom";
import BottomPanel from "./components/shared/bottomPanel/BottomPanel";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, component }, index) => {
          return <Route path={path} element={component} key={index} />;
        })}
      </Routes>
      <BottomPanel/>
    </div>
  );
}

export default App;
