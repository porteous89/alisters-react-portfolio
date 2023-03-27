import React from 'react';
import {Fade, Slide, Card, CardContent} from '@mui/material';
import '../styles/About.css';


function About() {
    return (
        <div className="about-page">
          <Fade in={true} timeout={1000}>
            <h2>About Me</h2>
          </Fade>
          <div className="cards-container">
          <Slide in={true} direction="right" timeout={1000}>
        <Card className="about-card" elevation={3}>
          <CardContent>
            <p>
              Hey, I'm Alister. I recently completed the University of
              Toronto's Full Stack Web Development Bootcamp.
            </p>
          </CardContent>
        </Card>
      </Slide>
      <Slide in={true} direction="left" timeout={1000}>
        <Card className="about-card" elevation={3}>
          <CardContent>
            <p>
              I have a keen interest in working with non-profit organizations,
              helping them leverage technology to make a positive impact.
            </p>
          </CardContent>
        </Card>
      </Slide>
      <Slide in={true} direction="right" timeout={1000}>
        <Card className="about-card" elevation={3}>
          <CardContent>
            <p>
              I am constantly looking to build on my skills by developing my own
              applications and collaborating on exciting projects.
            </p>
          </CardContent>
        </Card>
      </Slide>
      </div>
    </div>
  );
}

    

export default About;