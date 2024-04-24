import React, { useRef, useState, useEffect } from 'react';

const About = () => {
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

    return(
        <section id="about" className="about-section gridrowfull">
            <div className="about-container col-12">
                <div className="about-left col-d-6 col-t-12 col-12">
                    <span ref={ref => (stepsRef.current[6] = ref)} className={`${visibleSteps[6] ? "visible" : ""}`}>My Expertise</span>
                    <h2 ref={ref => (stepsRef.current[7] = ref)} className={`${visibleSteps[7] ? "visible" : ""}`}>Spearhead the development of Websites and Web Applications</h2>
                </div>
                <div className="about-right col-d-6 col-t-12 col-12">
                    <p ref={ref => (stepsRef.current[0] = ref)} className={`${visibleSteps[0] ? "visible" : ""}`}>Spearhead the development of websites and web applications from inception to completion, adhering to design mockups provided in Figma or Adobe XD</p>
                    <p ref={ref => (stepsRef.current[1] = ref)} className={`${visibleSteps[1] ? "visible" : ""}`}>Proficiently utilized a diverse tech stack encompassing HTML, JavaScript, React, Next.js, TypeScript, jQuery, PHP, SQL, CSS, SCSS...</p>
                    <p ref={ref => (stepsRef.current[2] = ref)} className={`${visibleSteps[2] ? "visible" : ""}`}>Implemented API integrations and crafted bespoke plugins to augment functionality.</p>
                    <p ref={ref => (stepsRef.current[3] = ref)} className={`${visibleSteps[3] ? "visible" : ""}`}>Executed SEO best practices to ensure websites rank effectively in search engine results.</p>
                    <p ref={ref => (stepsRef.current[4] = ref)} className={`${visibleSteps[4] ? "visible" : ""}`}>Ensured websites were responsive across various devices and browsers, optimizing performance for seamless user experiences.</p>
                    <p ref={ref => (stepsRef.current[5] = ref)} className={`${visibleSteps[5] ? "visible" : ""}`}>Actively engaged in self-directed projects utilizing React, Next.js, and TypeScript, demonstrating a commitment to continuous learning and exploring cutting-edge technologies in the frontend development landscape.</p>
                </div>
            </div>
        </section>
    );
}

export default About;