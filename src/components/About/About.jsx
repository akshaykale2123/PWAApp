import React from 'react';
import { BriefcaseFill, PeopleFill, AwardFill, BookFill, HeartFill, LightbulbFill } from 'react-bootstrap-icons';
import './About.css';

const About = () => {
    const cards = [
        {
            icon: <BriefcaseFill />,
            title: "Professional Experience",
            description: "Over 5 years of experience in creating exceptional dining experiences and culinary innovation."
        },
        {
            icon: <PeopleFill />,
            title: "Customer Service",
            description: "Dedicated to providing outstanding service and creating memorable moments for our guests."
        },
        {
            icon: <AwardFill />,
            title: "Quality Assurance",
            description: "Committed to maintaining the highest standards of food quality and safety."
        },
        {
            icon: <BookFill />,
            title: "Culinary Expertise",
            description: "Specialized in various cuisines and innovative cooking techniques."
        },
        {
            icon: <HeartFill />,
            title: "Passion for Food",
            description: "Deep love for creating dishes that bring joy and satisfaction to our customers."
        },
        {
            icon: <LightbulbFill />,
            title: "Innovation",
            description: "Constantly exploring new flavors and culinary concepts to enhance our menu."
        }
    ];

    return (
        <section id="about" className="about">
            <div className="about__content">
                <div className="about__image">
                    {/* Restaurant logo or chef image */}
                </div>
                <h2>About Our Restaurant</h2>
                <p>
                    Welcome to our culinary haven where passion meets excellence. We take pride in
                    creating extraordinary dining experiences that combine traditional flavors with
                    modern innovation.
                </p>
                <div className="about__cards">
                    {cards.map((card, index) => (
                        <div key={index} className="about__card">
                            <div className="card__icon">
                                {card.icon}
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
                <div className="about__stats">
                    <div className="stat">
                        <h3>1000+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat">
                        <h3>50+</h3>
                        <p>Special Dishes</p>
                    </div>
                    <div className="stat">
                        <h3>5+</h3>
                        <p>Years of Excellence</p>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default About;