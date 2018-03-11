import React from 'react'
import PropTypes from 'prop-types'
import Octicon from 'react-component-octicons'

export default class IssueStateIconComponent extends React.Component {
  render () {
    const { state } = this.props

    return (
      <div className='float-left pt-2 pl-3'>
        <span
          className='tooltipped tooltipped-n'
          aria-label='Open issue'>
          {
            state === 'open' &&
            <Octicon
              name='issue-opened'
              className='octicon octicon-issue-opened open' />
          }
          {
            state === 'closed' &&
            <Octicon
              name='issue-closed'
              className='octicon octicon-issue-closed closed' />
          }
        </span>
      </div>
    )
  }
}

IssueStateIconComponent.defaultProps = {
  state: ''
}

IssueStateIconComponent.propTypes = {
  state: PropTypes.string.isRequired
}
