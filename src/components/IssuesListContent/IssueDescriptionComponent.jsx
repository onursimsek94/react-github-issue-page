import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export default class IssueDescriptionComponent extends React.Component {
  render () {
    const { number, createdAt, username } = this.props

    return (
      <div className='mt-1 text-small text-gray'>
        <span className='opened-by'>
          #{number} opened {moment(createdAt).fromNow()} by
          <a
            href='javascript:void(0)'
            className='muted-link'>
            &nbsp;{username}
          </a>
        </span>

        <span className='issue-meta-section css-truncate issue-milestone ml-2' />
      </div>
    )
  }
}

IssueDescriptionComponent.defaultProps = {
  number: 0,
  createdAt: new Date().toString(),
  username: ''
}

IssueDescriptionComponent.propTypes = {
  number: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}
