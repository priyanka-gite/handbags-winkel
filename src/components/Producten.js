import React from 'react';

function Producten(props) {
       return (
        <article>
            <span>{props.spanText}</span>
            <img src={props.image} alt={props.pText}/>            <p>{props.pText}</p>
            <h4>{props.bagPrice}</h4>
        </article>

    );
}
export default Producten;