/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
///////////////////////////////////////////////////
// TODO:
// add dynamically li
// add class 1st child

// remove your-active-class

////////////////////////////////////////////////

const nav_bar_list = document.getElementById("navbar__list");
const btn_nav_el = document.querySelector(".btn-nav");
const header_el = document.querySelector(".page__header");
const sections = document.querySelectorAll("section");
const nav_list = document.querySelectorAll("li");

//this code creates the dynamic ul with a class as well as the href
//with the id of each section

// This function creates a nav based on the section you add in the HTML.
// Keep in mind that when adding a new section most add the id and the data-nav.
function gen_nav_list() {
  sections.forEach((section) => {
    nav_bar_list.innerHTML += `<li class="menu__link ${section.id} active"><a class="links" href="#${section.id}">${section.dataset.nav}</a></li>`;
  });
}
// calling the gen_nav_list function
gen_nav_list();

// This function highlights the nav every time a new section is on the viewport
function nav_highlighting(current_section) {
  document.querySelectorAll("li").forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current_section)) {
      li.classList.add("active");
    }
  });
}
// This function add or remove the your-active-class
// if the section is on the viewport. If the top of the section,
// is the top of the section is less than the windows innerHeight,
// it will add it. Else, it will remove it
function active_class() {
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top < this.window.innerHeight / 2) {
      section.classList.add("your-active-class");
      current_section = section.getAttribute("id");
    }
    if (
      section.getBoundingClientRect().bottom < this.window.innerHeight / 2 ||
      section.getBoundingClientRect().top > this.window.innerHeight ||
      section.getBoundingClientRect().top > this.window.innerHeight ||
      section.getBoundingClientRect().top < 0
    ) {
      section.classList.remove("your-active-class");
    }
  });
}

// function smooth_scroll(){}
window.addEventListener("scroll", function () {
  let current_section = "";

  //calling the active_class function
  active_class();
  //calling the nav_highlighting function
  nav_highlighting(current_section);
});

// This code select all the a tags and make a smooth scrolling motion
// when changing from section to section
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    header_el.classList.remove("nav-open");
  });
});

// This code opens/closes the nav bar on smaller divices
btn_nav_el.addEventListener("click", function () {
  header_el.classList.toggle("nav-open");
});

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
