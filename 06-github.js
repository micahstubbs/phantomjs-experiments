var page = require('webpage').create();
var system = require('system');
var address = 'http://github.com';
page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
};
page.open(address, function(status) {
  page.render('github.png');
  phantom.exit();
});