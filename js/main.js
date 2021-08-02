const NavBar = document.querySelector('.nav-bar')
const ToggleBtn = document.querySelector('.toggleBtn')

ToggleBtn.addEventListener('click', ()=>{
    NavBar.classList.toggle('active')
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'hidden scroll' : 'hidden'
})

const NavLinks = document.querySelectorAll('.Toggle-Submenu')
const SubMenu = document.querySelectorAll('.Toggle-Submenu .submenu')

for (let i=0; i<NavLinks.length; i++){
    NavLinks[i].addEventListener('click', () => {
        SubMenu[i].classList.toggle('active')
    })
}