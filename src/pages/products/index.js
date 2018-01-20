import React, {Component} from 'react';
import {Link} from 'react-router';
import {Menu} from 'antd';
import {navList} from 'utils/config';
import './index.less';

const curr_nav_list = navList[1].children;

class Products extends Component {
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

    const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(-1).join('');
    let activeMenuItem = module || 'publics';
    // console.log(activeMenuItem)

    return (
      <div className="wj-products">
        <div className="wj-top-bg"></div>
        <div className="wj-products-content">
          <div className='wj-products-nav'>
            {this.renderNav(activeMenuItem)}
          </div>
          {children}
        </div>
      </div>
    )
  }
}

export default Products