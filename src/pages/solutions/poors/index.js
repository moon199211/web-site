import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './index.less';

class Poors extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="wj-poors">
        <div className="wj-poors-functions">
          <h3 className="wj-poors-functions-title t-center wj-line-bottom">贫困人口精准识别</h3>
          <Row className='wj-poors-functions-list'>
            <Col md={14} xs={24}>
              <p className='article-box' style={{paddingTop: 100}}>
                通过对被扶对象的房产、车辆、人社、工商、林地、农机、家庭成员等维度进行分析比对，判断被扶对象是否符合“十一种人”，在此基础上，补充联通运营商数据维度，如：位置分析、空间分析、互联网行为分析、偏好分析的数据进行综合分析，精准的识别出被扶对象是否符合扶贫资格。并通过法人、高管的身份证可以实现企业数据和个人数据的打通，在扶持资金到位后，通过监控企业经营情况，关联企业之间的交易情况以及法人、高管的行为信息和消费信息，了解扶持资金的使用途径和使用目的。
              </p>
            </Col>
            <Col md={10} xs={24}>
              <img src={require('public/solutions/poors/first.png')} alt="精准识别"/>
            </Col>
          </Row>
        </div>
        <div className="wj-poors-ways">
          <h3 className='wj-poors-functions-title t-center wj-line-bottom'>解决方案</h3>
          <div className="ways-list">
            <img src={require('public/solutions/poors/poors.png')} alt="" />
            <p className="way-1 way-p">通过对被扶对象的工商、税务、营收、法人等维度进行分析比对，做出精准识别，为扶持对象的建档立卡提供依据；</p>
            <p className="way-2 way-p">科学分析致贫原因，有针对性制定扶贫政策。</p>
            <p className="way-3 way-p">“两不愁、三保障、人均年收入”的维度综合挖掘贫困户是否满足退出条件</p>
          </div>
        </div>
        <div className="wj-poors-methods">
          <Row gutter={32}>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/poors/yhxxsh1.png')} alt=""/>
              <span>贫困鉴定</span>
            </Col>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/poors/fqz1.png')} alt=""/>
              <span>致贫原因数据分析</span>
            </Col>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/poors/hyxydt1.png')} alt=""/>
              <span>政策实施效果</span>
            </Col>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/poors/zjdj1.png')} alt=""/>
              <span>扶贫退出</span>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Poors