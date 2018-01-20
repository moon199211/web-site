import React from 'react'
import './index.less'
import { Layout, Divider } from 'antd'

const { Footer } = Layout;

export default () => {
  return (
    <Footer className="footer">
      <footer>Copyright©万界数据<Divider type="vertical" />All&nbsp;Rights&nbsp;Reserved<Divider type="vertical" />隐私政策&nbsp;京ICP备16052378号-1</footer>
    </Footer>
  )
}