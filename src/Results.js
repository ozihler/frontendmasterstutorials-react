import React from 'react';
import Pet from './Pet';
// One way data flow parent => child. No data flow child => parent!
// It's intentionally difficult to go back up! You should usually NOT go up again!
const Results = ({pets}) => {
    return (
        <div className="search">
            {!pets.length ? <h1>No Pets Found</h1> : (pets.map(pet => (
                <Pet
                    animal={pet.type}
                    key={pet.id}
                    name={pet.name}
                    breed={pet.breeds.primary}
                    media={pet.photos}
                    location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                    id={pet.id}
                />
            )))}
        </div>
    );
}

export default Results;
