import React from 'react';
import Header from './Header';

const About = prosp => {
    return (
        <div>
            <Header />
            <div className="jumbotron">
                <div className="container">
                    <h1>About</h1>
                    <p>This application uses the falowing technologies</p>
                    <ul>
                        <li>React</li>
                        <li>React Rauter</li>
                        <li>Node</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
