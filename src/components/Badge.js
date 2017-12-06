import React from 'react';
import PropTypes from 'prop-types';

const Badge = (props) => (
    <span className="badge badge-primary">{props.message}</span>
);

Badge.propTypes = {
    message: PropTypes.any.isRequired
}

export default Badge;