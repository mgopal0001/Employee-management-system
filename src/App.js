import logo from "./logo.svg";
import "./App.css";
import { routes } from "./Routes";
import { useLocation, Route, Routes } from "react-router-dom";
import BottomPanel from "./components/shared/bottomPanel/BottomPanel";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, component }, index) => {
          return <Route path={path} element={component} key={index} />;
        })}
      </Routes>
      {location.pathname !== "/" && <BottomPanel />}
    </div>
  );
}

export default App;
