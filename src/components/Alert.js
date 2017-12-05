import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Badge from './Badge'

class Alert extends Component {
    static propTypes = {
        classAlert: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        messageBadge: PropTypes.any,
    }

    render() {
        const { message, messageBadge, classAlert } = this.props;

        return (
            <div className="row">
                <div className="col-lg-12 mt-3">
                    <div className={classAlert} role="alert">
                        <h3 className="text-center font-weight-bold">
                            {message} {typeof messageBadge !== typeof undefined && <Badge message={messageBadge}/>}
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Alert