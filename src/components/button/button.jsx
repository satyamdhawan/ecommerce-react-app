import React from 'react';
//css
import './button.styles.scss';

const Button = ({input_class, value, ...otherButtonOptions}) => {
    return(
        <span className={otherButtonOptions.button_container_class}>
            <input className={input_class} value={`${value}`} {...otherButtonOptions}></input>
        </span>
    );
}

export default Button;