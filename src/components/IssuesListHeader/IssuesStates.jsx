import React from 'react'
import { connect } from 'react-redux'
import Octicon from 'react-component-octicons'

import { changeIssueState } from 'Actions/issueFiltersActions'

@connect((store) => {
  return {
    filters: store.filters
  }
})
export default class IssuesListHeader extends React.Component {
  changeState (state) {
    this.props.dispatch(changeIssueState(state))
  }

  shouldComponentUpdate(nextProps) {
    const { filters } = this.props
    
    if (filters.activeIssueState !== nextProps.filters.activeIssueState) {
      return true
    }
    return false
  }

  render () {
    const { filters } = this.props

    return (
      <div className='table-list-header-toggle states float-left pl-3'>
        <a
          href='javascript:void(0)'
          onClick={this.changeState.bind(this, 'open')}
          className={`btn-link ${filters.activeIssueState === 'open' ? 'selected' : ''}`}>
          <Octicon name='issue-opened'/> 342 Open
        </a>
        <a
          href='javascript:void(0)'
          onClick={this.changeState.bind(this, 'closed')}
          className={`btn-link ${filters.activeIssueState === 'closed' ? 'selected' : ''}`}>
          <Octicon name='check'/> 5,319 Closed
        </a>
      </div>
    )
  }
}
