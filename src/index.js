import React from 'react'
import ReactDom from 'react-dom'
import MyApp from './MyApp'
import * as serviceWorker from './serviceWorker'
ReactDom.render(
  <MyApp />,
  document.getElementById('root')
)
serviceWorker.unregister();
