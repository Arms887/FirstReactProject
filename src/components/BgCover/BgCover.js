
import './BgCover.css'
function BgCover({pageTitle, classNameCover}) {
    return (
        <div className={classNameCover}>
            <h1>{pageTitle}</h1>
        </div>
    );
}

export default BgCover;
