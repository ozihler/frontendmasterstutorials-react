import React from 'react';
import Pet from './Pet';
// One way data flow parent => child. No data flow child => parent!
// It's intentionally difficult to go back up! You should usually NOT go up again!
const Results = ({pets}) => {
    if (!pets.length) {
        return (
            <div className="search">
                {<h1>No Pets Found</h1>}
            </div>
        );
    } else {
        return (
            <div className="search">
                {pets.map(pet => (
                    <Pet
                        animal={pet.type}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breeds.primary}
                        media={pet.photos}
                        location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                        id={pet.id}
                    />
                ))}
            </div>
        );
    }
}

export default Results;
