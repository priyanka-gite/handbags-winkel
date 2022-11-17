import React from 'react';

function Button(props) {
    return (
        <button
            type="button"
            onClick={()=>console.log(props.buttonText)}
            disabled={props.toBeDisabled} >
            {props.buttonText}
        </button>


    );
}

export default Button;

 //use tobeDisabled