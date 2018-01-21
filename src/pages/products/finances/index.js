import React, {Component} from 'react';
import {Row, Col, Timeline } from 'antd'
import './index.less';

class Finances extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="wj-finances">
        <div className="wj-finances-functions">
          <h3 className="wj-finances-functions-title t-center wj-line-bottom">产品功能</h3>
          <Row className='wj-finances-functions-list'>
            <Col md={14} xs={24}>
              <h3 className="list-circle">反欺诈平台</h3>
              <p className='article-box'>
                万界反欺诈平台提供了7*24的数据反欺诈服务，帮助金融机构全面实现互联网化审批，加快审批流程，提高客户体验，同时基于规则引擎和大数据技术，全方位防控信贷欺诈，提前预知欺诈风险，通过数据标签特征筛选出油脂目标人群，降低欺诈风险。
              </p>
              <p className='article-box'>
                通过对全网欺诈行为的监控、收集、分析，形成欺诈情报，并从攻击者的角度学习欺诈分子的策略、技术、流程，同盾可以及时预警潜在的针对客户的欺诈风险。并且积累行业经验，为后续的持续对抗提供帮助。通过积累情报形成行业报告，为后续的防范方向提供权威参考。
              </p>
            </Col>
            <Col md={10} xs={24}>
              <img src={require('public/products/finances-function.png')} alt="反欺诈优势"/>
            </Col>
          </Row>
        </div>
        <div className="wj-finances-avg">
          <div className="finances-avg-list">
            <Row>
              <Col md={14} xs={24}>
                <img src={require('public/products/finances-avg.png')} alt="反欺诈优势"/>
              </Col>
              <Col md={10} xs={24}>
                <h3 className="wj-finances-functions-title wj-line-bottom t-center">产品优势</h3>
                <Timeline style={{marginTop: 48}}>
                  <Timeline.Item color='#ec6941'>提供标准化数据服务</Timeline.Item>
                  <Timeline.Item color='#ec6941'>业务快速接入</Timeline.Item>
                  <Timeline.Item color='#ec6941'>可视化平台</Timeline.Item>
                  <Timeline.Item color='#ec6941'>全面安全防范</Timeline.Item>
                </Timeline>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Finances