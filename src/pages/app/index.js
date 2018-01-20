import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import { enquireScreen } from 'enquire-js';
import Head from './head'
import Body from './body/'
import Foot from './footer/'
import {Layout} from 'antd'
import './index.less'

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    isMobile
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  static childContextTypes = {
    isMobile: PropTypes.bool,
  };

  getChildContext() {
    return {
      isMobile: this.state.isMobile,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  render() {
    const { children, routes, params, location} = this.props

    // console.log(routes)
    let comment = <Layout  key="layout" className='layout-row'>
      <Layout  key="layout-content">
        <Head key="header" location={location}/>
        <Body key="body">
          {children}
        </Body>
        <Foot  key="footer"/>
      </Layout>
    </Layout>

    let main = [comment]

    return (
      <div className="wrapper">
        <Layout>
          {main}
        </Layout>          
      </div>
    )
  }
}

App.propTypes = {
  
};

export default App;
