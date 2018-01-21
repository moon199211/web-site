import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Card, Row, Col, Carousel, Divider, Button } from 'antd'
import './index.less'

class Home extends Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="wj-home">
        <Row>
          <Col xs={24} className='wj-home-carousel' key='0'>
            <Carousel effect="fade" autoplay>
              <div>
                <div className='carousel-list carousel-bg-1'>
                  <img src={require('public/home/banner1.png')} alt=""/>
                </div>
              </div>
              <div>
                <div className='carousel-list carousel-bg-2'>
                  <img src={require('public/home/banner2.png')} alt=""/>
                </div>
              </div>
              <div>
                <div className='carousel-list carousel-bg-3'>
                  <img src={require('public/home/banner3.png')} alt=""/>
                </div>
              </div>
              <div>
                <div className='carousel-list carousel-bg-4'>
                  <img src={require('public/home/banner4.png')} alt=""/>
                </div>
              </div> 
            </Carousel>
          </Col>
          <Col xs={24} className='wj-home-products' key='1'>
            <div className='t-center'>
              <Divider>
                <span style={{fontSize: 24}}>产品服务</span><br/>
                <span style={{color: '#666', fontSize: 14}}>PRODUCTS&nbsp;SERVICE</span>
              </Divider>
            </div>
            <div className="home-products-tag clear-float">
              <Row gutter={48}>
                <Col md={8} xs={24}>
                  <div className="home-products-tag-box">
                    <div className="home-init-tag">
                      <div className="init-top">
                        <div className='init-top-content tag-1'>
                          <h3>公安大数据</h3>
                        </div>                        
                      </div>
                      <ul className="init-footer">
                        <li className="list-circle">流动人群分析&nbsp;&nbsp;帮助舆情辅助</li>
                        <li className="list-circle">区域人群摸底&nbsp;&nbsp;帮助治安布控</li>
                      </ul>
                    </div>
                    <div className="home-hover-tag">
                      <div className="hover-top">
                        <div className="tag-1 hover-top-center">
                          <h3>公安大数据</h3>
                        </div>                        
                      </div>
                      <div className="hover-footer">
                        <p><img src={require('public/home/tag-icon-1.png')} alt=""/>&nbsp;&nbsp;<b>公安大数据</b></p>
                        <p className="article-box">万界目前已与运营商、航空、铁路、银联、司法等行业领导企业进行合作，将行业和政府数据打通，通过人工智能深度学习和传统模型精耕细作形成出警、治安、监控一整套公安大数据解决方案。</p>
                        <div className="t-center" style={{marginTop: 36}}>
                          <Button type="primary" ghost onClick={() => browserHistory.push('/products/publics')}>立即查看</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={8} xs={24}>
                  <div className="home-products-tag-box">
                    <div className="home-init-tag">
                      <div className="init-top">
                        <div className='init-top-content tag-2'>
                          <h3>政务大数据</h3>
                        </div>                        
                      </div>
                      <ul className="init-footer">
                        <li className="list-circle">提升政务便捷化、智慧化、安全化</li>
                        <li className="list-circle">实现数据整合、数据共享、智慧政务</li>
                      </ul>
                    </div>
                    <div className="home-hover-tag">
                      <div className="hover-top">
                        <div className="tag-2 hover-top-center">
                          <h3>政务大数据</h3>
                        </div>                        
                      </div>
                      <div className="hover-footer">
                        <p><img src={require('public/home/tag-icon-2.png')} alt=""/>&nbsp;&nbsp;<b>政务大数据</b></p>
                        <p className="article-box">建设统一的信息共享平台，实现“一数一源、一源多用、多元校核”，推进政务数据资源开放共享和数据应用。牢固夯实“互联网+政务服务”基础。</p>
                        <div className="t-center" style={{marginTop: 36}}>
                          <Button type="primary" ghost onClick={() => browserHistory.push('/products/governments')}>立即查看</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={8} xs={24}>
                  <div className="home-products-tag-box">
                    <div className="home-init-tag">
                      <div className="init-top">
                        <div className='init-top-content tag-3'>
                          <h3>反欺诈</h3>
                        </div>                        
                      </div>
                      <ul className="init-footer">
                        <li className="list-circle">多维度数据来源</li>
                        <li className="list-circle">更精准用户模型</li>
                      </ul>
                    </div>
                    <div className="home-hover-tag">
                      <div className="hover-top">
                        <div className="tag-1 hover-top-center">
                          <h3>反欺诈</h3>
                        </div>                        
                      </div>
                      <div className="hover-footer">
                        <p><img src={require('public/home/tag-icon-3.png')} alt=""/>&nbsp;&nbsp;<b>反欺诈</b></p>
                        <p className="article-box">万界反欺诈平台提供了7*24的数据反欺诈服务，帮助金融机构全面实现互联网化审批，加快审批流程，提高客户体验，同时基于规则引擎和大数据技术，全方位防控信贷欺诈，提前预知欺诈风险，通过数据标签特征筛选出优质目标人群，降低欺诈风险。</p>
                        <div className="t-center" style={{marginTop: 36}}>
                          <Button type="primary" ghost onClick={() => browserHistory.push('/products/finances')}>立即查看</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} className='wj-home-data' key='2'>
            <img src={require('public/home/data-avg.png')} alt=""/>
          </Col>
          <Col xs={22} offset={1} className='wj-home-partner' key='3'>
            <div className='t-center'>
              <Divider>
                <span style={{fontSize: 24}}>合作伙伴</span><br/>
                <span style={{color: '#666', fontSize: 14}}>DATA&nbsp;PARTNER</span>
              </Divider>
            </div>
            <p className="t-center" style={{marginTop: 50}}>携手共赢，开创新业务，获取技术、资源，实现更快速成长</p>
            <ScrollOverPack playScale="0.3">
            <QueueAnim
              component={Row}
              key="queue"
              type="bottom"
              ease={['easeOutQuart', 'easeInQuart']}
              leaveReverse gutter={48}>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='0'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-1.png')} alt=""/>
                </div>                
              </Col>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='1'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-2.png')} alt=""/>
                </div>
              </Col>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='2'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-3.png')} alt=""/>
                </div>
              </Col>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='3'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-4.png')} alt=""/>
                </div>
              </Col>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='4'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-5.png')} alt=""/>
                </div>
              </Col>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='5'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-6.png')} alt=""/>
                </div>
              </Col>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='6'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-7.png')} alt=""/>
                </div>
              </Col>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='7'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-8.png')} alt=""/>
                </div>
              </Col>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='8'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-9.png')} alt=""/>
                </div>
              </Col>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='9'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-10.png')} alt=""/>
                </div>
              </Col>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='10'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-11.png')} alt=""/>
                </div>
              </Col>
              <Col lg={4} md={8} sm={8} xs={12} className='partner-logo' key='11'>
                <div className="partner-logo-box">
                  <img src={require('public/home/p-12.png')} alt=""/>
                </div>
              </Col>
            </QueueAnim>
            </ScrollOverPack>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home