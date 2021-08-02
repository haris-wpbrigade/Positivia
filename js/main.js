const NavBar = document.querySelector('.nav-bar')
const ToggleBtn = document.querySelector('.toggleBtn')

ToggleBtn.addEventListener('click', ()=>{
    NavBar.classList.toggle('active')
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'hidden scroll' : 'hidden'
})