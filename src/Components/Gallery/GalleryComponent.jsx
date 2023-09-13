import React, { useEffect, useState } from 'react'
import Gallery_bg from '/public/assets/Gallery/Gallery_bg_all.png'
import './Gallery.css';
import ExpandedGallery from './ExpandedGallery';

function GalleryComponent(item) {
    const [isOpen, setIsOpen] = useState(false);

    let element = item.item;

    return (
        <>
            <div className='hovertag cursor-pointer flex flex-col items-center' style={{ width: '370px', marginRight: '8rem', minWidth: '400px' }} onClick={() => setIsOpen(true)}>
                <div className='gallerytag flex justify-center'>
                    <img className='imgbg' src={Gallery_bg} />
                    <img className='self-center' style={{ maxHeight: '80%', maxWidth: '80%', position: 'absolute' }} src={element.imageURL} alt='thumbnail' />
                </div>
                <h1 style={{ fontFamily: 'JetBrains Mono', fontSize: '2.5rem', marginTop: '2rem' }}>
                    {element.year}
                </h1>
            </div>
            {isOpen && (
                <ExpandedGallery show={isOpen} onClickOutside={() => setIsOpen(false)} pictures={element.pictures} year={element.year} />
            )}
        </>
    )
}

export default GalleryComponent