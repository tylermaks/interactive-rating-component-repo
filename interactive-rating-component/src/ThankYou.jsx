import React from "react"

const ThankYou = (props) => {
    return(
        <div className="rating-page rating-page--center">
            <img className="mobile-img" src="images/illustration-thank-you.svg" alt="Mobile Phone with Credit Card" />
       
            <p className="selected-text">You selected {props.ratingNum} out of 5</p>
       
            <article className="thankyou-text">
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </article>
        </div>
    );
}

export default ThankYou;