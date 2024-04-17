import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import NotFound from "../../components/Error/NotFound";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Projects from "../projects/Projects";
import More from "../about/More";
import "../home/Home.scss";
import ComingSoon from "../../components/Error/ComingSoon";

const Router = () => {
  return (
    <div className="home-bgImg-container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
          render={() => <Footer type="horizontal" />}
        />
        <Route
          path="about"
          element={<About />}
          render={() => <Footer type="vertical" />}
        >
          <Route path="/about/more" element={<More />} />
        </Route>
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="twitter" element={<ComingSoon/>}/>
        <Route path="facebook" element={<ComingSoon/>}/>
        <Route path="instagram" element={<ComingSoon/>}/>
        <Route path="github" element={<ComingSoon/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
