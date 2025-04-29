import React from "react";
import LandingSection from "./components/LandingSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import VideoSlider from "./components/Video";
import TrustedBy from "./components/teams";
import LandingPage from "./components/content";
import TestimonialSlider from "./components/Testimonials";
import StatsSection from "./components/Stats";
import IntegrationsHub from "./components/IntegrationsHub";
import BlogSection from "./components/Blog";
import Contact from "./components/contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingSection />
                <VideoSlider />
                <TrustedBy />
                <LandingPage />
                <TestimonialSlider/>
                <StatsSection/>
                <IntegrationsHub/>
                <BlogSection/>
                <Contact/>
                <Footer/>
              </>
            }
          />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
