const path = require("path")

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: path.resolve(`./custom-babel-plugin/replace-useGet-return.js`),
    options: {},
  })
}
