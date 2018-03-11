import React from 'react'
import PropTypes from 'prop-types'

export default class IssueLabelsComponent extends React.Component {
  render () {
    const { labels } = this.props

    return (
      <span className='labels lh-default'>
        {
          labels.map((label, i) => (
              <a
                key={i}
                href='javascript:void(0)'
                className='d-inline-block IssueLabel v-align-text-top'
                style={{backgroundColor: `#${label.color}`, color: '#000'}}
                title={label.name}>
                {label.name}
              </a>
          ))
        }
      </span>
    )
  }
}

IssueLabelsComponent.defaultProps = {
  labels: []
}

IssueLabelsComponent.propTypes = {
  labels: PropTypes.array.isRequired
}
