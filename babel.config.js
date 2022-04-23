/*
 * @Author: hhxy
 * @Date: 2022-04-23 14:01:55
 * @LastEditors: hhxy
 * @LastEditTime: 2022-04-23 14:01:56
 * @Description:
 * @Optimization:
 */
module.exports = {
  "presets": [
      [
          "@babel/preset-env",
          {
              /* Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS，导致 Rollup 的一些处理失败 */
              "modules": false
          }
      ]
  ],
  "plugins": [
      [
          // 与 babelHelpers: 'runtime' 配合使用
          "@babel/plugin-transform-runtime"
      ]
  ]
}
