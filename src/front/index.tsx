/**
 * 前台 - 展示页面
 */

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import FrontHeader from './components/FrontHeader'

const FrontHome = () => {
    return <>
      <FrontHeader />
    </>
}

ReactDOM.render(
  <StrictMode>
    <FrontHome />
  </StrictMode>,
  document.getElementById('index-root'),
)
