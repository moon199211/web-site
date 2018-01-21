import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './index.less';

class BlockChain extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="wj-blook-chain">
        <div className="wj-block-functions">
          <h3 className="wj-block-functions-title t-center wj-line-bottom">基于区块链的数据共享</h3>
          <Row className='wj-block-functions-list'>
            <Col md={10} xs={24}>
              <img src={require('public/solutions/blockchain/first.png')} alt="精准识别"/>
            </Col>
            <Col md={14} xs={24}>
              <p className='article-box' style={{paddingTop: 100}}>
              基于区域链块的数据共享针对数据流通环节中“利益不清、通道不畅”这两大痛点，提出了基于可信区块链打造可信大数据智能共享平台这一解决方案。此平台由“可信区块链、超导网络、智能大数据服务、三流合一”四个主要技术部分组成，保障大数据共享的各个环节的数据可信、交易可信、监管可信，再提高数据传输性能的同时，提供大数据智能分析，打造安全、便捷的数据共享平台。
              </p>
            </Col>
          </Row>
        </div>
        <div className="wj-block-ways">
          <h3 className='wj-block-functions-title t-center wj-line-bottom'>解决方案</h3>
          <div className="ways-list">
            <p className="article-box">万界数据整合各方数据信息，建立数据共享平台，数据主要金融、司法、三网等；基于区域链款的数据共享，采用区域链块技术，以节点形式进行数据存储，保证各代理商顺利进行数据访问，实现数据资源共享。</p>
            <img src={require('public/solutions/blockchain/flow.png')} alt="" />
          </div>
        </div>
        <div className="wj-block-methods">
          <Row gutter={32}>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/blockchain/qzfxpj1.png')} alt=""/>
              <span>丰富经验模型、专家模型</span>
            </Col>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/floatPeople/hydt1.png')} alt=""/>
              <span>数据响应速度快</span>
            </Col>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/blockchain/gw1.png')} alt=""/>
              <span>模型准确性检测</span>
            </Col>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/blockchain/dhcs1.png')} alt=""/>
              <span>自动化部署</span>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default BlockChain