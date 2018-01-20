/**
 * 前端路由配置
 */

import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, browserHistory} from 'react-router'
import auth from 'utils/auth'
import {PName} from 'utils/config';
import App from './pages/app/'

// 用户登录验证
function requireAuth(nextState, replace) {
  const path = nextState.location.pathname

}

export default class RouterList extends Component{
	render() {
		return (
			<Router
        history={browserHistory}
      >
        <Route path={PName}
          onEnter={(...args) => {
          requireAuth(...args)
        }}
        component={App} 
        breadcrumbName="/">
          <IndexRedirect to={PName + "/home"} />
          <Route path='home' getComponent={(location, cb) => {
            require.ensure([], require => {
              cb(null, require('./pages/home/').default)
            })
          }}  breadcrumbName="首页"/>
          <Route path='products'  getComponent={(location, cb) => {
            require.ensure([], require => {
              cb(null, require('./pages/products/').default)
            })
          }} breadcrumbName="产品介绍"/>
          <Route path='solutions'  getComponent={(location, cb) => {
            require.ensure([], require => {
              cb(null, require('./pages/solutions/').default)
            })
          }} breadcrumbName="解决方案"/>
          <Route path='about'  getComponent={(location, cb) => {
            require.ensure([], require => {
              cb(null, require('./pages/about/').default)
            })
          }} breadcrumbName="关于我们"/>
          <Route path="*" getComponent={(location, cb) => {
            require.ensure([], require => {
              cb(null, require('./pages/notFound/').default)
            })
          }} />
        </Route>
      </Router>
		)
	}
}
