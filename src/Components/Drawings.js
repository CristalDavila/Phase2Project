import React, { useState, useEffect } from 'react';
import ArtList from './ArtList';

//This started out labelled "ArtContainer." I updated it to Drawing so that it would show as "drawings"
// in my NavBar while keeping internal naming consistency. 

function Drawings() {
    const [drawings, setDrawings] = useState([]);
    
//GETS the data from the local server.

    useEffect(() => {
        fetch('http://localhost:3000/drawings')
            .then((r) => r.json())
            .then((draw) => {
                console.log(draw);
                setDrawings(draw);
            });
    }, []);

    return (

        <main>
            <ArtList drawings={drawings}  />
        </main>

    );
}

export default Drawings
