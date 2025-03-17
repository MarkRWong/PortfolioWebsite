import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
            <p>Email: [Your Email]</p>
            <p>Phone: [Your Phone Number]</p>
            <p>Follow me on:
                <a href="[LinkedIn Profile]">LinkedIn</a>,
                <a href="[GitHub Profile]">GitHub</a>,
            </p>
        </section>
    );
};

export default Contact;