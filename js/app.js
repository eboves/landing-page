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

// TODO:
// add dynamically li
// add class 1st child

// remove your-active-class

// Variables
let nav_item_list = [
  "Section 1",
  "Section 2",
  "Section 3",
  "Section 4",
  "Section 5",
];
let nav_id_list = ["section1", "section2", "section3", "section4", "section5"];

const nav_bar_list = document.getElementById("navbar__list");
const btn_nav_el = document.querySelector(".btn-nav");
const header_el = document.querySelector(".page__header");
const sections = document.querySelectorAll("section");
const nav_list = document.querySelectorAll("li");

//this code creates the dynamic ul with a class as well as the href
//with the id of each section
for (let i = 0; i < nav_item_list.length; i++) {
  nav_bar_list.innerHTML += `<li class="menu__link ${nav_id_list[i]} active"><a class="links" href="#${nav_id_list[i]}">${nav_item_list[i]}</a></li>`;
}

window.addEventListener("scroll", function () {
  let current_section = "";
  sections.forEach((section) => {
    const section_top = section.offsetTop;

    section.classList.remove("your-active-class");
    if (this.scrollY >= section_top - 250) {
      current_section = section.getAttribute("id");
      section.classList.add("your-active-class");
    }
  });
  document.querySelectorAll("li").forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current_section)) {
      li.classList.add("active");
    }
  });
});

// This code select all the a tags and make a smooth scrolling motion
// when changing from section to section
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
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
