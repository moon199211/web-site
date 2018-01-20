/**
 * some config
 */
var apiBaseUrl = '/'

if(process.env.NODE_ENV == 'development') {
  apiBaseUrl = '/'
}

var NAV_LIST = [{
  name: '首页',
  key: 'home',
  href: '/home'
}, {
  name: '产品介绍',
  key: 'products',
  href: '/products'
}, {
  name: '解决方案',
  key: 'solutions',
  href: '/solutions'
}, {
  name: '关于我们',
  key: 'about',
  href: '/about'
}]

module.exports = {
  apiBaseUrl,
  systemName: '万界数据',
  PName: '/',
  navList: NAV_LIST,
}