# nwitch-motivate

[![Build Status](https://travis-ci.org/nwitch/nwitch-motivate.svg)](https://travis-ci.org/nwitch/nwitch-motivate)
[![Dependency Status](https://gemnasium.com/nwitch/nwitch-motivate.svg)](https://gemnasium.com/nwitch/nwitch-motivate)

[nwitch][] (and [slate-irc][]) plugin for [motivating](http://motivate.im/) people.

``` irc
05:34 <KenanY> !m Bob
05:34 <nwitch> You're doing good work, Bob!
```

## Example

As a [nwitch][] plugin (using `config.toml`):

``` toml
[plugins]
nwitch-motivate = true
```

Or through [nwitch][]'s API:

``` javascript
var Nwitch = require('nwitch');
var motivate = require('nwitch-motivate');

var nwitch = new Nwitch({
  irc: {
    address: 'irc.freenode.org',
    port: 6667
  }
});

nwitch.use(motivate());
```

Technically, all [nwitch][] plugins are just [slate-irc][] plugins, so you could
also use this as a [slate-irc][] plugin:

``` javascript
var net = require('net');
var irc = require('slate-irc');
var motivate = require('nwitch-motivate');

var stream = net.connect({
  port: 6667,
  host: 'irc.freenode.org'
});

var client = irc(stream);
client.use(motivate());
```

## Installation

``` bash
$ npm install nwitch-motivate
```

## API

``` javascript
var motivate = require('nwitch-motivate');
```

### `motivate()`

Returns a function that accepts an instance of [slate-irc][].


  [nwitch]: https://github.com/KenanY/nwitch
  [slate-irc]: https://github.com/slate/slate-irc