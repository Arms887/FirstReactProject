
import './Card.css'

function Card({ title, description, imgAddress }) {
    return (
        <div className="card">
            <img src={imgAddress} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Card;

