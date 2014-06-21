var Handlebars = require("handlebars");module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row clearfix\">\n      <div class=\"column third\">\n        <p class=\"attribution\">\n          made with <i class=\"fa fa-heart\"></i> by <a href=\"http://twitter.com/theericanderson\">eric anderson</a>\n        </p>\n      </div>\n      <div class=\"column third\">\n        <p>\n          Code licensed under <a href=\"https://github.com/aroc/side-comments/blob/master/LICENSE\">MIT</a>\n        </p>\n      </div>\n      <div class=\"column third\">\n        <p>\n          Current version: 0.0.1\n        </p>\n        <ul class=\"footer-nav\">\n          <li>\n            <i class=\"fa fa-caret-right\"></i>\n            <a href=\"https://github.com/aroc/side-comments/\">\n              Github\n            </a>\n          </li>\n          <li>\n            <i class=\"fa fa-caret-right\"></i>\n            <a href=\"https://github.com/aroc/side-comments/issues\">Issues</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>";
  });