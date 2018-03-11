import React from 'react'
import PropTypes from 'prop-types'
import Octicon from 'react-component-octicons'

export default class IssuesFiltersPopupHeader extends React.Component {
  render () {
    const { title, closeFn } = this.props

    return (
      <div className='select-menu-header'>
        <span onClick={closeFn}>
          <Octicon
            name='x'
            className='octicon close-button' />
        </span>
        <span className='select-menu-title'>
          Filter by {title.toLowerCase()}
        </span>
      </div>
    )
  }
}

IssuesFiltersPopupHeader.defaultProps = {
  title: ''
}

IssuesFiltersPopupHeader.propTypes = {
  title: PropTypes.string.isRequired,
  closeFn: PropTypes.func
}
