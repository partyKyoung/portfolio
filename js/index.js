require("../css/common.scss");
require("../css/header.scss");
require("../css/aboutMe.scss");

$(document).ready(function() {
  $(".portfolio").fullpage({
    menu: ".portfolio-nav"
  });
});
