import React from 'react';
import RatingCircle from "./RatingCircle"

function Container() { 

    return (
        <div id="component-container"> 

            <img className="star-icon circle" src="images/icon-star.svg" alt="star icon" />

            <article>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </article>

            <RatingCircle />
            
            <button>Submit</button>
        </div>        
    );
}

export default Container;