// example usage:
// phantomjs 04-show-title.js http://www.google.com

var page = require('webpage').create();
var system = require('system');
var address;

if (system.args.length === 1) {
  console.log('Usage: phantomjs 04-show-title.js <some URL>');
  phantom.exit();
}

address = system.args[1];
page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
};
page.open(address, function(status) {
  page.evaluate(function() {
    console.log(document.title);
  });
  phantom.exit();
});