
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__brand">
                    <h3>Your Name</h3>
                    <p>Professional [Your Profession]</p>
                </div>
                <div className="footer__links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>your.email@example.com</li>
                        <li>+1 (123) 456-7890</li>
                        <li>Your City, Country</li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;