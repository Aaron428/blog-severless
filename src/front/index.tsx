/**
 * 前台 - 展示页面
 */

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import FrontFooter from './components/Footer'
import FrontCarousel from './components/FrontCarousel'
import GoodsService from './components/GoodsService'
import FrontHeader from './components/Header'
import 'antd/dist/antd.css';

const FrontHome = () => {
  return (
    <>
      <FrontHeader />
      <FrontCarousel />
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
