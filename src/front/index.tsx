/**
 * 前台 - 展示页面
 */

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { constants } from '@utils/index'

const FrontHome = () => {
  console.log(constants)
  return <div>Front Home</div>
}

ReactDOM.render(
  <StrictMode>
    <FrontHome />
  </StrictMode>,
  document.getElementById('index-root'),
)
