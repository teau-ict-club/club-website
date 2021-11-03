const targetDiv1 = document.getElementById("description1");
var targetArticleTitle1 = document.getElementById("article1");

const btn1 = document.getElementById("button1");
btn1.onclick = function () {
  if (targetDiv1.style.display !== "none") {
    targetDiv1.style.display = "none";
    targetArticleTitle1.style.textDecoration = "none";
  } else {
    targetDiv1.style.display = "block";
    targetArticleTitle1.style.textDecoration = "underline";
  }
};


const targetDiv2 = document.getElementById("description2");
var targetArticleTitle2 = document.getElementById("article2");

const btn2 = document.getElementById("button2");
btn2.onclick = function () {
  if (targetDiv2.style.display !== "none") {
    targetDiv2.style.display = "none";
    targetArticleTitle2.style.textDecoration = "none";
  } else {
    targetDiv2.style.display = "block";
    targetArticleTitle2.style.textDecoration = "underline";
  }
};