import React from 'react'
import PropTypes from 'prop-types'

export default class IssueTitleComponent extends React.Component {
  render () {
    const { title, url } = this.props

    return (
      <a
        href={url}
        className='link-gray-dark v-align-middle no-underline h4'>
        {title}
      </a>
    )
  }
}

IssueTitleComponent.defaultProps = {
  title: '',
  url: ''
}

IssueTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
