import React, { useRef, useState, useEffect } from 'react';

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

    // Animation enter
    const stepsRef = useRef([]);
    const [visibleSteps, setVisibleSteps] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const stepsVisibility = stepsRef.current.map(step => {
                const rect = step.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                return rect.top <= windowHeight * 0.75;
            });
            setVisibleSteps(stepsVisibility);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check on mount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="scrollDown" className="contact-section gridrowfull">
            <div className="contact-container col-12">
                <div className="contact-left col-d-8 col-t-12 col-12">
                    <div className="contact-title">
                        <span ref={ref => (stepsRef.current[3] = ref)} className={`${visibleSteps[3] ? "visible" : ""}`}>Want to start a project?</span>
                        <h3 ref={ref => (stepsRef.current[3] = ref)} className={`${visibleSteps[3] ? "visible" : ""}`}>Let's Talk</h3>
                    </div>
                    {/* Displaying the greeting message with the dynamic name */}
                    <span ref={ref => (stepsRef.current[3] = ref)} className={`question-username ${visibleSteps[3] ? "visible" : ""}`}>Question:</span>
                    <h4>Hi <span className="username-greeting">{name}</span>, how can I help you?</h4>
                </div>
                <div className="contact-right col-d-4 col-t-12 col-12">
                    <form ref={ref => (stepsRef.current[3] = ref)} className={`contact-form ${visibleSteps[3] ? "visible" : ""}`} onSubmit={handleSubmit}>
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
