import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import { Layout } from 'antd'
import './index.less'

const { Content } = Layout;

const scrollbarWidth = (() => {
  const scrollDiv = document.createElement('div')
  const body = document.body

  scrollDiv.className = 'scrollbar-measure'
  body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  body.removeChild(scrollDiv)

  return scrollbarWidth
})() 

class Body extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  render() {
    const { children } = this.props;
    const body_width = document.body.clientWidth;

    return (
      <Content className="body" style={{width: body_width}}>
        {children}
      </Content>
    )
  }
}

export default Body