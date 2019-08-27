import React, {Component} from 'react';
import {MenuItem} from '../menu-item/menu-item';
import './directory.styles.scss';

export class Directory extends Component{
    constructor()
    {
        super();
        this.state = {
            sections:[
                {
                    id:1,
                    title:"CASUAL CLOTHING",
                    image_link:'http://www.millattrade.com/wp-content/uploads/2015/05/Mens-Jeans-Banner.jpg'
                },
                {
                    id:2,
                    title:"SNEAKERS",
                    image_link:'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg'
                },
                {
                    id:3,
                    title:"JACKETS",
                    image_link:'https://amp.businessinsider.com/images/581ba8f046e27a20008b475b-1334-667.jpg'
                },
                {
                    id:4,
                    title:"MEN",
                    image_link:'https://cdn.pixabay.com/photo/2018/02/08/11/54/male-3139289_960_720.jpg'
                },
                {
                    id:5,
                    title:"WOMEN",
                    image_link:'https://images.pexels.com/photos/1326887/pexels-photo-1326887.jpeg?cs=srgb&dl=beautiful-beauty-cute-1326887.jpg&fm=jpg'
                }
            ] 
        }
    }

    render(){
        return(
            <>
            <div className="space">
            <div className='directory-menu'>
                {
                    this.state.sections.map(section=>(
                    <MenuItem title={section.title} key={section.id} image_link={section.image_link}/>
                    ))
                }
            </div>
            </div>
            </>
        );
    };
}