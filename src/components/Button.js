import React from 'react';

function Button(props) {
    return (
        <button
            type="button"
            onClick={()=>console.log(props.buttonText)}
            disabled={props.disabled} >
            {props.buttonText}
        </button>

    );
}

export default Button;

 //use tobeDisabled