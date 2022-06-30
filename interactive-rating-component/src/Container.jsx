import React, {useState} from 'react';
import RatingPage from "./RatingPage"
import ThankYou from "./ThankYou"

function Container() { 
    const[submit, setSubmit] = useState(false)

    const handleSubmit = () =>{
         setSubmit(true)
    }

    return (
        <div id="component-container"> 
            {submit ? <ThankYou /> : <RatingPage clicked={handleSubmit}/>}
        </div>        
    );
}

export default Container;