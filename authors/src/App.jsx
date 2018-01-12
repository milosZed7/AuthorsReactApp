import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="jumbotron">
                    <div className="container">
                        <h1>React Administration</h1>
                        <p>React, React Router for ultra responsive web apps</p>
                        <Link to="/about" className="btn btn-dark btn-lg">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
