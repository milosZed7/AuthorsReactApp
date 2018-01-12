import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import App from './App';
import About from './About';
import Authors from './AuthorsPage';
import NotFound from './NotFound';
import ManageAuthor from './ManageAuthor';

const RootApp = () => (
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={About} />
                <Route exact path="/authors" component={Authors} />
                <Route exact path="/authors/manageAuthor" component={ManageAuthor} />
                <Route exact path="/authors/manageAuthor/:id" component={ManageAuthor} />
                <Redirect from="/about-us" to="/about" />
                <Redirect from="/about/*" to="/about" />
                <Redirect from="/awthors" to="/authors" />
                <Route component={NotFound} />
            </Switch>
        </Provider>
    </BrowserRouter>
);

const render = () => {
    ReactDOM.render(<RootApp />, document.getElementById('root'));
};

export default render;
