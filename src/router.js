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
          }} breadcrumbName="产品介绍">
            <IndexRedirect to={PName + "/products/publics"} />
            <Route path='publics'  getComponent={(location, cb) => {
              require.ensure([], require => {
                cb(null, require('./pages/products/publics/').default)
              })
            }} breadcrumbName="公安大数据"/>
            <Route path='governments'  getComponent={(location, cb) => {
              require.ensure([], require => {
                cb(null, require('./pages/products/governments/').default)
              })
            }} breadcrumbName="政务大数据"/>
            <Route path='finances'  getComponent={(location, cb) => {
              require.ensure([], require => {
                cb(null, require('./pages/products/finances/').default)
              })
            }} breadcrumbName="金融反欺诈"/>
          </Route>
          <Route path='solutions'  getComponent={(location, cb) => {
            require.ensure([], require => {
              cb(null, require('./pages/solutions/').default)
            })
          }} breadcrumbName="解决方案">
            <IndexRedirect to={PName + "/solutions/poors"} />
            <Route path='floatPeople'  getComponent={(location, cb) => {
              require.ensure([], require => {
                cb(null, require('./pages/solutions/floatPeople/').default)
              })
            }} breadcrumbName="流动人口管理"/>
            <Route path='poors'  getComponent={(location, cb) => {
              require.ensure([], require => {
                cb(null, require('./pages/solutions/poors/').default)
              })
            }} breadcrumbName="精准扶贫"/>
            <Route path='blockchain'  getComponent={(location, cb) => {
              require.ensure([], require => {
                cb(null, require('./pages/solutions/blockchain/').default)
              })
            }} breadcrumbName="区块链数据共享"/>
          </Route>
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
