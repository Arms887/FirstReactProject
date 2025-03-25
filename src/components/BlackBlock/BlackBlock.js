import "./BlackBlock.css"
function BlackBlock({ className, imgSrc, title, desc, classNameContent }) {
    return (
        <div className={className}>
            <div>
                <img src={imgSrc} alt="" />
                <h5>{title}</h5>
            </div>
            <div className={classNameContent}>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default BlackBlock;
