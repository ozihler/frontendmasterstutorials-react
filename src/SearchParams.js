import React, {useEffect, useState} from 'react';
import pet, {ANIMALS} from '@frontendmasters/pet'
import useDropdown from "./useDropdown";
import Results from './Results';

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA'); // hook, all hooks start with 'use'
    // always in order! Always outside of if, for etc defined!
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds)
    const [pets, setPets] = useState([]);

    async function requestPets() {
        const {animals} = await pet.animals({
            location,
            breed,
            type: animal
        })

        setPets(animals || []);
    }

// u only need useEffect and useState (and maybe useRef). Don't need the rest in 90% of the times..
    // will be called after rendering
    useEffect(() => {
        setBreeds([]);
        setBreed("");
        pet.breeds(animal)
            .then(({breeds}) => {
                const breedStrings = breeds.map(({name}) => name);
                setBreeds(breedStrings);
            }, console.error);
    }, [animal, setBreeds, setBreed]) // input: runs useEffect again ONLY if animal, setBreeds, or setBreed changed.

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}>
                <label htmlFor="location">
                    Location
                    <input id="location"
                           value={location}
                           placeholder="Location"
                           onChange={e => setLocation(e.target.value)}/>
                </label>

                <AnimalDropdown/>
                <BreedDropdown/>

                <button>Submit</button>

            </form>
            <Results pets={pets}/>
        </div>
    );
};

export default SearchParams;
