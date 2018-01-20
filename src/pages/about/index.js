import React, {Component} from 'react';
import './index.less';

class About extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  
  render() {
     
    return (
      <div className="wj-about">
        <div className="wj-banner">
          
        </div>
        <div className="wj-we">
          <h3 >公司简介</h3>
          <span>COMPANY&nbsp;PROFILE</span>
          <p>北京万界数据科技有限责任公司是一家大数据资产运营商，专注于大数据人工智能服务，通过整合航空、铁路、三网、金融、消费等多个领域的核心资源，政府、公安、银行、国企等提供专业化数据产品服务。</p>
          <p>我们目前的合作伙伴包括移动、联通、电信三网，上海银行、包商银行等多家商业银行、阳光信保等多家保险机构、航信、新华网、亚信、银联、法海等多家各领域内领先的企业，确保在数据的使用和服务上做到精准、专业和全面。</p>
          <p>公司创始团队拥有十多年的大数据服务经验，来自于各大央企和大型互联网公司。公司团队自组建以来，快速上线了一系列产品，专业的服务团队和高效的产品能力吸引了如新华网等一批优秀的合作伙伴，并得到了多家知名创投基金的关注和投资，目前我们获取到了多轮融资。</p>
          <p>我们致力于为各行业合作伙伴提供大数据人工智能服务，帮助合作伙伴定制专业化产品服务！</p>
        </div>
        <div class="wj-banner_2">    
          <img class="td_img" src="img/tdz.png" />
          <i>Team&nbsp;Introduction</i>
          <div class="wj-blueBox">
            <h3>团队介绍</h3>
             <hr />
            <p>公司拥有一支富有丰富开发经验的技术团队，我们的团队成员均来自于金融互联公司，并具有多年的开发经验，目前公司的核心研发团队超过20人。团队长期从事数据挖掘研究、数据分析处理工作，具备强大的数据获取能力、工具产品能力以及商业洞察能力。</p>
           </div>
           
        </div>
        <div class="wj-callMeDiv">
          
            <h3>联系我们</h3>
            <i>CONTACT&nbsp;US</i>
            <div class="wj-beijingDiv">
              <div class="wj-beijingLeft">
                <h5>北京公司</h5>
                <p>地址：北京市朝阳区望京街方恒时代B座508室</p>
                <p>电话：18612508916</p>
                <p>联系邮箱：wangxiaopeng@wanjiedata.com</p>
                <img src="img/zuobian_03.png" />
              </div>
              <div class="wj-beijingRight">
                <div id="allmap"></div>
              </div>
              <div class="wj-clear"></div>
            </div>
            <div class="wj-shanghaiDiv">
              <div class="wj-shanghaiLeft">
                <h5>上海公司</h5>
                <p>地址：上海市黄浦区雁荡路107号8楼G</p>
                <p>电话：13524149994</p>
                <p>联系邮箱：wangyang@wanjiedata.com</p>
                <img src="img/zuobian_03.png" />
              </div>
              <div class="wj-shanghaiRight">
                <div id="allmap2"></div>
              </div>
            </div>
            <div class="wj-shanghaiDiv-clear"></div>
        </div>
        
      </div>
    )
  }
}

export default About