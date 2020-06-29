import React from 'react';
import pet from '@frontendmasters/pet';

class Details extends React.Component {

    constructor(props) { // you have to call super(props) always!!
        super(props); //this.props comes from parent. It's immutable
        this.state = {loading: true} // initial state, gets overridden later after componentDidMount
        console.log("props ", props);
    }

    componentDidMount() { // like useEffect, but only done once. useEffect does it every time again
        // this is used for ajax requests
        console.log(this.props.id)
        pet.animal(this.props.id) // props is read-only! Comes from parent.
            .then(({animal}) => // if you put "function" here, what is "this"? it's in a new context. In an arrow function, the context is the same. "this" is the same
                this.setState({
                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city}, 
                            ${animal.contact.address.state}`,
                    description: animal.description,
                    media: animal.photos,
                    breed: animal.breeds.primary,
                    loading: false // loading state
                }), console.error); // won't get deprecated! You need to know both classes and functions (hooks)
    }

    render() {
        // needs a render method!
        if (this.state.loading) {
            return <h1>loading ... </h1>;
        }
        const {animal, breed, location, description, name} = this.state; // pulls variables from state
        return (
            <div className="details">
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

export default Details;
