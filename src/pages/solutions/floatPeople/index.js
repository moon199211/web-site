import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './index.less';

class FloatPeople extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="wj-float-people">
        <div className="wj-float-functions">
          <h3 className="wj-float-functions-title t-center wj-line-bottom">流动人口管理</h3>
          <Row className='wj-float-functions-list'>
            <Col md={10} xs={24}>
              <img src={require('public/solutions/poors/first.png')} alt="精准识别"/>
            </Col>
            <Col md={14} xs={24}>
              <p className='article-box' style={{paddingTop: 100}}>
                流动人口管理作为公安治安管理的重要课题，公安机关有着流动人口摸底、流动人口分析、流动人口登记注册、突发事件防范等需求，基于运营商、航空、铁路、公路等多维度数据，可以快速识别流动人群，并能够有效接触到流动人群，对流动人口进行数据分析，进行动态管理。
              </p>
            </Col>
          </Row>
        </div>
        <div className="wj-float-ways">
          <h3 className='wj-float-functions-title t-center wj-line-bottom'>解决方案</h3>
          <div className="ways-list">
            <p className="article-box">及时识别流动人口，并针对流动人口数据进行统计分析，帮助公安部门进行人口核查，减少人口核查工作量，同时提供流动人口特点分析，聚集地地图标注，事件预防预警等有效加强治安防范。</p>
            <img src={require('public/solutions/floatPeople/floatPeopleBg.png')} alt="" />
          </div>
        </div>
        <div className="wj-float-methods">
          <Row gutter={32}>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/floatPeople/ywqt2.png')} alt=""/>
              <span>信息全面覆盖</span>
            </Col>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/floatPeople/hlsjzy2.png')} alt=""/>
              <span>动态数据统计</span>
            </Col>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/floatPeople/hydt2.png')} alt=""/>
              <span>系统稳定</span>
            </Col>
            <Col md={12} xs={24}>
              <img src={require('public/solutions/floatPeople/dsjzzyx2.png')} alt=""/>
              <span>智能预警</span>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default FloatPeople