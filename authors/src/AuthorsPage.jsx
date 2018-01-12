import React from 'react';
import AuthorList from './AuthorList';
import Header from './Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthorNotification from './AuthorNotification';
import { getAuthors } from './actionCreators';

class Authors extends React.Component {
    componentDidMount() {
        this.props.getAllAuthors();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="jumbotron">
                    <div className="container">
                        <h1>Authors</h1>
                        <Link className="btn btn-dark" to="/authors/manageAuthor">
                            Add Author
                        </Link>
                        <AuthorList authors={this.props.authors} />
                    </div>
                </div>
                {(this.props.location.state || {}).notifyAuthor ? <AuthorNotification /> : <div />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authors: state.authors
});

const mapDispatchToProps = dispatch => ({
    getAllAuthors() {
        dispatch(getAuthors());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Authors);
