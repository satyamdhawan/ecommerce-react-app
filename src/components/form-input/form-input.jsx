import React from 'react';
// css
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherFormFields}) => (
    <div className="group">
        {label?
            (<label className={`${otherFormFields.value.length? 'shrink' : ''} form-input-label`}>
            {label.toUpperCase()}
            </label>) 
            : null
        }
        <div>
            <input className="form-input" onChange={handleChange} {...otherFormFields}></input>
        </div>
    </div>
)

export default FormInput;