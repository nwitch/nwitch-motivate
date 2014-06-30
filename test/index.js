var motivate = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var Stream = require('readable-stream').PassThrough;
var irc = require('slate-irc');

test('exports a function which returns a function when called', function(t) {
  t.plan(2);
  t.ok(isFunction(motivate));
  t.ok(isFunction(motivate()));
});

test('motivates you', function(t) {
  t.plan(2);
  var stream = new Stream();
  var client = irc(stream);
  client.use(motivate());

  var n = 0;
  stream.on('data', function(chunk) {
    switch (n++) {
      case 0:
        t.equal(chunk, 'PRIVMSG #nwitch :!m KenanY\r\n');
        break;
      case 1:
        t.equal(chunk, 'PRIVMSG #nwitch :You\'re doing good work, KenanY!\r\n');
        break;
    }
  });

  stream.write('PRIVMSG #nwitch :!m KenanY\r\n');
});

test('does nothing when passed no nicks', function(t) {
  t.plan(1);
  var stream = new Stream();
  var client = irc(stream);
  client.use(motivate());

  var n = 0;
  stream.on('data', function(chunk) {
    switch (n++) {
      case 0:
        t.equal(chunk, 'PRIVMSG #nwitch :!m\r\n');
        break;
      case 1:
        t.fail();
        break;
    }
  });

  stream.write('PRIVMSG #nwitch :!m\r\n');
});