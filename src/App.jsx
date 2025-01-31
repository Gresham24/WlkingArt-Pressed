import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <Router>
            <div
                style={{
                    minHeight: "100vh",
                }}
            >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
