import React from 'react';
import '../footer/Footer.css';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';


function Footer() {
    return (

        <footer>
            <div className="footer-div">
            <h2><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookIcon className="Icon" style={{ fontSize: 40 }} /></a><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><GitHubIcon className="Icon" style={{ fontSize: 40 }} /></a><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><TwitterIcon className="Icon" style={{ fontSize: 40 }} /></a></h2>
            <h2 className="copyright">Copyright Peter Castle <CopyrightIcon style={{ fontSize: 20 }} /> 2020. All rights reserved.</h2>
            </div>
        </footer>
    
    )
    
}

export default Footer;