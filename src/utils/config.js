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
  href: '/products',
  children: [
    {
      name: '公安大数据',
      key: 'publics',
      href: '/products/publics'
    },
    {
      name: '政务大数据',
      key: 'governments',
      href: '/products/governments'
    },
    {
      name: '金融反欺诈',
      key: 'finances',
      href: '/products/finances'
    }
  ]
}, {
  name: '解决方案',
  key: 'solutions',
  href: '/solutions',
  children: [
    {
      name: '精准扶贫',
      key: 'poors',
      href: '/solutions/poors'
    },
    {
      name: '流动人口管理',
      key: 'floatPeople',
      href: '/solutions/floatPeople'
    },
    {
      name: '区块链数据共享',
      key: 'blockchain',
      href: '/solutions/blockchain'
    }
  ]
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