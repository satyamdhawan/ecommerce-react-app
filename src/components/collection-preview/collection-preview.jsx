import React from 'react';
// custom imports
import ShopItem from '../shop-item/shop-item';
// css
import './collection-preview.styles.scss';

const CollectionPreview = ({items, title, routeName}) => {
    return(
        <>
        <div className="collection-preview">
            <h3>{title}</h3>
            <div className="preview">
            {
                items.filter((item, index)=>index<4).map((item)=>(<ShopItem key={item.id} item={item} title={title} routeName={routeName}/>))
            }
            </div>
        </div>
        </>
    )
}

export default CollectionPreview;