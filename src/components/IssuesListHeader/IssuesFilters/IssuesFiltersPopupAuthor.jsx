import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Octicon from 'react-component-octicons'

import { changeSelectedIssueAuthor } from 'Actions/issueFiltersActions'

@connect((store) => {
  return {
    author: store.author,
    filters: store.filters
  }
})
export default class IssuesFiltersPopupAuthor extends React.Component {
  changeSelectedIssueAuthor (id) {
    this.props.dispatch(changeSelectedIssueAuthor(id))
    this.props.closeFn()
  }

  render () {
    const { author, filters } = this.props
    let filteredAuthor = filters.issueFilterInputText !== '' ? author.items.filter(item => item.login.toLowerCase().indexOf(filters.issueFilterInputText.toLowerCase()) !== -1) : author.items

    return (
      <div
        data-filterable-for='author-filter-field'
        data-filterable-type='substring'>
        {
          filteredAuthor.map((item, i) => (
              <a
                key={i}
                href='javascript:void(0)'
                className={`select-menu-item ${item.id === filters.selectedIssueAuthor ? 'selected' : ''}`}
                onClick={this.changeSelectedIssueAuthor.bind(this, item.id)}>
                <Octicon
                  name="check"
                  className='octicon octicon-check select-menu-item-icon'/>
                <div className='select-menu-item-gravatar'>
                  <img
                    alt={`@${item.login}`}
                    height='30'
                    src={item.avatar_url}
                    width='30' />
                </div>
                <div className='select-menu-item-text'>
                  {item.login}
                  
                  <span className='description-inline'>{/*username*/}</span>
                </div>
              </a>
          ))
        }
      </div>
    )
  }
}

IssuesFiltersPopupAuthor.propTypes = {
  closeFn: PropTypes.func.isRequired
}
