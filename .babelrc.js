const path = require("path")

module.exports = {
  plugins: [path.resolve("./custom-babel-plugin/replace-useGet-return.js")],
  presets: [
    [
      "babel-preset-gatsby",

      {
        targets: {
          browsers: [">0.25%", "not dead"],
        },
      },
    ],
  ],
}
