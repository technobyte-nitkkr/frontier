import React, { useState, Suspense, lazy } from 'react';
import Gallery_bg from '/assets/Gallery/Gallery_bg_all.png'
import './Gallery.css';

const ExpandedGallery = lazy(() => import('./ExpandedGallery'));


function GalleryComponent({item,className}) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className='hovertag cursor-pointer flex flex-col items-center md:min-w-[400px] min-w-[200px]' style={{ marginRight: '8rem' }} onClick={() => setIsOpen(true)}>
                <div className='gallerytag flex justify-center'>
                    <img className='imgbg' src={Gallery_bg} />
                    <img className='self-center' style={{ maxHeight: '80%', maxWidth: '80%', position: 'absolute' }} src={item.imageURL} alt='thumbnail' />
                </div>
                <h1 style={{ fontFamily: 'JetBrains Mono', fontSize: '2.5rem', marginTop: '2rem' }}>
                    {item.year}
                </h1>
            </div>
            {isOpen && (
                <Suspense fallback={<div>Loading...</div>}>
                    <ExpandedGallery show={isOpen} onClickOutside={() => setIsOpen(false)} pictures={item.pictures} year={item.year} />
                </Suspense>
            )}
        </>
    )
}

export default GalleryComponent