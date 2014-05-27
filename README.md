# mercury-jsx

[React](http://facebook.github.io/react/)'s JSX Transformer, tweaked to output
calls to [Mercury](http://github.com/Raynos/mercury)'s `h()` function in the
format it expects, with the tag name in a String and any children present
wrapped in an Array.

The current version of mercury-jsx is based on version 0.10.0 of React's JSX Transformer.

Put the following jsx pragma at the beginning of files you want to process:

```javascript
/** @jsx h */
```

Only output has been tweaked, but there's no special treatment for custom tag
names - the transformer will output a warning if it sees an unknown tag name
and output an `h()` call anyway.

Other than that, the rest of React's JSX documentation should still apply:

* [React | JSX in Depth](http://facebook.github.io/react/docs/jsx-in-depth.html)

### Command Line Usage

```
npm install -g mercury-jsx
```

```
mercury-jsx --watch src/ build/
```

Run `mercury-jsx --help` for more information.

### Module Usage

```
npm install mercury-jsx
```

```javascript
var msx = require('mercury-jsx')
```

#### Module API

##### `msx.transform(source)`

Transforms XML-like syntax in the given source into native JavaScript function
calls using Mercury's `h()` function, returning the transformed source.

### Examples

Example inputs and outputs are in [test/jsx](https://github.com/insin/msx/tree/master/test/jsx)
and [test/js](https://github.com/insin/msx/tree/master/test/js), respectively.

An example [gulpfile.js](https://github.com/insin/msx/blob/master/gulpfile.js) is
provided, which implements an `msxTransform()` function using `msx.transform()`.

---

Apache 2.0 Licensed, as per React
