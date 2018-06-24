require("../css/common.scss");
require("../css/header.scss");

$(document).ready(function() {
  $(".portfolio").fullpage({
    menu: ".portfolio-nav"
  });
});
