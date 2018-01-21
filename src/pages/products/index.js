import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router';
import {Menu, Popover, Icon} from 'antd';
import {navList} from 'utils/config';
import './index.less';

const curr_nav_list = navList[1].children;

class Products extends Component {
  static contextTypes = {
    isMobile: PropTypes.bool.isRequired,
  } 

  constructor() {
    super();
    this.state = {
 
    }
  }

  renderNav(activeMenuItem) {
    return <Menu
      style={{ width: 256 }}
      selectedKeys={[activeMenuItem]}
      mode="inline"
    >
      {curr_nav_list.map((item, i) => <Menu.Item key={item.key}>
        <Link to={item.href}>{item.name}</Link>
      </Menu.Item> )}
    </Menu>
  }

  render() {
    const {children} = this.props;
    const {isMobile} = this.context;
    const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(-1).join('');
    let activeMenuItem = module || 'publics';
    // console.log(activeMenuItem)

    return (
      <div className="wj-products">
        <div className="wj-top-bg">
          <img src={require('public/products/banner.png')} alt=""/>
        </div>
        <div className="wj-products-content">
          <div className='wj-products-nav'>
            {isMobile ? <Popover 
              arrowPointAtCenter
              placement="bottomRight"
              trigger="click"
              content={<div className='popover__nav'>{this.renderNav(activeMenuItem)}</div>} 
              title="">
              <Icon type="bars"/>
            </Popover> : this.renderNav(activeMenuItem)}
          </div>
          {children}
        </div>
        
      </div>
    )
  }
}

export default Products