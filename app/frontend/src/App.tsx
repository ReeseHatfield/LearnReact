import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import PointOfSale from "./pages/PointOfSale/PointOfSale";
import "./App.css";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const videoSource: string = `${window.location.href}/background.mp4`;

  return (
    <div className="App">
      <video autoPlay loop muted className="backgroundVideo">
        <source src={videoSource} type="video/mp4" />
      </video>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pos" element={<PointOfSale isUser={true} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
