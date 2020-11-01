// Phần thư Viện
new WOW().init(); // wowjs
$(".slider__run").slick({
  // slickjs
  autoplay: true,
  arrow: true,
  dots: true,
});
$(".search-trends__list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
$(".sale__list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});

// Phần Js Chay
document.getElementById("category-prev").style.display = "none";
document.getElementById("category-next").onclick = nextSliderCateGory;
document.getElementById("category-prev").onclick = prevSliderCateGory;
function nextSliderCateGory() {
  document.getElementById("category__list").style.marginLeft = "-20%";
  document.getElementById("category__list").style.marginLeft;
  document.getElementById("category-prev").style.display = "block";
  document.getElementById("category-next").style.display = "none";
}
function prevSliderCateGory() {
  document.getElementById("category-next").style.display = "block";
  document.getElementById("category-prev").style.display = "none";
  document.getElementById("category__list").style.marginLeft = "0%";
}

// Chuyển Tab
function changeTab(id, my) {
  var tab = document.getElementsByClassName("products__list");
  var link = document.getElementsByClassName("products__Tab--link");
  for (var i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
    tab[i].style.borderBottom = "none";
  }
  for (var i = 0; i < link.length; i++) {
    link[i].style.borderBottom = "";
  }
  document.getElementById(id).style.display = "flex";
  my.style.borderBottom = "5px solid orange";
}
document.getElementsByClassName("products__Tab--link")[0].click();

// onClick For response
document.getElementById("active").onclick = function () {
  document
    .getElementsByClassName("header__content__menu--right")[0]
    .classList.toggle("menu-response");
};
