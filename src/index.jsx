import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import GithubIssues from 'Containers/GithubIssues'
import store from './store'

require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
/* require('../node_modules/primer/build/build.css') */
require('./style.css')

ReactDom.render(
  <Provider store={store}>
    <GithubIssues />
  </Provider>,
  document.getElementById('app')
)
