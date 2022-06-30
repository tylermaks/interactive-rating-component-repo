import React, {useState} from 'react'


const Circle = (props) =>{

    return(
        <li onClick={props.test1} className={"circle"} style={{backgroundColor: props.test2 ? "hsl(25, 97%, 53%)" : "", color: props.test2 ? "#FFF" : ""}}>
            {props.num}
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
                    id={index} 
                    num={circle} 
                    test1={() => setSelected(index)} 
                    test2={selected === index}
                />
            ))}
        </ul>   
    )
}

export default RatingCircle