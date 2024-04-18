import { sculptureList } from "@/data/article";
import { useState } from 'react';

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick(direction) {
        if (direction === 'next' && index < sculptureList.length - 1) {
            setIndex(index + 1);
        } else if (direction === 'prev' && index > 0) {
            setIndex(index - 1);
        }
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button
                onClick={() => handleClick('prev')} // Handle previous button click
                disabled={index === 0} // Disable button if at the beginning of sculptureList
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded">
                Artikel Sebelumnya
            </button>
            <button
                onClick={() => handleClick('next')} // Handle next button click
                disabled={index === sculptureList.length - 1} // Disable button if at the end of sculptureList
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded">
                Artikel Selanjutnya
            </button>
            <h2><i>{sculpture.name}</i> oleh {sculpture.artist}</h2>
            <h3>({index + 1} dari {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}
