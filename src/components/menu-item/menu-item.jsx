// react imports
import React from 'react';
// css imports
import './menu-item.styles.scss';
//custom library imports
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,image_link,history,match})=>{
    return(
    <div 
        style={{backgroundImage:`url(${image_link})`}} 
        className="menu-item" 
        onClick={()=>history.push(`${match.url}${title.toLowerCase()}`)}>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    );
}
export default withRouter(MenuItem);