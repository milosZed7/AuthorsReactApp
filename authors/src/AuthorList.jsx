import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthorsList = props => {
    const createAuthorRow = author => {
        return (
            <tr key={author.id}>
                <td>
                    <Link to={`/authors/manageAuthor/${author.id}`}>{author.id}</Link>
                </td>
                <td>
                    {author.firstName} {author.lastName}
                </td>
            </tr>
        );
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>{props.authors.map(createAuthorRow)}</tbody>
        </table>
    );
};

AuthorsList.propTypes = {
    authors: PropTypes.array.isRequired
};

export default AuthorsList;
