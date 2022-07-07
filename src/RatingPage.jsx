import React from "react"
import RatingCircle from "./RatingCircle"

const RatingPage = (props) => {

    return(
        <div className="rating-page">

            <div className="circle">
                <img src="images/icon-star.svg" alt="star icon"/>
            </div>
                
            <article>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </article>

            <RatingCircle ratingNum={props.ratingNum}/>

            <button onClick={props.clicked}>Submit</button>
        </div>
    );
}

export default RatingPage;