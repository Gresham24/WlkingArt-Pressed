import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Sizes from "./components/pages/Sizes";
import Faq from "./components/pages/Faq";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
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
                    <Route path="/about" element={<About />} />
                    <Route path="/sizes" element={<Sizes />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
