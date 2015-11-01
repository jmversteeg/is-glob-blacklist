# is-glob-blacklist [![Build Status](https://travis-ci.org/jmversteeg/is-glob-blacklist.svg?branch=master)](https://travis-ci.org/jmversteeg/is-glob-blacklist)

> Detect whether an array of globs is a blacklist


## Install

```
$ npm install --save is-glob-blacklist
```


## Usage

```js
var isGlobBlacklist = require('is-glob-blacklist');

isGlobBlacklist(['foo']);
//=> false

isGlobBlacklist(['!foo']);
//=> true

isGlobBlacklist(['foo', '!foo/bar']);
//=> false

isGlobBlacklist(['!foo', 'foo/bar']);
//=> true
```


## API

### isGlobBlacklist(input)

#### input

Type: `string[]`

Array of globs.

## License

MIT © [JM Versteeg](https://github.com/jmversteeg)
