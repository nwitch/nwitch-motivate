var behest = require('behest');

function motivate() {
  return function(irc) {
    irc.on('message', function(evt) {
      var from = evt.from;
      var to = evt.to;
      var message = evt.message;

      if (!behest.isValid(message)) {
        return;
      }

      var command = behest(message);
      if (command.command === 'm' && command.params && command.params[0]) {
        var destination = to.charAt(0) === '#' ? to : from;
        irc.send(destination, 'You\'re doing good work, ' + command.params[0] + '!');
      }
    });
  };
}

module.exports = motivate;