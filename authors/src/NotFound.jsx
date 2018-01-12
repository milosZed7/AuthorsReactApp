import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFound = () => (
    <div>
        <Header />
        <div className="jumbotron">
            <div className="container">
                <h1>Page Not Found</h1>
                <p>Whoops! Sorry, there is nothing to see here.</p>
                <Link to="/"> Back to Home</Link>
            </div>
        </div>
    </div>
);

export default NotFound;
