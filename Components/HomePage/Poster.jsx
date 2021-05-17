import React from 'react';
import Image from 'next/image';

function Poster() {
    return (
        <div className="poster">
            <h2 className="poster-title">Christine</h2>
            <h2 className="poster-title poster-title-2">Marvell</h2>
            <Image className="poster-image" src="/images/hello_trp.png" alt="Hello" width={350} height={500} />
        </div>
    )
}

export default Poster
