import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../styles/Projects.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import project1Image from '../images/dev-portfolio.png';
import project2Image from '../images/employee-tracker.jpg';
import project3Image from '../images/fresh-tomatoes.jpg';
import project4Image from '../images/marvel-tracker.jpg';
import project5Image from '../images/note-taker.png';
import project6Image from '../images/text-editor.png';

const projectsData = [
    {
        title: 'Developer Portfolio',
        description: 'A portfolio website for developers to showcase their work.',
        image: project1Image,
        liveLink: 'https://porteous89.github.io/alisters-dev-portfolio/',
        repoLink: 'https://github.com/porteous89/alisters-dev-portfolio',
    },
    {
        title: 'Employee Tracker',
        description: 'A command line application to manage a company\'s employee database.',
        image: project2Image,
        liveLink: 'https://drive.google.com/file/d/1YdmTAhWT2ft1hSZR0Xfe0uUSWRkJfwqG/view',
        repoLink: 'https://github.com/porteous89/alisters-employee-tracker ',
    },
    {
        title: 'Fresh Tomatoes',
        description: 'A movie review website that displays a list of movies and lets a user rate and comment.',
        image: project3Image,
        liveLink: 'https://project-2-fresh-tomatoes.herokuapp.com/',
        repoLink: 'https://github.com/porteous89/project-2-fresh-tomatoes',
    },
    {
        title: 'Marvel Tracker',
        description: 'A website that lets users search for Marvel characters and view their details.',
        image: project4Image,
        liveLink: 'https://poochmagunder.github.io/Project-Marvel/',
        repoLink: 'https://github.com/PoochMagunder/Project-Marvel',
    },
    {
        title: 'Note Taker',
        description: 'An application that can be used to write, save, and delete notes.',
        image: project5Image,
        liveLink: 'https://alisters-note-taker.herokuapp.com/',
        repoLink: 'https://github.com/porteous89/alisters-note-taker',
    },
    {
        title: 'Text Editor',
        description: 'A text editor that allows users to create, save, and open files.',
        image: project6Image,
        liveLink: 'https://ap-text-editor.herokuapp.com/',
        repoLink: 'https://github.com/porteous89/alisters-text-editor',
    },
];

function Projects() {
    return (
        <div className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <Card key={index} className="project-card">
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<OpenInNewIcon />}
                >
                  Live
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }

export default Projects;