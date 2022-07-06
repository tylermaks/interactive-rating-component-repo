import React, {useState} from 'react';
import RatingPage from "./RatingPage"
import ThankYou from "./ThankYou"

function Container() { 
    const[submit, setSubmit] = useState(false)
    const[selector, setSelector] = useState('')
    
    const handleSubmit = () =>{
         setSubmit(true)
    }

    return (
        <div id="component-container"> 
            {submit ? <ThankYou ratingNum={selector} /> : <RatingPage clicked={handleSubmit} ratingNum ={setSelector} />}
        </div>        
    );
}

export default Container;