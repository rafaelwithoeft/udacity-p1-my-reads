import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Badge extends Component {
    static propTypes = {
        message: PropTypes.any.isRequired
    }

    render() {
        const { message } = this.props;
        
        return (
            <span className="badge badge-primary">{message}</span>
        )
    }
}

export default Badge