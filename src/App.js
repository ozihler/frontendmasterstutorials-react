import React from 'react';
import {render} from 'react-dom';
import {Link, Router} from '@reach/router';
import SearchParams from './SearchParams'
import Details from "./Details"; // specific exports: tree shaking will only include code that will ever run
// you need parcel > babel to use Jsx
// my code
const App = () => {
    // this is a component: returns markup > Composable Components
    // Rubber stamp called "App". Only useful when you want to use it. As many time as you want

    return (
        <React.StrictMode>
            <div>
                <header>
                    <Link to="/">Adopt me!</Link>
                </header>
                <Router>
                    <SearchParams path="/"/>
                    <Details path="/details/:id"/>
                </Router>
            </div>
        </React.StrictMode>
    );
};

render(
    <App/>, // renders component
    document.getElementById("root") // where to render it
);
