const img = document.getElementById("myİmg");
const btn = document.getElementById("btn");
/*btn.addEventListener("click", () => {
  if (img.src.includes("img/pic_bulboff.gif")) {
    img.src = "img/pic_bulbon.gif";
  } else {
    img.src = "img/pic_bulboff.gif";
  }
});*/
btn.addEventListener("click", () => {
  img.src = img.src.includes("img/pic_bulboff.gif")
    ? "img/pic_bulbon.gif"
    : "img/pic_bulboff.gif";
});
