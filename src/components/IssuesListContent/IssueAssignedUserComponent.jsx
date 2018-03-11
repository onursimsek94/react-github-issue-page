import React from 'react'

// API'da assignee degeri null oldugu icin yapilamadi
export default class IssueAssignedUserComponent extends React.Component {
  render () {
    return (
      <div className='float-left col-7 pt-2 pr-3 text-right'>
        <div className='AvatarStack AvatarStack--right '>
          <div
            className='AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1'
            aria-label='Assigned to acdlite'>
            <a
              href='javascript:void(0)'
              aria-label="acdlite's assigned issues"
              className='avatar'>
              <img
                alt='@acdlite'
                className='from-avatar'
                height='20'
                src='https://avatars2.githubusercontent.com/u/3624098?s=40&amp;v=4'
                width='20' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
