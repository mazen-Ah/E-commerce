import { React } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from "./pages/signAndLogin/Sign";
import Log from "./pages/signAndLogin/Log";
import Shop from "./pages/Shop";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/login" element={<Log />} />
          <Route path="/Sign" element={<Sign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
