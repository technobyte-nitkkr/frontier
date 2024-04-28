import image from "/assets/Main-background.svg";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Team from "./Pages/Team/Team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "swiper/css/bundle";
import About from "./Pages/About/About";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import TimeLine from "./Components/Timeline/TimeLine";
import "./App.css";

const GCIDKeys = import.meta.env.VITE_GCID;

function App() {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const hideProfileSection = () => {
    setIsProfileVisible(false);
  };

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
            <Navbar setProfileVisible={setIsProfileVisible} />
          </div>
          <TimeLine
            show={isProfileVisible}
            onClickOutside={hideProfileSection}
            data={localStorage.getItem("userdata")}
          />
          <div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<About />} />
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
