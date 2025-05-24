import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/images/logo.png"; // no curly braces

const Footer = () => {
  return (
    <footer className="codex-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/notes">Notes</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/courses">Courses</a>
          <a href="/dsapractice">DSA Practice</a>
        </div>

        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Codex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
