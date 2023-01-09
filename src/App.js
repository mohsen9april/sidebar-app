import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Products from "./components/Pages/Products";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Products" element={<Products />} />
              <Route
                path="*"
                element={
                  <>
                    <h2>Not Found</h2>
                  </>
                }
              />
              <Route />
              <Route />
            </Routes>
          </Sidebar>
        </Router>
      </>
    </div>
  );
}

export default App;
