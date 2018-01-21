import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import ReactDom from 'react-dom';
import {Row, Col, Timeline } from 'antd'
import './index.less';

class Publics extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="wj-publics">
        <div className="wj-publics-functions">
          <QueueAnim type="bottom" delay={150}>
            <h3 key='1' className="wj-publics-functions-title t-center wj-line-bottom">产品功能</h3>
            <Row className='wj-publics-functions-list'>
              <Col xs={24}>
                <Row>
                  <Col span={12} className='border-right wj-publics-function-box function-region' key='1'>
                    <p className="t-center">区域人口分析</p>
                    <p className="t-center">基于地区人口的分布情况、性别、消费、工作、出行、户籍地等信息进行区域人口分析，帮助寻找区域人口特点，方便进行区域人口管理。</p>
                  </Col>
                  <Col span={12} className='wj-publics-function-box function-feel' key='2'>
                    <p className="t-center">舆情辅助定位</p>
                    <p className="t-center">根据警情发起人通信手机，实时、准确定位其所在区域。</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={24}>
                <Row>
                  <Col span={12} className='border-right wj-publics-function-box function-examine' key='1'>
                    <p className="t-center">人口核查</p>
                    <p className="t-center">基于三网的数据服务，帮助进行职住能力的分析，帮助公安部门核验一标三实多年沉淀的数据。同时进行有效的治安防范。</p>
                  </Col>
                  <Col span={12} className='wj-publics-function-box function-float' key='2'>
                    <p className="t-center">流动人口管理</p>
                    <p className="t-center">针对流动人口，动态判断流动人口聚集地、根据驻留时间、来源城市、工作地等信息，进行流动人口管理、治安防范工作。</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </QueueAnim>
        </div>
        <div className="wj-publics-avg">
          <div className="publics-avg-list">
            <Row>
              <Col md={14} xs={24} key='1'>
                <img src={require('public/products/publics-avg.png')} alt="反欺诈优势"/>
              </Col>
              <Col md={10} xs={24} key='2'>
                <h3 className="wj-publics-functions-title t-center wj-line-bottom">产品优势</h3>
                <Timeline type='bottom' style={{marginTop: 48}}>
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

export default Publics