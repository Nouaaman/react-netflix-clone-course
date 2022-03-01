import React from 'react'
import Card from '../Card/Card'
import { ListInterface, MediaInterface } from "../../interfaces/interfaces";
import { Link } from 'react-router-dom'
import './List.css'


function List(props: ListInterface) {
    const { title, items } = props
    return (
        <article className='list'>
            <div className='title'>
                <Link to={'/'}><h2>{title}</h2></Link>&nbsp;&nbsp;
                <i className="fa-solid fa-angle-right icon"></i>
            </div>

            <div className="content">
                {
                    items.map((item: MediaInterface) => <Card item={item} key={item.id} />)
                }
            </div>
        </article>
    )
}

export default List