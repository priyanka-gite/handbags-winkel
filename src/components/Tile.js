import React from "react";


function Tile (props) {
    console.log(props)
    return (
        <section >
            <h2 >  {props.title} </h2>
            <img src={props.image} alt={props.alt}/>
            {<p> {props.description}</p>}
        </section>
    )
}

export default Tile;