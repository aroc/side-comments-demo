var Handlebars = require("handlebars");module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"header\">\n  <div class=\"container\">\n    <h1 class=\"main-heading logo\">SideComments.js</h1>\n    <h2 class=\"main-heading\">A sweet ass commenting interface component.</h2>\n    \n    <a href=\"https://github.com/aroc/side-comments/archive/master.zip\" id=\"cta\" class=\"btn large\">\n      <i class=\"fa fa-cloud-download\"></i>\n      Download SideComments.js\n    </a>\n\n    <p class=\"version\">Version 0.0.1</p>\n\n    <iframe src=\"http://ghbtns.com/github-btn.html?user=aroc&repo=side-comments&type=watch&count=true&size=large\"\n  allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"160\" height=\"30\"></iframe>\n  </div>\n  <div class=\"overlay\"></div>\n  <video autoplay loop id=\"header-bg-vid\">\n    <source src=\"public/videos/typing.webm\" type=\"video/webm\">\n    <source src=\"public/videos/typing.mp4\" type=\"video/mp4\">\n  </video>\n</div>";
  });