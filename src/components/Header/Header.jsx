import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';
// Import Bootstrap icons
import {
    HouseFill,
    PersonFill,
    CodeSlash,
    EnvelopeFill,
    FileEarmarkTextFill,
    StarFill,
    ChatTextFill
} from 'react-bootstrap-icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);

            // Update active section based on scroll position
            const sections = ['hero', 'about', 'skills', 'projects', 'testimonials', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu when route changes
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }, [location]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        closeMenu();
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <Link to="/" className="nav__logo">
                    <HouseFill className="nav__logo-icon" />
                    <span>Yomo</span>
                </Link>

                <button
                    className="nav__toggle"
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                >
                    <span className="nav__toggle-icon"></span>
                </button>

                <div className="nav__overlay" onClick={closeMenu}></div>

                <ul className="nav__menu">
                    <li className="nav__item">
                        <Link to="/" className={`nav__link ${location.pathname === '/' ? 'active' : ''}`}>
                            <HouseFill className="nav__icon" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className={`nav__link ${location.pathname === '/about' ? 'active' : ''}`}>
                            <PersonFill className="nav__icon" />
                            <span>About Us</span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/skills" className={`nav__link ${location.pathname === '/skills' ? 'active' : ''}`}>
                            <CodeSlash className="nav__icon" />
                            <span>Skills</span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className={`nav__link ${activeSection === 'projects' ? 'active' : ''}`}
                        >
                            <StarFill className="nav__icon" />
                            <span>Projects</span>
                        </button>
                    </li>
                    <li className="nav__item">
                        <button
                            onClick={() => scrollToSection('testimonials')}
                            className={`nav__link ${activeSection === 'testimonials' ? 'active' : ''}`}
                        >
                            <ChatTextFill className="nav__icon" />
                            <span>Testimonials</span>
                        </button>
                    </li>
                    <li className="nav__item">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`nav__link ${activeSection === 'contact' ? 'active' : ''}`}
                        >
                            <EnvelopeFill className="nav__icon" />
                            <span>Contact</span>
                        </button>
                    </li>
                    <li className="nav__item">
                        <a href="/resume.pdf" download className="nav__link nav__link--button">
                            <FileEarmarkTextFill className="nav__icon" />
                            <span>Download CV</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;