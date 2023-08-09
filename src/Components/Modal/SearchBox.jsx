import React from 'react'
import "./style.css"

export default function SearchBox({title}) {
    return (
        <div className='modal-search-container'>
            <img src="/assets/modal/lock.png" alt=""  className='modal-search-img'/>
            <div>{title}</div>
            <img src="/assets/modal/refresh.png" alt=""  className='modal-search-img'/>
        </div>
    )
}
