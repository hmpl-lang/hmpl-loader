# hmpl-loader

This loader was created for files with the `.hmpl` extension, which are converted using the [hmpl-js](https://github.com/hmpljs/hmpl) package. This loader is designed for webpack.

> Loader works with hmpl-js version 1.0.4 or higher

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

### main.hmpl
```hmpl
<div><request src="/api/test"></request></div>
```

### main.js
```javascript
const templateFn = require("./main.hmpl");

const elementObj = templateFn();
```
## Changelog

[Changelog](https://github.com/hmpljs/hmpl-loader/releases)

## License

[Licensed under MIT](https://github.com/hmpljs/hmpl-loader/blob/master/LICENSE)
