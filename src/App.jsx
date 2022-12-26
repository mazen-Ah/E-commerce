import { React } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from "./pages/signAndLogin/Sign";
import Log from "./pages/signAndLogin/Log";
import Shop from "./pages/Shop";
import Layout from "./components/Layout";
import NoFound from "./pages/NoFound";
import ProducePage from "./pages/ProducePage";
import Cart from "./pages/Cart";
import Trilar from "./components/Trilar";
function App() {
  return (
    <>
      <Trilar />
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:productId" element={<ProducePage />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/login" element={<Log />} />
            <Route path="/Sign" element={<Sign />} />
            <Route path="*" element={<NoFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;
