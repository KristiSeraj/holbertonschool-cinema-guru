import React, { useState } from 'react';

const Image = ({ imageUrl, fallBackUrl }) => {
    const [imageSrc, setImageSrc] = useState(imageUrl);

    const handleImageError = () => {
        setImageSrc(fallBackUrl);
    }
    return (
        <img src={imageSrc} onError={handleImageError} alt='Movie Cover'/>
    );
}
 
export default Image;