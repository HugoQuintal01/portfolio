import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState(""); // State to store the name
    const [email, setEmail] = useState(""); // State to store the email
    const [phonePrefix, setPhonePrefix] = useState("+351"); // State to store the phone prefix
    const [phoneNumber, setPhoneNumber] = useState(""); // State to store the phone number

    // Function to handle name input change
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Function to handle email input change
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Function to handle phone prefix input change
    const handlePrefixChange = (event) => {
        setPhonePrefix(event.target.value);
    };

    // Function to handle phone number input change
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    // Function to validate email format
    const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if email is valid
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // Process form submission
        console.log("Form submitted!");
    };

    return (
        <section id="scrollDown" className="contact-section gridrowfull">
            <div className="contact-container col-12">
                <div className="contact-left col-d-8 col-t-12 col-12">
                    <div className="contact-title">
                        <span>Want to start a project?</span>
                        <h3>Let's Talk</h3>
                    </div>
                    {/* Displaying the greeting message with the dynamic name */}
                    <span className="question-username">Question:</span>
                    <h4>Hi <span className="username-greeting">{name}</span>, how can I help you?</h4>
                </div>
                <div className="contact-right col-d-4 col-t-12 col-12">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phonePrefix">Phone Prefix:</label>
                            <input
                                type="text"
                                id="phonePrefix"
                                name="phonePrefix"
                                value={phonePrefix}
                                onChange={handlePrefixChange}
                                placeholder="Your Phone Prefix"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                placeholder="Your Phone Number"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
