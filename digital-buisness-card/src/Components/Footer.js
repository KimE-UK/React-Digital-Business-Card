import React from "react"
import Behanceicon from "../Images/Behance-icon.png"
import InstagramIcon from "../Images/Instagram-Icon.png"
import LinkedinIcon from "../Images/Linkedin-Icon.png"
import GitHubIcon from "../Images/GitHub-Icon.png"

function Footer(){
return (
<div className="Footer--ctn">
   <a href="#"><img src={InstagramIcon} alt="Instagram Icon" /></a> 
   <a href="https://www.linkedin.com/in/kimedwards14c4/" target="_blank"> <img src={LinkedinIcon} alt="Linkedin Icon" /></a>
   <a href="#"><img src={GitHubIcon} alt="GitHub Icon" /></a>
   <a href="https://www.behance.net/kimedwards14c4" target="_blank"><img src={Behanceicon} alt="Behance icon" /></a>
</div>
)

}

export default Footer;