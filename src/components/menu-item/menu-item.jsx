import React from 'react';
import './menu-item.styles.scss';

export const MenuItem = ({title,image_link})=>{
    return(
    <div style={{backgroundImage:`url(${image_link})`}} className="menu-item">
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    );
}