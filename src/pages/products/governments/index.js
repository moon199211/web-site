import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import ReactDom from 'react-dom';
import {Row, Col} from 'antd';
import './index.less';

class Governments extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="wj-governments">
        <div className="wj-governments-functions">
          <QueueAnim type="bottom" delay={150}>
            <h3 className="wj-governments-functions-title t-center wj-line-bottom" key='1'>产品介绍</h3>
            <Row className='wj-governments-functions-list'>
              <Col md={14} xs={24}>
                <p className='article-box' style={{paddingTop: 100}}>
                  收集整理各部门数据，进行统一存储处理，建立政务大数据基础，为政务各级各单位提供全面信息化、运行保障和信息安全服务。建立统一的数据共享平台，夯实“互联网+政务服务”基础，建设政务云平台，支持政府各个部门协调合作，信息共享。充分利用政务云优势，推荐惠民服务。
                </p>
              </Col>
              <Col md={10} xs={24}>
                <img src={require('public/products/governments-avg.png')} alt="反欺诈优势"/>
              </Col>
            </Row>
          </QueueAnim>
        </div>
        <div className="wj-governments-avg">
          <div className="governments-avg-list">
            <Row>
              <Col xs={24}>
                <h3 className="wj-governments-functions-title wj-line-bottom t-center">产品功能</h3>
                <Row gutter={24}>
                  <Col md={8} xs={24} className='g-f-box g-f-1'>
                    <p className="t-center">政务云</p>
                    <p>建立覆盖政府各个部门的数据共享体系，包含社保、水电、教育信息、医疗信息、交通路况、公安、人口普查、城市建设、交通等多个方面的信息平台，帮助政府提升公共服务能力，加强交通管理、治安管理，引发民生大数据开发应用的新高潮。</p>
                  </Col>
                  <Col md={8} xs={24} className='g-f-box g-f-2'>
                    <p className="t-center">精准识别</p>
                    <p>在政务大数据基础上，运用大数据思维和手段，通过自主研发的大数据支撑平台对政府侧各委办局数据及运营商数据进行建模及交叉分析，以实现精准扶贫中的“六个精准”，贯通省、市、县、乡、村、户六级产品体系，最终通过多种终端进行展示和使用。</p>
                  </Col>
                  <Col md={8} xs={24} className='g-f-box g-f-3'>
                    <p className="t-center">社会信用体系建设</p>
                    <p>从多方角度出发，建立完善的公共信用体系、企业信用体系和个人信用体系。目前已成功建立个人信贷评估体系、企业信用评估体系。</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Governments