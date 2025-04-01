import BgCover from "../../components/BgCover/BgCover";
import "./Service.css"
import ServiceCard from "../../components/ServiceCards/ServiceCard";
import { useState } from "react";
function Service() {
    const ServiceCards = [
        { imgUrl: "./assets/img/car.png", title: "General Auto Repair" , mitq: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet."},
        { imgUrl: "./assets/img/car2.png", title: "Engine Diagnostics" , mitq: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet."},
        { imgUrl: "./assets/img/car3.png", title: "Battery Replacement" , mitq: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet."},
        { imgUrl: "./assets/img/car4.png", title: "Brake & Suspension" , mitq: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet."},
        { imgUrl: "./assets/img/car5.png", title: "Oil & Fluid Change" , mitq: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet."},
        { imgUrl: "./assets/img/car6.png", title: "Tire & Wheel Services" , mitq: "Ipsum ac quis leo volutpat eu integer. Non turpis vitae laoreet urna quis amet eget risus bibendum. Eget elementum non a aliquet."}
    ];
    const [post,setPost] = useState(0);
    return (
        <div>
            <BgCover pageTitle="Service Us" classNameCover="serviceCover" />
            <section className="sectionServiceOne">
            <div className="titleBlock">
                        <span>Expert Auto Repair</span>
                        <h2>Reliable Solutions for Every Vehicle</h2>
                    </div>
                    <div className="sectionServiceOneContent">
{ServiceCards.map((item,index) =>{
    return <ServiceCard nnn={index} title={item.title} description={item.mitq} imgAddress={item.imgUrl}/>
})}
                    </div>
            </section>
            <div>{post}</div>
            <button onClick={() => setPost(post + 1)}>count++</button>
        </div>
    );
}

export default Service;
