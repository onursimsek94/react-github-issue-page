import React from 'react'
import { connect } from 'react-redux'
import IssuesListHeader from 'Components/IssuesListHeader/IssuesListHeader'
import IssuesListContent from 'Components/IssuesListContent/IssuesListContent'

import { fetchIssues } from 'Actions/issuesActions'
import { fetchAuthor } from 'Actions/authorActions'
import { fetchLabels } from 'Actions/labelsActions'

@connect((store) => {
  return {
    issues: store.issues,
    author: store.author,
    labels: store.labels,
    filters: store.filters
  }
})
export default class GithubIssues extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchIssues())
    this.props.dispatch(fetchAuthor())
    this.props.dispatch(fetchLabels())
  }

  render () {

    // const { issues, author, labels, filters } = this.props
    const { issues, filters } = this.props

    return (
      <div className='container'>
        <IssuesListHeader />
        <IssuesListContent
          issues={issues.items}
          authorFilter={filters.selectedIssueAuthor}
          labelsFilter={filters.selectedIssueLabels} />
      </div>
    )
  }
}
