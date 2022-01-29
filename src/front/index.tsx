/**
 * 前台 - 展示页面
 */

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import FrontFooter from './components/Footer'
import GoodsService from './components/GoodsService'
import FrontHeader from './components/Header'

const FrontHome = () => {
  return (
    <>
      <FrontHeader />
      <GoodsService />
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
