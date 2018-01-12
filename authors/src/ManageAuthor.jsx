import React from 'react';
import Header from './Header';
import AuthorForm from './AuthorForm';
import AuthorApi from './api/authorApi';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthorErrors, setAuthorData, getAuthorById, resetAuthor } from './actionCreators';

class ManageAuthor extends React.Component {
    componentWillMount() {
        const authorId = this.props.match.params.id;
        authorId && this.props.getAuthor(authorId);
    }
    componentWillUnmount() {
        this.props.resetAuthorInputs();
    }
    submitForm = event => {
        event.preventDefault();
        const errorObject = this.getFormErrors();
        if (errorObject.firstName || errorObject.lastName) {
            this.props.setErrors(errorObject);
            return;
        }
        AuthorApi.saveAuthor(this.props.author);
        this.props.history.push('/authors', { notifyAuthor: true });
    };
    getFormErrors = () => {
        const err = { firstName: '', lastName: '' };
        if (this.props.author.firstName.length < 3) {
            err.firstName = 'First name must be at least 3 characters.';
        }
        if (this.props.author.lastName.length < 3) {
            err.lastName = 'Last name must be at least 3 characters.';
        }

        return err;
    };
    render() {
        return (
            <div>
                <Header />
                <div className="jumbotron">
                    <div className="container">
                        <h1>Manage Author</h1>
                        <AuthorForm
                            author={this.props.author}
                            handleAuthor={this.props.setAuthorState}
                            handleSubmit={this.submitForm}
                            errors={this.props.errors}
                        />
                        <Link to="/authors" className="btn btn-link">
                            Back to List
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        errors: state.errors,
        author: state.author
    };
};

const mapDispatchToProps = dispatch => ({
    setAuthorState(event) {
        dispatch(setAuthorData(event.target.name, event.target.value));
    },
    setErrors(err) {
        dispatch(setAuthorErrors(err));
    },
    getAuthor(id) {
        dispatch(getAuthorById(id));
    },
    resetAuthorInputs() {
        dispatch(resetAuthor());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthor);
