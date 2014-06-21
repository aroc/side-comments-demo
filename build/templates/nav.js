var Handlebars = require("handlebars");module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"nav\">\n  <div class=\"container\">\n    <a class=\"logo\" href=\"#header\">SideComments.js</a>\n    <ul>\n      <li>\n        <a href=\"#demo\">\n          <i class=\"fa fa-magic\"></i>\n          Demo\n        </a>\n      </li>\n      <li>\n        <a href=\"#get-started\">\n          <i class=\"fa fa-check\"></i>\n          Get Started\n        </a>\n      </li>\n      <li>\n        <a href=\"#docs\">\n          <i class=\"fa fa-info\"></i>\n          Docs\n        </a>\n      </li>\n      <li>\n        <a href=\"https://github.com/aroc/side-comments\">\n          <i class=\"fa fa-github\"></i>\n          Github Project\n        </a>\n      </li>\n    </ul>\n    <a id=\"mobile-menu-btn\" href=\"#\">\n      Menu\n    </a>\n    <a id=\"close-nav-overlay\" href=\"#\">&times;</a>\n  </div>\n</div>";
  });