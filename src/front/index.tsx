/**
 * 前台 - 展示页面
 */

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import FrontFooter from './components/Footer'
import FrontHeader from './components/Header'

const FrontHome = () => {
  return (
    <>
      <FrontHeader />
      <FrontFooter />
    </>
  )
}

ReactDOM.render(
  <StrictMode>
    <FrontHome />
  </StrictMode>,
  document.getElementById('index-root'),
)
