import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_PUBLIC_KEY'
        )
            .then((result) => {
                setMessage({ text: 'Message sent successfully!', type: 'success' });
                form.current.reset();
            }, (error) => {
                setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setMessage({ text: '', type: '' }), 5000);
            });
    };

    return (
        <section id="contact" className="contact">
            <h2>Get In Touch</h2>
            <div className="contact__container">
                <div className="contact__info">
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out to me for any questions or opportunities.</p>
                    <ul>
                        <li>
                            <span>Email:</span> your.email@example.com
                        </li>
                        <li>
                            <span>Phone:</span> +1 (123) 456-7890
                        </li>
                        <li>
                            <span>Location:</span> Your City, Country
                        </li>
                    </ul>
                    <div className="contact__social">
                        {/* Social media icons */}
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="form-group">
                        <input type="text" name="user_name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="user_email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn btn--primary">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {message.text && (
                        <div className={`message ${message.type}`}>{message.text}</div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;