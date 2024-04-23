// Steps.jsx
import React, { useRef, useState, useEffect } from 'react';
import Button from "../button/Button";

const Steps = () => {
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
        <section id="work" className="steps-section gridrowfull">
            <div className="steps-title col-12">
                <h3>Let's work together?</h3>
            </div>
            <div className="steps-container">
                <div ref={ref => (stepsRef.current[0] = ref)} className={`steps step01 col-12 col-d-4 col-t-12 ${visibleSteps[0] ? "visible" : ""}`}>
                    <div className="titleStep">
                        <h4>1. Connect & Collaborate</h4>
                    </div>
                    <div className="textStep">
                        <span>Let's start by connecting! Reach out to me, and we'll discuss your objectives, design preferences, and desired functionality. I'm here to listen, understand, and collaborate closely with you. This partnership is about bringing your unique vision to life.</span>
                    </div>
                </div>
                <div ref={ref => (stepsRef.current[1] = ref)} className={`steps step02 col-12 col-d-4 col-t-12 ${visibleSteps[1] ? "visible" : ""}`}>
                    <div className="titleStep">
                        <h4>2. Craft Your Vision</h4>
                    </div>
                    <div className="textStep">
                        <span>With your objectives in mind, I'll dive into crafting a website that represents your brand and resonates with your target audience. We'll work together to create wireframes and mockups, visualizing the end result and ensuring it meets your expectations.</span>
                    </div>
                </div>
                <div ref={ref => (stepsRef.current[2] = ref)} className={`steps step03 col-12 col-d-4 col-t-12 ${visibleSteps[2] ? "visible" : ""}`}>
                    <div className="titleStep">
                        <h4>3. Design & Refine</h4>
                    </div>
                    <div className="textStep">
                        <span>I'll harness my expertise in design to create a captivating user interface for your website. Whether it's selecting the perfect color palette, choosing fonts that reflect your brand's personality, or creating an intuitive layout, I'll ensure every detail shines.</span>
                    </div>
                </div>
                <div ref={ref => (stepsRef.current[3] = ref)} className={`steps step04 col-12 col-d-4 col-t-12 ${visibleSteps[3] ? "visible" : ""}`}>
                    <div className="titleStep">
                        <h4>4. Development & Implementation</h4>
                    </div>
                    <div className="textStep">
                        <span>Using the latest web technologies, I'll bring your design to life. From coding and integrating interactive elements to optimizing your website for seamless performance across devices, I'll meticulously build a functional website that engages your visitors.</span>
                    </div>
                </div>
                <div ref={ref => (stepsRef.current[4] = ref)} className={`steps step05 col-12 col-d-4 col-t-12 ${visibleSteps[4] ? "visible" : ""}`}>
                    <div className="titleStep">
                        <h4>5. Launch & Support</h4>
                    </div>
                    <div className="textStep">
                        <span>The moment has arrived to unveil your website to the world! Before the big launch, we'll conduct thorough testing to ensure everything works seamlessly. Once your website is live, I'll provide you with the necessary training to manage it effectively. And don't worry—I'll always be there to support you with any ongoing maintenance or updates you may need.</span>
                    </div>
                </div>
            </div>
            <div className="steps last-step-button col-12 col-d-4 col-t-12">
                <Button buttonHref={'#scrollDown'} buttonText={"Let's work"} />
            </div>
        </section>
    );
}

export default Steps;
