import BolgDetails from "./BolgDetails";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Create" element={<Create />} />
            <Route exact path="/blogs/:id" element={<BolgDetails />} />
            <Route exact path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
