import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { changeIssueFilterInputText } from 'Actions/issueFiltersActions'

@connect((store) => {
  return {
    filters: store.filters
  }
})
export default class IssuesFiltersPopupInput extends React.Component {
  filterInputChange (event) {
    this.props.dispatch(changeIssueFilterInputText(event.target.value))
  }

  render () {
    const { placeholderText, filters } = this.props

    return (
      <div className='select-menu-filters'>
        <div className='select-menu-text-filter'>
          <input
            type='text'
            className='form-control'
            placeholder={`Filter ${placeholderText.toLowerCase()}`}
            aria-label={`Filter ${placeholderText.toLowerCase()}`}
            value={filters.issueFilterInputText}
            onChange={this.filterInputChange.bind(this)} />
        </div>
      </div>
    )
  }
}

IssuesFiltersPopupInput.defaultProps = {
  placeholderText: ''
}

IssuesFiltersPopupInput.propTypes = {
  placeholderText: PropTypes.string
}
