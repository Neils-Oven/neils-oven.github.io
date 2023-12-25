let HomepageSearch = document.querySelector(".homepage_search");
let SearchInput = document.querySelector(".HomepageSearch_input");

SearchInput.addEventListener("click", function () {
  HomepageSearch.classList.remove("search_orange");
  HomepageSearch.classList.add("search_white");
});

document.addEventListener("click", function (event) {
  // If user clicks inside the search box, do nothing
  if (event.target.closest(".homepage_search")) return;

  // If user clicks outside the search box, hide it.
  HomepageSearch.classList.add("search_orange");
  HomepageSearch.classList.remove("search_white");
});
$("#menu_icon").click(function () {
  $(".menu").css("visibility", "visible");
});
$("#close_icon").click(function () {
  $(".menu").css("visibility", "hidden");
});
