
import './ServiceCard.css'

function Card({ title, description, imgAddress,nnn}) {
    return (
        <div id={nnn} className="ServiceParentClass">
            <div className="serviceCard">
                <img src={imgAddress} alt="nophoto" />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#">Learn More</a>
            </div>
        </div>

    );
}

export default Card;