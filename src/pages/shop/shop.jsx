// react imports
import React, {Component} from 'react';
// custom imports
import SHOP_DATA from './shop_data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
            shop_data : SHOP_DATA,
        }
    }

    render(){
        // {this.state.shop_data.map(({id, ...otherShopData})=>console.log(id));}
        return(
            <>
            <div className="shop-items">
                {
                    this.state.shop_data.map(({id, ...otherShopData})=><CollectionPreview key={id} {...otherShopData} />)
                    
                }
            </div>
            </>
        );
    }
}

export default Shop;