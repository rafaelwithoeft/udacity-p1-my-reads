import React from 'react';
import PropTypes from 'prop-types';

import Badge from './Badge';

const Alert = (props) => (
    <div className="row">
        <div className="col-lg-12 mt-3">
            <div className={props.classAlert} role="alert">
                <h3 className="text-center font-weight-bold">
                    {props.message} {typeof props.messageBadge !== typeof undefined && <Badge message={props.messageBadge}/>}
                </h3>
            </div>
        </div>
    </div>
);

Alert.propTypes = {
    classAlert: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    messageBadge: PropTypes.any
}

export default Alert;