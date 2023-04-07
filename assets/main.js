const toggleButton = document.querySelector(".switchBtn");
const toggleArea = document.querySelector(".switchArea");
const basic = document.querySelector("#price-1");
const prof = document.querySelector("#price-2");
const master = document.querySelector("#price-3");

window.addEventListener("DOMContentLoaded", (event) => {
  toggleArea.classList.add("anually");
  basic.innerHTML = `<p id="price-1"> <span class="dollar-sign">&dollar;</span>199.99</p>`;
  prof.innerHTML = `  <p id="price-2"> <span class="dollar-sign">&dollar;</span>249.99</p>`;
  master.innerHTML = `  <p id="price-3"> <span class="dollar-sign">&dollar;</span>399.99</p>`;
});

toggleArea.addEventListener("click", function (e) {
  e.preventDefault();
  if (toggleArea.classList.contains("monthly")) {
    toggleArea.classList.remove("monthly");
    toggleArea.classList.add("anually");
    basic.innerHTML = `<p id="price-1"> <span class="dollar-sign">&dollar;</span>199.99</p>`;
    prof.innerHTML = `  <p id="price-2"> <span class="dollar-sign">&dollar;</span>249.99</p>`;
    master.innerHTML = `  <p id="price-3"> <span class="dollar-sign">&dollar;</span>399.99</p>`;
  } else {
    toggleArea.classList.add("monthly");
    toggleArea.classList.remove("anually");
    basic.innerHTML = `<p id="price-1"> <span class="dollar-sign">&dollar;</span>19.99</p>`;
    prof.innerHTML = `  <p id="price-2"> <span class="dollar-sign">&dollar;</span>24.99</p>`;
    master.innerHTML = `  <p id="price-3"> <span class="dollar-sign">&dollar;</span>39.99</p>`;
  }
});
