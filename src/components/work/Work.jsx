import React, { useRef, useState, useEffect } from 'react';
import Button from "../button/Button";
import ArrowIcon from '../../assets/images/arrow-down.png';
import Work03 from '../../assets/images/work_03.png';

const Work = () => {

    const stepsRef = useRef([]);
    const [visibleSteps, setVisibleSteps] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const stepsVisibility = stepsRef.current.map(step => {
                if (step) {
                    const rect = step.getBoundingClientRect();
                    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                    return rect.top <= windowHeight * 1;
                }
                return false;
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
        <section id="portfolio" className="work-section gridrowfull">
            <div className="work-container col-d-12 col-t-12 col-12">
                <div className="work-left col-d-4 col-t-12 col-12">
                    <div className='work-left-sticky'>
                        <h3 ref={ref => (stepsRef.current[1] = ref)} className={`${visibleSteps[1] ? "visible" : ""}`}>Featured Work</h3>
                        <p ref={ref => (stepsRef.current[2] = ref)} className={`${visibleSteps[2] ? "visible" : ""}`}>Explore a curated selection of websites developed in close collaboration with our talented design team. These projects showcase the synergy between design and development, resulting in engaging digital experiences that captivate audiences.</p>
                        <Button ref={ref => (stepsRef.current[3] = ref)} className={`button ${visibleSteps[3] ? "visible" : ""}`} buttonHref={'#scrollDown'} buttonText={"Let's work"} />
                    </div>
                    <img ref={ref => (stepsRef.current[3] = ref)} className={`${visibleSteps[3] ? "visible" : ""}`} src={Work03} alt="Arrow Icon" />
                </div>
                <div className="work-right col-d-8 col-t-12 col-12">
                    <div ref={ref => (stepsRef.current[4] = ref)} className={`work-item col-12 ${visibleSteps[4] ? "visible" : ""}`}>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://nicolarossiohotel.com/" target="_blank">Nicola Rossio Hotel</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div ref={ref => (stepsRef.current[5] = ref)} className={`work-item col-12 ${visibleSteps[5] ? "visible" : ""}`}>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://rossioplazahotel.com/" target="_blank">Rossio Plaza Hotel</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div ref={ref => (stepsRef.current[6] = ref)} className={`work-item col-12 ${visibleSteps[6] ? "visible" : ""}`}>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://hsmporto.pt/" target="_blank">Hospital de Santa Maria - Porto</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div ref={ref => (stepsRef.current[7] = ref)} className={`work-item col-12 ${visibleSteps[7] ? "visible" : ""}`}>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://www.shift-global.com/" target="_blank">Shift Consulting</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div ref={ref => (stepsRef.current[8] = ref)} className={`work-item col-12 ${visibleSteps[8] ? "visible" : ""}`}>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://livingcampus.pt/" target="_blank">Living Campus</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div ref={ref => (stepsRef.current[9] = ref)} className={`work-item col-12 ${visibleSteps[9] ? "visible" : ""}`}>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://www.gestout.pt/" target="_blank">Gestout - Gestão em Outsourcing</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div ref={ref => (stepsRef.current[10] = ref)} className={`work-item col-12 ${visibleSteps[10] ? "visible" : ""}`}>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://avomoleiro.pt/" target="_blank">Avô Moleiro - Country House</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div ref={ref => (stepsRef.current[11] = ref)} className={`work-item col-12 ${visibleSteps[11] ? "visible" : ""}`}>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://theoceanliving.pt/" target="_blank">Ocean Living</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div ref={ref => (stepsRef.current[12] = ref)} className={`work-item col-12 ${visibleSteps[12] ? "visible" : ""}`}>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://goingup.pt/" target="_blank">Going Up</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div ref={ref => (stepsRef.current[13] = ref)} className={`work-item col-12 ${visibleSteps[13] ? "visible" : ""}`}>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://tex2tex.com/" target="_blank">Tex2Tex</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time as a Freelancer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;