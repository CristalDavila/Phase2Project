import React from "react";
import ArtCard from "./ArtCard";

//maps out the data and breaks it up into images for the ArtCard component.

function ArtList({ drawings }) {
    return (
        <ul className="art-card">
            {drawings.map((drawing) => (
                <ArtCard key={drawing.id} drawing={drawing}> </ArtCard>
            ))}
        </ul>
    );
}

export default ArtList