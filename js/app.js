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

for (let i = 0; i < nav_item_list.length; i++) {
  nav_bar_list.innerHTML += `<li class="menu__link"><a href="#${nav_id_list[i]}">${nav_item_list[i]}</a></li>`;
}

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
