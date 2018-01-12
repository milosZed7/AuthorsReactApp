import React from 'react';
import TextInput from './TextInput';

const AuthorForm = props => (
    <div>
        <form onSubmit={props.handleSubmit}>
            <TextInput
                name="firstName"
                label="First Name"
                value={props.author.firstName}
                placeholder="First Name"
                onChange={props.handleAuthor}
                error={props.errors.firstName}
            />
            <TextInput
                name="lastName"
                label="Last Name"
                value={props.author.lastName}
                placeholder="Last Name"
                onChange={props.handleAuthor}
                error={props.errors.lastName}
            />
            <input type="submit" value="Save" className="btn btn-dark" />
        </form>
    </div>
);

export default AuthorForm;
