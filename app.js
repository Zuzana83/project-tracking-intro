const toggleBtn = document.querySelector(".toggle-btn");
const headerEl = document.querySelector(".main-header") ;

toggleBtn.addEventListener("click", function(e) {
    headerEl.classList.toggle("show");
})