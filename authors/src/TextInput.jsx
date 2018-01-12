import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => {
    let wrapperClass = 'form-group';
    if (props.error && props.error.length > 0) {
        wrapperClass += ` 'has-error'`;
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input
                    type="text"
                    name={props.name}
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                <div className="input">{props.error}</div>
            </div>
        </div>
    );
};

TextInput.defaultProps = {
    placeholder: '',
    error: '',
    value: ''
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
};
export default TextInput;
