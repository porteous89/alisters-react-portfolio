import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="footer flex-row px-1">
            <div className='socialMedia'>
            <a href="https://github.com/porteous89" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/alister-p-1577b6105/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                        <a href="mailto:alisterporteous@hotmail.com">
                            <EmailIcon />
                        </a>
                        <a href="https://twitter.com/porteous89" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon />
                        </a>
            </div>
            <p>&copy; 2023 porteous89</p>
        
        </footer>
    );
}

export default Footer;