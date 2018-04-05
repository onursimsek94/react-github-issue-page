import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Octicon from 'react-component-octicons'

import { changeSelectedIssueLabels } from 'Actions/issueFiltersActions'

@connect((store) => {
  return {
    labels: store.labels,
    filters: store.filters
  }
})
export default class IssuesFiltersPopupLabels extends React.Component {
  changeSelectedIssueLabels (id) {
    this.props.dispatch(changeSelectedIssueLabels(id))
    this.props.closeFn()
  }

  render () {
    const { labels, filters } = this.props
    let filteredLabels = filters.issueFilterInputText !== '' ? labels.items.filter(item => item.name.toLowerCase().indexOf(filters.issueFilterInputText.toLowerCase()) !== -1) : labels.items

    return (
      <div
        data-filterable-for='author-filter-field'
        data-filterable-type='substring'>
        {
          filteredLabels.map((item, i) => (
              <a
                key={i}
                href='javascript:void(0)'
                className={`select-menu-item label-select-menu-item ${filters.selectedIssueLabels.includes(item.id) ? 'selected' : ''}`}
                onClick={this.changeSelectedIssueLabels.bind(this, item.id)}>
                <Octicon
                  name='check'
                  className='octicon octicon-check select-menu-item-icon'/>
                <div className='select-menu-item-text css-truncate'>
                  <div className='css-truncate-target'>
                    <span
                      className='label-box color'
                      style={{backgroundColor: `#${item.color}`}}>
                      &nbsp;
                    </span>
                    <span className='name'>
                      &nbsp;{item.name}
                    </span>
                  </div>
                </div>
              </a>
          ))
        }
      </div>
    )
  }
}

IssuesFiltersPopupLabels.propTypes = {
  closeFn: PropTypes.func.isRequired
}
