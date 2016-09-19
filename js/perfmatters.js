// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

function cb() {
  add_link_to_header('css/style.css');
}

function cb2() {
  add_link_to_header('//fonts.googleapis.com/css?family=Open+Sans:400,700');
}

function add_link_to_header(href) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  var head = document.getElementsByTagName('head')[0];
  head.parentNode.appendChild(link);
}

window.addEventListener("load", function(event) {
  logCRP();
  cb();
  cb2();
});
