require("../css/common.scss");
require("../css/header.scss");
require("../css/aboutMe.scss");
require("../css/mySkill.scss");

$(document).ready(function() {
  $(".portfolio").fullpage({
    menu: "#portfolio-nav-menu",
    anchors: ["aboutMe", "mySkill", "myCareer"]
  });
});
