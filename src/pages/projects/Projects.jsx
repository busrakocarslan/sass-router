import React from "react";
import ankedi2 from "../../assets/img/ankedi2.png";
import ankedi3 from "../../assets/img/ankedi3.jpg";
import ankkedi4 from "../../assets/img/ankkedi4.webp";
import ankedi5 from "../../assets/img/ankedi5.webp";
import ankkedi6 from "../../assets/img/ankkedi6.jpg";
import ankedi7 from "../../assets/img/ankedi7.jpg";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="projects__items">
        <img className="projects__item" src={ankedi7} alt="" />
      </div>
      <div className="projects__items">
        
        <img className="projects__item" src={ankedi3} alt="" />
      </div>
      <div className="projects__items">
        <img className="projects__item" src={ankkedi4} alt="" />
      </div>
      <div className="projects__items">
        
        <img className="projects__item" src={ankedi5} alt="" />
      </div>
      <div className="projects__items">
        <img className="projects__item" src={ankkedi6} alt="" />
      </div>
      <div className="projects__items">
        <img  className="projects__item" src={ankedi2} alt="" />
      </div>
    </div>
  );
};

export default Projects;
