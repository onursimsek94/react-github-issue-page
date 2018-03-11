import React from 'react'
import PropTypes from 'prop-types'
import Octicon from 'react-component-octicons'

export default class IssueCommentsComponent extends React.Component {
  render () {
    const { count, url } = this.props

    if (count !== 0) {
      return (
        <div className='float-right col-5 no-wrap pt-2 pr-3 text-right'>
          <a
            href={url}
            className='muted-link'
            aria-label={`${count} comments`}>
            <Octicon
              name='comment'
              className='octicon octicon-comment v-align-middle' />
            <span className='text-small text-bold'>{count}</span>
          </a>
        </div>
      )
    }
    return ''
  }
}

IssueCommentsComponent.defaultProps = {
  count: 0,
  url: ''
}

IssueCommentsComponent.propTypes = {
  count: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}
