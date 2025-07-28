import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Git', level: 85 },
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>My Skills</h2>
            <div className="skills__container">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="skill"
                    >
                        <div className="skill__info">
                            <h3>{skill.name}</h3>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="skill__bar">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="skill__progress"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;