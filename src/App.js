import DashBoard from "./DashBoard";
import { Routes, Route } from "react-router-dom";
import Setting from "./components/Setting";
function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
