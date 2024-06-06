# hmpl-loader

This loader was created for files with the `.hmpl` extension, which are converted using the [hmpl-js](https://github.com/hmpljs/hmpl) package. This loader is designed for webpack.

## Usage:

In the `webpack.config.js` file you can specify the following lines of code:

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.hmpl$/i,
        use: ["hmpl-loader"],
      }
    ]
  }
}
```

After `webpack.config.js` has been changed, in js files (for example, in `main.js`), you can import a file with the `.hmpl` extension and receive a [template function](https://hmpljs.github.io/#/?id=compile) in response.
