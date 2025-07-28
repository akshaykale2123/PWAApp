import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A full-featured online store with cart functionality and payment processing.',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: 'project1.jpg',
        link: '/projects/ecommerce'
    },
    {
        id: 2,
        title: 'Portfolio Website',
        description: 'A responsive portfolio website built with modern web technologies.',
        tags: ['React', 'SCSS', 'Framer Motion'],
        image: 'project2.jpg',
        link: '/projects/portfolio'
    },
    // Add more projects
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="projects__container">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="project"
                    >
                        <div className="project__image">
                            <img src={`/images/${project.image}`} alt={project.title} />
                        </div>
                        <div className="project__content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project__tags">
                                {project.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <Link to={project.link} className="btn btn--primary">View Details</Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;