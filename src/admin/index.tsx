/**
 * 后台 - 管理页面
 */

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import AdminHome from './component/Home'
import 'antd/dist/antd.css';

ReactDOM.render(
  <StrictMode>
    <AdminHome />
  </StrictMode>,
  document.getElementById('admin-root'),
)
