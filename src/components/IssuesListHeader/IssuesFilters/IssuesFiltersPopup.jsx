import React from 'react'
import PropTypes from 'prop-types'
import IssuesFiltersPopupHeader from './IssuesFiltersPopupHeader'
import IssuesFiltersPopupInput from './IssuesFiltersPopupInput'
import IssuesFiltersPopupAuthor from './IssuesFiltersPopupAuthor'
import IssuesFiltersPopupLabels from './IssuesFiltersPopupLabels'

export default class IssuesFiltersPopup extends React.Component {
  render () {
    const { open, title, closePopupFn } = this.props
    return (
      <div
        className={`select-menu-modal-holder ${open ? 'active' : ''}`}
        aria-expanded='false'>
        <div className='select-menu-modal'>

          <IssuesFiltersPopupHeader
            title={title}
            closeFn={closePopupFn} />

          <div>
            <IssuesFiltersPopupInput placeholderText={title} />
            <div
              className='select-menu-list'
              data-filter={title.toLowerCase()}>
              {
                title === 'Author' &&
                <IssuesFiltersPopupAuthor
                  closeFn={closePopupFn} />
              }
              {
                title === 'Labels' &&
                <IssuesFiltersPopupLabels
                  closeFn={closePopupFn} />
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

IssuesFiltersPopup.defaultProps = {
  open: false,
  title: '',
  items: []
}

IssuesFiltersPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  closePopupFn: PropTypes.func
}
