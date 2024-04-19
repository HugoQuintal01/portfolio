import Button from "../button/Button";
import ArrowIcon from '../../assets/images/arrow-down.png';

const Work = () => {
    return(
        <section id="portfolio" className="work-section gridrowfull">
            <div className="work-container col-d-12 col-t-12 col-12">
                <div className="work-left col-d-4 col-t-12 col-12">
                    <h3>Featured Work</h3>
                    <p>Explore a curated selection of websites developed in close collaboration with our talented design team. These projects showcase the synergy between design and development, resulting in engaging digital experiences that captivate audiences.</p>
                    <Button className="button" buttonHref={'#scrollDown'} buttonText={"Let's work"} />
                </div>
                <div className="work-right col-d-8 col-t-12 col-12">
                    <div className="work-item col-12">
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://nicolarossiohotel.com/" target="_blank">Nicola Rossio Hotel</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div className="work-item col-12">
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://rossioplazahotel.com/" target="_blank">Rossio Plaza Hotel</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div className="work-item col-12">
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://hsmporto.pt/" target="_blank">Hospital de Santa Maria - Porto</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div className="work-item col-12">
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://www.shift-global.com/" target="_blank">Shift Consulting</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div className="work-item col-12">
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://livingcampus.pt/" target="_blank">Living Campus</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div className="work-item col-12">
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://www.gestout.pt/" target="_blank">Gestout - Gestão em Outsourcing</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div className="work-item col-12">
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://avomoleiro.pt/" target="_blank">Avô Moleiro - Country House</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div className="work-item col-12">
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://theoceanliving.pt/" target="_blank">Ocean Living</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div className="work-item col-12">
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <a href="https://goingup.pt/" target="_blank">Going Up</a>
                        </div>
                        <div className="work-item-main">
                            <img src={ArrowIcon} alt="Arrow Icon" />
                            <span>Developed during my time at Sanzza</span>
                        </div>
                    </div>
                    <div className="work-item col-12">
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