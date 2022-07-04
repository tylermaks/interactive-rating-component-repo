import React, {useState} from 'react'


const Circle = (props) =>{

    return(
        <li onClick={() => {props.setSelected(); props.ratingNum()}} className={"circle"} style={{backgroundColor: props.selected ? "hsl(25, 97%, 53%)" : "", color: props.selected ? "#FFF" : ""}}>
            {props.id}
        </li> 
    )
}

const RatingCircle = (props) =>{ 

    const[selected, setSelected] = useState(null)
    const circles = [1, 2, 3, 4, 5]; 

    return(
        <ul className="circle-container">
        
            {circles.map((circle, index) => (
                 <Circle 
                    key={index} 
                    id={circle} 
                    setSelected={() => setSelected(index)} 
                    selected={selected === index}
                    ratingNum={() => props.ratingNum(circle)}
                />
            ))}
        </ul>   
    )
}

export default RatingCircle