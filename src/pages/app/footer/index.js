import React from 'react'
import './index.less'
import { Layout, Divider, Row, Col } from 'antd'

const { Footer } = Layout;

export default () => {
  return (
    <Footer className="footer">
      <footer>
        <Row>
          <Col span={6}>
            <ul>
              <li className='footer-top-title'>万界产品</li>
              <li>公安大数据</li>
              <li>政务大数据</li>
              <li>金融反欺诈</li>
            </ul>
          </Col>
          <Col span={6}>
            <ul>
              <li className='footer-top-title'>解决方案</li>
              <li>流动人口管理</li>
              <li>精准扶贫</li>
              <li>精准建模</li>
            </ul>
          </Col>
          <Col span={6}>
            <ul>
              <li className='footer-top-title'>关于我们</li>
              <li>公司简介</li>
              <li>团队介绍</li>
            </ul>
          </Col>
          <Col span={6}>
            <ul>
              <li className='footer-top-title'>联系我们</li>
              <li>联系电话：18612508916</li>
              <li>商务合作：hudongfeng@wanjiedata.com</li>
              <li>技术支持：support@wanjiedata.com</li>
              <li>办公地址：方恒时代b座508室</li>
            </ul>
          </Col>
        </Row>
        <Divider style={{backgroundColor: '#2c374d'}}/>
        <p className='t-center'>Copyright©万界数据<Divider type="vertical" />All&nbsp;Rights&nbsp;Reserved<Divider type="vertical" />隐私政策&nbsp;京ICP备16052378号-1</p>
      </footer>
    </Footer>
  )
}