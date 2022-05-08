import React from "react";
import Github from "./Github";
import Linkedin from "./Linkedin";

const Footer = () => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/fercarballo/"
        target="_blank"
        rel="noopener noreferrer"
      ><Linkedin /> Linkedin</a>
      <a
        href="https://github.com/fercarballo"
        target="_blank"
        rel="noopener noreferrer"
      ><Github/> GitHub </a>
    </div>
  );
};

export default Footer;
