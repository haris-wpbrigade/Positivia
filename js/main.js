const NavBar = document.querySelector(".nav-bar");
const ToggleBtn = document.querySelector(".toggleBtn");

ToggleBtn.addEventListener("click", () => {
  NavBar.classList.toggle("active");
  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "hidden scroll" : "hidden";
});

const NavLinks = document.querySelectorAll(".Toggle-Submenu");
const SubMenu = document.querySelectorAll(".Toggle-Submenu .submenu");

for (let i = 0; i < NavLinks.length; i++) {
  NavLinks[i].addEventListener("click", () => {
      if(i === 0){
        SubMenu[i].classList.toggle("active");
        SubMenu[1].classList.remove("active");
        SubMenu[2].classList.remove("active");
      }else if (i === 1){
        SubMenu[i].classList.toggle("active");
        SubMenu[0].classList.remove("active");
        SubMenu[2].classList.remove("active");
      }else if (i === 2){
        SubMenu[i].classList.toggle("active");
        SubMenu[0].classList.remove("active");
        SubMenu[1].classList.remove("active");
      }
  });
}

// Toggle Form Content

const PrimBtnOne = document.getElementById("redBtn");
const PrimBtnTwo = document.getElementById("PuntoBtn");
const FormOne = document.querySelector('.formOne')
const FormTwo = document.querySelector('.formTwo')

PrimBtnOne.addEventListener("click", () => {
    PrimBtnTwo.classList.remove('active')
    PrimBtnOne.classList.add('active')
    FormTwo.style.display = 'none'
    FormOne.style.display = 'flex'
});

PrimBtnTwo.addEventListener("click", () => {
    PrimBtnOne.classList.remove('active')
    PrimBtnTwo.classList.add('active')
    FormOne.style.display = 'none'
    FormTwo.style.display = 'flex'
});

const SecondaryBtnOne = document.getElementById("EventBtnOne");
const SecondaryBtnTwo = document.getElementById("EventBtnTwo");

SecondaryBtnTwo.addEventListener('click', () => {
    document.querySelector('.event-form').innerHTML = `<span>Coming soon...</span>`
})

SecondaryBtnOne.addEventListener('click', () => {
    document.querySelector('.event-form').innerHTML = `<input
    type="date"
    id="start"
    name="trip-start"
    value="2017-06-21"
    min="2018-01-01"
    max="2018-12-31"
  />`
})