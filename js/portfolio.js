require("../css/common.scss");
require("../css/header.scss");
require("../css/aboutMe.scss");
require("../css/mySkill.scss");
require("../css/myCareer.scss");
require("jquery");

var $ = require("jquery");
var fullpage = require("fullpage.js");

$(document).ready(function() {
  var portfolio = new fullpage("#portfolio", {
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    css3: true,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    menu: "#portfolio-nav-menu",
    anchors: ["aboutMe", "mySkill", "myCareer"]
  });
});
