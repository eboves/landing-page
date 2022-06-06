# Landing Page Project

## Table of Contents

1. [DynamicNav](#dynamicNav)

- [Instructions](#instructions)

## Instructions

## Project Description and Funtionality

This project is about DOM manipulation. Using different methods to change the behavior and and funtionality of the webpage based on,
wheather or not a section is in the viewport.

1. DynamicNav

In the code bellow we select all the sections and based on the id it has and on the dataset,
a li with an a tag is created; using those parameters an setting id and classes with those attributes.

    const sections = document.querySelectorAll("section");
    function gen_nav_list() {
        sections.forEach((section) => {
            nav_bar_list.innerHTML += `<li class="menu__link ${section.id} active"><a class="links" href="#${section.id}">${section.dataset.nav}</a></li>`;
            });
    }

2. Smooth scrolling

When each element on the nav is clicked, it will take you to the clicked section with a smooth scrolling transaction.
The function smooth_scrolling is called inside the section_click function. The smooth_scrolling function makes the smooth transaction.
On the other hand, the section_click will make the section clicked intoview by using the scrollIntoView method as shown below.

    function section_click() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
            e.preventDefault();
        });
        smooth_scrolling(anchor);
        header_el.classList.remove("nav-open");
        });
       });
    }
    function smooth_scrolling(anchor) {
        document.querySelector(anchor.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    }

3. Scrolling

By adding an event listener with the first argument to the window object, everything inside the call back function will be executed.

    window.addEventListener("scroll", function () {

        let current_section = active_class();

        nav_highlighting(current_section);
    });

The function below nav_highlighting add or remove a class called active;
this class, highlights the nav menu link based on the section that is in the viewport

    function nav_highlighting(current_section) {
        document.querySelectorAll("li").forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current_section)) {
                li.classList.add("active");
            }
        });
    }

4. Button to top

To make it easier to the user to go to the top of the site, a button was added at the bottom of the site.
This buttom will take you to the top of the site with a smooth scrolling animation.

5. Active class

The code below will add or remove the class your-active-class if the section is in the viewport.
Using the method getBoundingClientRect() we can access the position of an element. Also, the innerHeight,
we can access the height of the window object and doing some calculation and logic know if a section is in the viewport.

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
