/**
 * antd theme config
 */

const default_color = '#108ee9'

module.exports = () => {
  return {
    'primary-color': default_color,
    'link-color': default_color,
    'border-radius-base': '3px',    
    'menu-collapsed-width': '70px',
    'font-size-base': '14px',
  }; 
};

// const fs = require('fs')
// const path = require('path')
// const lessToJs = require('less-vars-to-js')

// module.exports = () => {
//   const themePath = path.join(__dirname, './src/utiles/style/theme.less')
//   return lessToJs(fs.readFileSync(themePath, 'utf8'))
// }
