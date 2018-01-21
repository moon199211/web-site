import React, {Component} from 'react';
import {Divider, Row, Col} from 'antd';
import './index.less';

class About extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  componentDidMount() {
    this.beijing();
    this.shanghai();
  }

  beijing() {
    var map = new BMap.Map("map-bj");
    var point = new BMap.Point(116.49057, 39.998943);
    map.centerAndZoom(new BMap.Point(116.49057, 39.998943), 18);
    //	设置中心点的图标
    var vectorMarker = new BMap.Marker(new BMap.Point(116.49057, 39.998943), {
      // 初始化方向向上的闭合箭头
      icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
        scale: 1.2,
        strokeWeight: 1,
        rotation: 0,
        fillColor: 'red',
        fillOpacity: 0.8
      })
    });
    map.addOverlay(vectorMarker);
  
    function hide() {
      vectorMarker.hide();
    };
    map.centerAndZoom(point, 18);
    var opts = {
      width: 80, // 信息窗口宽度
      height: 50, // 信息窗口高度
      title: "方恒时代B座", // 信息窗口标题
      enableMessage: true, //设置允许信息窗发送短息
    }
    var infoWindow = new BMap.InfoWindow("508#万界数据", opts); // 创建信息窗口对象 
      map.openInfoWindow(infoWindow, point); //开启信息窗口
  }

  shanghai() {
    var map = new BMap.Map("map-sh");
    var point = new BMap.Point(121.476434, 31.224438);
    map.centerAndZoom(new BMap.Point(121.476434, 31.224438), 18);
    //	设置中心点的图标
    var vectorMarker = new BMap.Marker(new BMap.Point(121.476434, 31.224438), {
      // 初始化方向向上的闭合箭头
      icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
        scale: 1.2,
        strokeWeight: 1,
        rotation: 0,
        fillColor: 'red',
        fillOpacity: 0.8
      })
    });
    map.addOverlay(vectorMarker);
  
    function hide() {
      vectorMarker.hide();
    };
    map.centerAndZoom(point, 18);
    var opts = {
      width: 80, // 信息窗口宽度
      height: 50, // 信息窗口高度
      title: "雁荡大厦", // 信息窗口标题
      enableMessage: true, //设置允许信息窗发送短息
    }
    var infoWindow = new BMap.InfoWindow("雁荡路107号8楼G", opts); // 创建信息窗口对象 
      map.openInfoWindow(infoWindow, point); //开启信息窗口
  }
  
  render() {
     
    return (
      <div className="wj-about">
        <div className="wj-banner">
          <img src={require('public/about/aboutusbanner.png')} alt=""/>
        </div>
        <div className="wj-we">
          <Divider>
            <span style={{fontSize: 24}}>公司简介</span><br/>
            <span style={{color: '#666', fontSize: 14}}>COMPANY PROFILE</span>
          </Divider>
          <p>北京万界数据科技有限责任公司是一家大数据资产运营商，专注于大数据人工智能服务，通过整合航空、铁路、三网、金融、消费等多个领域的核心资源，政府、公安、银行、国企等提供专业化数据产品服务。</p>
          <p>我们目前的合作伙伴包括移动、联通、电信三网，上海银行、包商银行等多家商业银行、阳光信保等多家保险机构、航信、新华网、亚信、银联、法海等多家各领域内领先的企业，确保在数据的使用和服务上做到精准、专业和全面。</p>
          <p>公司创始团队拥有十多年的大数据服务经验，来自于各大央企和大型互联网公司。公司团队自组建以来，快速上线了一系列产品，专业的服务团队和高效的产品能力吸引了如新华网等一批优秀的合作伙伴，并得到了多家知名创投基金的关注和投资，目前我们获取到了多轮融资。</p>
          <p>我们致力于为各行业合作伙伴提供大数据人工智能服务，帮助合作伙伴定制专业化产品服务！</p>
        </div>
        <div className="wj-banner_2">    
          <img className="td_img" src={require("public/about/tdz.png")} />
          <i>Team&nbsp;Introduction</i>
          <div className="wj-blueBox">
            <h3>团队介绍</h3>
             <hr />
            <p>公司拥有一支富有丰富开发经验的技术团队，我们的团队成员均来自于金融互联公司，并具有多年的开发经验，目前公司的核心研发团队超过20人。团队长期从事数据挖掘研究、数据分析处理工作，具备强大的数据获取能力、工具产品能力以及商业洞察能力。</p>
           </div>
           
        </div>
        <div className="wj-callMeDiv">
          <Divider>
            <span style={{fontSize: 24}}>联系我们</span><br/>
            <span style={{color: '#666', fontSize: 14}}>CONTACT US</span>
          </Divider>
          <div className="wj-about-adress">
            <Row>
              <Col md={12} xs={24}>
                <p style={{fontSize: 16}}><img src={require('public/about/zuobian_03.png')} alt=""/>&nbsp;&nbsp;<b>北京公司</b></p>
                <ul className='adress-list-ul'>
                  <li>地址：北京市朝阳区望京街方恒时代B座508室</li>
                  <li>电话：18612508916</li>
                  <li>联系邮箱：wangxiaopeng@wanjiedata.com</li>
                </ul>
              </Col>
              <Col md={12} xs={24}>
                <div className="adress-map" id='map-bj'>
                
                </div> 
              </Col>
              <Col md={12} xs={24}>
                <p style={{fontSize: 16}}><img src={require('public/about/zuobian_03.png')} alt=""/>&nbsp;&nbsp;<b>上海公司</b></p>
                <ul className='adress-list-ul'>
                  <li>地址：上海市黄浦区雁荡路107号8楼G</li>
                  <li>电话：13524149994</li>
                  <li>联系邮箱：wangyang@wanjiedata.com</li>
                </ul>
              </Col>
              <Col md={12} xs={24}>
                <div className="adress-map" id='map-sh'>
                
                </div> 
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default About