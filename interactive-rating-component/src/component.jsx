import React from 'react';

function Component() { 
    return (
        <div id="component-container"> 
        
            <img className="star-icon" src="images/icon-star.svg" alt="star icon" />

            <article>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </article>

            <section className="circle-container">
                <span className="circle">1</span>
                <span className="circle">2</span>
                <span className="circle">3</span>
                <span className="circle">4</span>
                <span className="circle">5</span>
            </section>
            
            <button>Submit</button>
        </div>        
    );
}

export default Component;