import React from 'react';
import './shop-item.styles.scss';

const ShopItem = ({item, routeName, title})=>{
    return(
        <>
        <div className="shop-item">
            <div className="item-image" style={{backgroundImage:`url(${item.imageUrl})`}}></div>
            <div className="shop-item-footer">
                <div className="name">{item.name}</div>
                <div className="price">{item.price}</div>
            </div>
        </div>
        </>
    ); 
}

export default ShopItem;