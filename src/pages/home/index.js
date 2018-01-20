import React, { Component } from 'react'
import {Link} from 'react-router'
import { Card, Row, Col, Carousel, Divider } from 'antd'
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
          <Col xs={24} className='wj-home-carousel'>
            <Carousel effect="fade" autoplay>
              <div>
                <div className='carousel-list carousel-bg-1'>
                  <div className="carousel-text carousel-text-left">
                    <h2>公安大数据</h2>
                    <Divider style={{width: 60}}/>
                    <p>人工智能深度学习+传统模型深耕细作</p>
                  </div>
                </div>
              </div> 
              <div>
                <div className='carousel-list carousel-bg-2'>
                  <div className="carousel-text carousel-text-left">
                    <p>专家规则、算法相结合多维度数据验证服务</p>
                    <Divider style={{width: 60}}/>
                    <h2>万界数据反欺诈平台</h2>
                    <Divider style={{width: 60}}/>
                    <p>信用贷款、抵押贷款、消费金融、七大场景定制风控模型</p>
                    <p>上百条专家规则、千万级数据支持</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='carousel-list carousel-bg-3'>
                 <div className="carousel-text carousel-text-top">
                    <h2>政务大数据</h2>
                    <Divider style={{width: 60}}/>
                    <p>多场景支持、适用于政务数据治理的各个方面</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='carousel-list carousel-bg-4'>
                  <div className="carousel-text carousel-text-left">
                    <h2 style={{textAlign: 'center'}}>
                      2018年<br/>
                      数据服务全面升级
                    </h2>
                    <Divider style={{width: 60}}/>
                    <ul className='carousel-text-ul clear-float'>
                      <li>全面航空数据体系</li>
                      <li>覆盖全网的运营商资产体系</li>
                      <li>用户全息画像服务</li>
                      <li>场景化专业数据服务</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Carousel>
          </Col>
          <Col xs={24} className='wj-home-products'>
            <div className='t-center'>
              <Divider>
                <span style={{fontSize: 24}}>产品服务</span><br/>
                <span style={{color: '#666', fontSize: 14}}>PRODUCTS&nbsp;SERVICE</span>
              </Divider>
            </div>
            <Row className="home-products-tag clear-float">
              <Col span={6} offset={2} className="home-products-tag-box"></Col>
              <Col span={6} offset={1} className="home-products-tag-box"></Col>
              <Col span={6} offset={1} className="home-products-tag-box"></Col>
            </Row>
          </Col>
          <Col xs={24} className='wj-home-data'>
            <div className='t-center'>
              <Divider style={{color: '#fff'}}>
                <span style={{fontSize: 24}}>数据优势</span><br/>
                <span style={{color: '#fff', fontSize: 14}}>DATA&nbsp;ADVANTAGE</span>
              </Divider>
            </div>
            <p className='wj-home-data-avg-info'>
              公司融合了三网信息数据、航空、金融、铁路、消费、司法、保险等多行业信息，提供跨行业的数据支持帮助政府、公安、银行、国企等提供数据服务
            </p>
            <ul className='wj-home-data-avg-list'>
              <li>根据不同业务体系，提供定制化调查服务</li>
              <li>根据数据特点，进行人群特点分析</li>
              <li>有效的舆情辅助</li>
              <li>人群精准定位</li>
            </ul>
          </Col>
          <Col xs={24}>
          
          </Col>
        </Row>        
      </div>
    )
  }
}

export default Home