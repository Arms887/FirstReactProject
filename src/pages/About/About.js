import "./About.css"
import BgCover from "../../components/BgCover/BgCover";
import BlackBlock from "../../components/BlackBlock/BlackBlock";
import Card from "../../components/Card/Card"
import Button from "../../components/UI/Button/Button";
import SectionFiveCard from "../../components/SectionFiveCard/SectionFiveCard";
function About() {
    const drivenBlocks = [
        { classNameContentWidth: "widthContent", className: "flexBlackBlock", img: "./assets/img/Icon.png", title: "Skilled Technicians", desc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet. Cras elementum enim tellus rhoncus convallis vitae." },
        { classNameContentWidth: "widthContent", className: "flexBlackBlock", img: "./assets/img/Icon(1).png", title: "Fast & Reliable Service", desc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet. Cras elementum enim tellus rhoncus convallis vitae." },
        { classNameContentWidth: "widthContent", className: "flexBlackBlock", img: "./assets/img/Icon (2).png", title: "Transparent Pricing", desc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet. Cras elementum enim tellus rhoncus convallis vitae." }
    ]
    const cards = [
        { cardTitle: "The Beginning", cardDesc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet.", cardImg: "./assets/img/Image.png" },
        { cardTitle: "Growth & Expansion", cardDesc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet.", cardImg: "./assets/img/Image.png" },
        { cardTitle: "Leading in Auto Repair", cardDesc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet.", cardImg: "./assets/img/Image.png" }
    ]
    const sectionFourCards = [
        { classNameContentWidth: "widthContent", className: "flexBlackBlock2", img: "./assets/img/Icon.png", title: "Skilled Technicians", desc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet. Cras elementum enim tellus rhoncus convallis vitae." },
        { classNameContentWidth: "widthContent", className: "flexBlackBlock2", img: "./assets/img/Icon(1).png", title: "Fast & Reliable Service", desc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet. Cras elementum enim tellus rhoncus convallis vitae." },
        { classNameContentWidth: "widthContent", className: "flexBlackBlock2", img: "./assets/img/Icon (2).png", title: "Transparent Pricing", desc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet. Cras elementum enim tellus rhoncus convallis vitae." },
        { classNameContentWidth: "widthContent", className: "flexBlackBlock2", img: "./assets/img/Icon.png", title: "Skilled Technicians", desc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet. Cras elementum enim tellus rhoncus convallis vitae." },
        { classNameContentWidth: "widthContent", className: "flexBlackBlock2", img: "./assets/img/Icon(1).png", title: "Fast & Reliable Service", desc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet. Cras elementum enim tellus rhoncus convallis vitae." },
        { classNameContentWidth: "widthContent", className: "flexBlackBlock2", img: "./assets/img/Icon (2).png", title: "Transparent Pricing", desc: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet. Cras elementum enim tellus rhoncus convallis vitae." }
    ]
    const sectionFiveCards = [
        { imgUrl: "./assets/img/maxresdefault.jpg", title: "Ignacio Lang" , mitq: "Founder & Lead Mechanic"},
        { imgUrl: "./assets/img/maxresdefault (1).jpg", title: "Ignacio Lang" , mitq: "Founder & Lead Mechanic"},
        { imgUrl: "./assets/img/i (1).webp", title: "Ignacio Lang" , mitq: "Founder & Lead Mechanic"}
    ]
    return (
        <div>
            <BgCover pageTitle="About Us" classNameCover="aboutCover" />
            <section className="sectionOne">
                <div className="container">
                    <div className="sectionOneBlocks">
                        <div className="onePart">
                            <span>Driven by Excellence</span>
                            <h2>Quality Auto Care, Every Mile</h2>
                            <p>Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet. Cras elementum enim tellus rhoncus convallis vitae.</p>
                        </div>
                        <div className="twoPart">
                            {drivenBlocks.map((item, index) => {
                                return <BlackBlock classNameContent={item.classNameContentWidth} className={item.className} title={item.title} imgSrc={item.img} desc={item.desc} />
                            })}
                        </div>
                    </div>
                    <img className="aboutBottom" src="./assets/img/pexels-mikebirdy-1104764.jpg" alt="" />
                </div>
            </section>
            <section className="sectionTwo">
                <div className="container">
                    <div className="titleBlock">
                        <span>From Garage to Greatness</span>
                        <h2>A Journey of Excellence in Auto Care</h2>
                    </div>
                    <div className="cards">
                        {cards.map((item, index) => (
                            <Card title={item.cardTitle} description={item.cardDesc} imgAddress={item.cardImg} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="SectionThree">
                <div className="container">
                    <div className="sectionThreeContent">
                        <div className="sectionThreeLeft">
                            <p>Our Vision</p>
                            <p>Ignacio Lang</p>
                        </div>
                        <div className="sectionThreeRight">
                            <p>To be the most trusted auto repair service, delivering precision, reliability, and exceptional customer satisfaction</p>
                            <p>Founder & Lead Mechanic</p>
                        </div>
                        <img src="./assets/img/i.webp" alt="fotobmw" />
                    </div>
                    <div className="sectionThreeContentBottom">
                        <div>
                            <p>34K +</p>
                            <p>Happy Customers</p>
                        </div>
                        <div>
                            <p>210 +</p>
                            <p>Oil Changes Weekly</p>
                        </div>
                        <div>
                            <p>54K +</p>
                            <p>Genuine Parts Stocked</p>
                        </div>
                        <div>
                            <p>80K +</p>
                            <p>Cars Repaired</p>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className="sectionFour">
                <div className="container">
                <div className="titleBlock">
                        <span>Integrity in Every Fix</span>
                        <h2>Committed to Your Safety and Satisfaction</h2>
                    </div>
                    <div className="sectionFourContent">
                {sectionFourCards.map((item, index) => {
                                return <BlackBlock classNameContent={item.classNameContentWidth} className={item.className} title={item.title} imgSrc={item.img} desc={item.desc} />
                            })}
                </div>
                </div>
            </section>
            <section className="sectionFive">
                <div className="container">
                    <div className="sectionFiveTop">
                        <p className="sectFivetitle">Meet Our Experts</p>
                        <div className="sectFivediv">
                            <p>A Team Committed to Quality Service</p>
                            <Button btnContent={"Join Our Team"}/>
                        </div>
                    </div>
                    <div className="sectionFiveBottom">
                    {sectionFiveCards.map((item, index) => {
    return <SectionFiveCard key={index} title={item.title} description={item.mitq} imgAddress={item.imgUrl} />;
})}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
