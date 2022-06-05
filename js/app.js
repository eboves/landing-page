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

// remove your-active-class

////////////////////////////////////////////////

const nav_bar_list = document.getElementById("navbar__list");
const header_el = document.querySelector(".page__header");
const btn_nav_el = document.querySelector(".btn-nav");
const sections = document.querySelectorAll("section");
const nav_list = document.querySelectorAll("li");
const btn_top = document.querySelector(".btn");

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
  return current_section;
}

// This function handle the button that takes you to the top
// of the page when clicked and with the scrolling animation
function to_top() {
  btn_top.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}
// calling the to_top function
to_top();

function smooth_scrolling(anchor) {
  document.querySelector(anchor.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}

// This function select all the a tags and make a smooth scrolling motion
// when you click on the section tag on the nav
function section_click() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      // document.querySelector(this.getAttribute("href")).scrollIntoView({
      //   behavior: "smooth",
      // });
      smooth_scrolling(anchor);
      header_el.classList.remove("nav-open");
    });
  });
}
// calling the section_click function
section_click();

// This call to the window object when scrolling calls the active_class
// and the nav_highlighting functions
window.addEventListener("scroll", function () {
  // holding the value return when calling active class to pass it as
  // argument to nav_highlighting
  let current_section = active_class();

  //calling the nav_highlighting function
  nav_highlighting(current_section);
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
