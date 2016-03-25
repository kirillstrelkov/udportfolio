// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function(event) {
  logCRP();
});

var cb = function() {
  var l = document.createElement('link'); l.rel = 'stylesheet';
  l.href = 'css/style.css';
  var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
};
var cb2 = function() {
  var l = document.createElement('link'); l.rel = 'stylesheet';
  l.href = '//fonts.googleapis.com/css?family=Open+Sans:400,700';
  var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
};

var raf = requestAnimationFrame || mozRequestAnimationFrame ||
    webkitRequestAnimationFrame || msRequestAnimationFrame;

if (raf){
  raf(cb);
} else {
  window.addEventListener('load', cb2);
}
