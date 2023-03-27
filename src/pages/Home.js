import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import profilePic from "../images/self.jpg";
import Avatar from "@mui/material/Avatar";
import Typist from "react-text-typist";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaCode,
  FaFileCode,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div className="about-section">
        <div className="about">
          <h2>Hi, My Name is Alister</h2>
          <div className="profile-picture-container">
            <Avatar
              alt="Alister"
              src={profilePic}
              sx={{
                width: 300,
                height: 300,
                border: "3px solid #60eb20",
                boxShadow: "0 4px 10px rgba(96, 235, 32, 0.8)",
                marginTop: "20px",
                marginBottom: "20px",
                animation: "rotate-avatar 5s linear infinite",
                "&:hover": {
                  boxShadow: "4px 4px 20px rgba(255, 16, 240)",
                },
              }}
            />
          </div>
          <div className="prompt">
            <Typist
              className={"myTypist"}
              cursorClassName={"myCursor"}
              sentences={[
                "Full Stack Engineer",
                "Web Developer",
                "Creative Designer",
              ]}
              loop={true}
            />
            <br />
            <div className="socialMedia">
            <a
              href="https://github.com/porteous89"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/alister-p-1577b6105/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:alisterporteous@hotmail.com">
              <EmailIcon />
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="column">
            <h3>
              <FaReact style={{ color: "#60eb20" }} /> Front End
            </h3>
            <div className="icon-title">
              <FaHtml5 size={72} color="#3e497a" />
              <span color="#60eb20">HTML</span>
            </div>
            <div className="icon-title">
              <FaCss3 size={72} color="#3e497a" />
              <span>CSS</span>
            </div>
            <div className="icon-title">
              <FaReact size={72} color="#3e497a" />
              <span>ReactJS</span>
            </div>
          </div>
          <div className="column">
            <h3>
              <FaNodeJs style={{ color: "#60eb20" }} /> Back End
            </h3>

            <div className="icon-title">
              <FaNodeJs size={72} color="#3e497a" />
              <span> NodeJs </span>
            </div>
            <div className="icon-title">
              <FaCode size={72} color="#3e497a" />
              <span> ExpressJS</span>
            </div>
            <div className="icon-title">
              <FaFileCode size={72} color="#3e497a" />
              <span> GraphQL </span>
            </div>
            <div className="icon-title">
              <FaDatabase size={72} color="#3e497a" />
              <span> MongoDB </span>
            </div>
          </div>
          <div className="column">
            <h3>
              <FaCode style={{ color: "#60eb20" }} /> Languages
            </h3>
              <div className="icon-title">
                <FaJs size={72} color="#3e497a" />
                <span> Javascript </span>
              </div>
              <div className="icon-title">
                <FaCode size={72} color="#3e497a" />
                <span> Typescript </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
