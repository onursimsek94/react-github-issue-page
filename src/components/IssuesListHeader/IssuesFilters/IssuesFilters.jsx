import React from 'react'
import { connect } from 'react-redux'
import Octicon from 'react-component-octicons'
import IssuesFiltersPopup from './IssuesFiltersPopup'

import { changeOpenedIssueFilterPopup, changeIssueFilterInputText } from 'Actions/issueFiltersActions'

@connect((store) => {
  return {
    filters: store.filters
  }
})
export default class IssuesFilters extends React.Component {
  constructor () {
    super()

    document.addEventListener('keydown', this.handleKeyDownEvent.bind(this))
  }

  handleKeyDownEvent (event) {
    if (event.keyCode === 27) {
      this.closeFilterPopup()
    }
  }

  openFilterPopup (title) {
    this.props.dispatch(changeOpenedIssueFilterPopup(title))
    this.props.dispatch(changeIssueFilterInputText(''))
  }

  closeFilterPopup () {
    this.props.dispatch(changeOpenedIssueFilterPopup(''))
  }

  render () {
    const { filters } = this.props
    const filterTitles = ['Author', 'Labels', 'Projects', 'Milestones', 'Assignee', 'Sort']

    return (
      <div className='table-list-header-toggle float-right'>
        {
          filterTitles.map((title, i) => (
              <div
                key={i}
                className='float-left select-menu'>
                <button
                  className='btn-link select-menu-button'
                  type='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                  data-hotkey=''
                  onClick={this.openFilterPopup.bind(this, title)}>
                  {title} <Octicon
                            name="triangle-down"
                            style={{height: '10px', marginTop: '4px'}}/>
                </button>
                {
                  (title === 'Author' || title === 'Labels') &&
                    <IssuesFiltersPopup
                      open={title === filters.openedIssueFilterPopup}
                      title={title}
                      closePopupFn={this.closeFilterPopup.bind(this)} />
                }
              </div>
          ))
        }
      </div>
    )
  }
}
