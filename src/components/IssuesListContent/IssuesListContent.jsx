import React from 'react'
import PropTypes from 'prop-types'
import IssueStateIconComponent from './IssueStateIconComponent'
import IssueTitleComponent from './IssueTitleComponent'
import IssueLabelsComponent from './IssueLabelsComponent'
import IssueDescriptionComponent from './IssueDescriptionComponent'
// import IssueAssignedUserComponent from './IssueAssignedUserComponent'
import IssueCommentsComponent from './IssueCommentsComponent'

export default class IssuesListContent extends React.Component {
  pluck (array, key) {
    return array.map(o => o[key])
  }

  render () {
    let { issues, authorFilter, labelsFilter } = this.props

    if (authorFilter !== '') {
      issues = issues.filter(issue => issue.user.id === authorFilter)
    }

    if (labelsFilter.length !== 0) {
      issues = issues.filter(issue => this.pluck(issue.labels, 'id').sort().toString() === labelsFilter.sort().toString())
    }

    return (
      <div className='border-right border-bottom border-left issues-list-container'>
        <ul>

          {
            issues.map((issue, i) => (
                <li
                  key={i}
                  id={`issue_${issue.number}`}
                  className='Box-row Box-row--focus-gray p-0 read issue-list-item'
                  data-id={issue.id}>
                  <div className='d-table table-fixed width-full Box-row--drag-hide position-relative'>

                    <IssueStateIconComponent state={issue.state} />

                    <div className='float-left pt-2 pl-2' />

                    <div className='float-left col-9 lh-condensed p-2'>
                      <IssueTitleComponent
                        title={issue.title}
                        url={issue.html_url} />
                      <IssueLabelsComponent labels={issue.labels} />
                      <IssueDescriptionComponent
                        number={issue.number}
                        createdAt={issue.created_at}
                        username={issue.user.login} />
                    </div>

                    <div className='float-right col-2'>
                      {/* <IssueAssignedUserComponent/> */}
                      <IssueCommentsComponent
                        count={issue.comments}
                        url={issue.html_url} />
                    </div>

                  </div>
                </li>
            ))
          }

        </ul>
      </div>
    )
  }
}

IssuesListContent.defaultProps = {
  issues: [],
  authorFilter: '',
  labelsFilter: []
}

IssuesListContent.propTypes = {
  issues: PropTypes.array.isRequired,
  authorFilter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  labelsFilter: PropTypes.array
}
