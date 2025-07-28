import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi, I'm <span>Your Name</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    A Professional [Your Profession] based in [Your Location]
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero__cta"
                >
                    <a href="#projects" className="btn btn--primary">View My Work</a>
                    <a href="#contact" className="btn btn--secondary">Contact Me</a>
                </motion.div>
            </div>
            <div className="hero__image">
                {/* Your image or illustration */}
            </div>
        </section>
    );
};

export default Hero;