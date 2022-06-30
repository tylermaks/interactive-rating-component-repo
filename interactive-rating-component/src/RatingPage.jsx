import React from "react"
import RatingCircle from "./RatingCircle"

const RatingPage = (props) => {

    return(
        <div className="rating-page">

            <img className="star-icon circle" src="images/icon-star.svg" alt="star icon" />

            <article>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </article>

            <RatingCircle/>

            <button onClick={props.clicked}>Submit</button>
        </div>
    );
}

export default RatingPage;