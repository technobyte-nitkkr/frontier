import image from "/assets/Main-background.svg";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Team from "./Pages/Team/Team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "swiper/css/bundle";
import DevTeam from "./Pages/DevTeam/Team";
import About from "./Pages/About/About";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import SIH from "./SIH/SIH";

const GCIDKeys = import.meta.env.VITE_GCID;

function App() {

  return (
    <GoogleOAuthProvider clientId={GCIDKeys}>
      <div
        className="App"
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: "#000000",
          height: "100vh",
          margin: "0px",
          overflowY: "scroll",
          overflowX: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Router>
          <div className="home-div">
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<About />} />
              <Route path="/dev" element={<DevTeam />} />
              <Route path="/sih" element={<SIH />} />
            </Routes>
            <div>
              <Footer />
            </div>
          </div>
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
