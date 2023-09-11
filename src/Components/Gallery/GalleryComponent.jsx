import React from 'react'
import Gallery_bg from '/public/assets/Gallery/Gallery_bg_all.png'
import './Gallery.css';
function GalleryComponent(item) {
    let element = item.item;
    return (
        <div className='hovertag cursor-pointer flex flex-col items-center' style={{ width: '370px', marginRight: '8rem', minWidth: '400px' }}>
            <div className='gallerytag flex justify-center'>
                <img className='imgbg' src={Gallery_bg} />
                <img className='self-center' style={{ height: '80%', position: 'absolute' }} src={element.imageURL} alt='tushar' />
            </div>
            <h1 style={{ fontFamily: 'JetBrains Mono', fontSize: '2.5rem', marginTop: '2rem' }}>
                {element.year}
            </h1>
        </div>
    )
}

export default GalleryComponent