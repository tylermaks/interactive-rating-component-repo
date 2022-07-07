import React, {useState} from 'react';
import RatingPage from "./RatingPage"
import ThankYou from "./ThankYou"

function InteractiveRating() { 
    const[submit, setSubmit] = useState(false)
    const[selector, setSelector] = useState('')
    
    const handleSubmit = () =>{
         setSubmit(true)
    }

    return (
        <div id="component-container"> 
            {submit ? <ThankYou ratingNum={selector} /> : <RatingPage clicked={handleSubmit} setRatingNum ={setSelector} />}
        </div>        
    );
}

export default InteractiveRating;