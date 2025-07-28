import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            content: "Great to work with! Delivered high-quality work on time.",
            author: "John Doe",
            position: "Project Manager",
            avatar: "/path-to-avatar-1.jpg"
        },
        {
            content: "Excellent problem-solving skills and attention to detail.",
            author: "Jane Smith",
            position: "Tech Lead",
            avatar: "/path-to-avatar-2.jpg"
        },
        // Add more testimonials as needed
    ];

    return (
        <section id="testimonials" className="testimonials">
            <div className="testimonials__content">
                <h2>What People Say</h2>
                <div className="testimonials__grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-card__content">{testimonial.content}</p>
                            <div className="testimonial-card__author">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    className="testimonial-card__avatar"
                                />
                                <div className="testimonial-card__info">
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
