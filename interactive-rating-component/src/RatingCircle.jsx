import React, {useState} from 'react'


const Circle = (props) =>{
    return(
        <li style={{backgroundColor: props.test ? "hsl(25, 97%, 53%)": ""}} className="circle">{props.num}</li> 
    )
}

const RatingCircle = () =>{ 
    
    const[background, setBackground] = useState(false)

    const changeBG = () => {
        setBackground(true)
    }


    const circles = [1, 2, 3, 4, 5];    
    const createCircles = (circles) => { 
        return(

            <Circle 
            num={circles}
            test={background} />
        )
    }


    return(
        <ul onClick={changeBG} className="circle-container">
            {circles.map(createCircles)}
        </ul>   
    )
}

export default RatingCircle