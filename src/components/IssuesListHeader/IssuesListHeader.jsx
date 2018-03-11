import React from 'react'
import IssuesStates from './IssuesStates'
import IssuesFilters from './IssuesFilters/IssuesFilters'

export default class IssuesListHeader extends React.Component {
  render () {
    return (
      <div className='table-list-header'>
        <div className='table-list-filters'>
          <IssuesStates />
          <IssuesFilters />
        </div>
      </div>
    )
  }
}
