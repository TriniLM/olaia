
const btn = document.querySelector(".mobile-btn")
const headerNav = document.getElementById('header-nav')

btn.addEventListener('click', ()=>{
   btn.classList.toggle("active-btn")
   headerNav.classList.toggle("nav-active")
})