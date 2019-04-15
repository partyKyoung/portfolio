require("../css/common.scss");
require("../css/loading.scss");
require("../css/header.scss");
require("../css/aboutMe.scss");
require("../css/mySkill.scss");
require("../css/myCareer.scss");

setTimeout(() => {
  const loading = document.getElementById("loading");
  const portfolio = document.getElementById("portfolio");

  loading.style.display = "none";
  portfolio.style.display = "block";
}, 3000);
