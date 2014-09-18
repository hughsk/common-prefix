# common-prefix [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Retrieve the common prefix across multiple strings.

## Usage

[![NPM](https://nodei.co/npm/common-prefix.png)](https://nodei.co/npm/common-prefix/)

### `str = common(strings)`

For example:

``` javascript
var common = require('common-prefix')

common([
    'hello world'
  , 'hello again'
  , 'hello once again'
]) === 'hello '
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/common-prefix/blob/master/LICENSE.md) for details.
