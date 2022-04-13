const $ = (elementName, attributes) => {
  const element = document.createElement(elementName);
  const attributesAsArray = Object.entries(attributes);

  attributesAsArray.forEach(([key, value]) => element.setAttribute(key, value));

  return element

}
//
const root = document.querySelector("#root");

const nav = $("nav", { class: "nav__bar"});

const logo = $("a", { class: "logo" });
nav.appendChild(logo);
const DarkM = $("div", {class: "dark-light"});
nav.appendChild(DarkM);
let moon = $("i", {class: "bx bx-moon moon"});
DarkM.appendChild(moon);
let sun = $("i", {class: "bx bx-sun sun"});
DarkM.appendChild(sun);

const div = $("div", { class: "nav__menu"});

const ul = $("ul", { class: "nav__list"});
div.appendChild(ul);

let li1 = $("li", { class: "nav__item"});
ul.appendChild(li1);
let a1 = $("a", { id: "list1" , href: "#", class: "nav__link" });
li1.appendChild(a1);
let i1 = $("i", { class: "bx bx-book nav__icon" });
a1.appendChild(i1);
let span1 = $("span", { class: "text" });
a1.appendChild(span1);
span1.innerText = "library"

let li2 = $("li", { class: "nav__item"});
ul.appendChild(li2);
let a2 = $("a", { id: "list2" , href: "#", class: "nav__link" });
li2.appendChild(a2);
let i2 = $("i", { class: "bx bxs-paper-plane nav__icon" });
a2.appendChild(i2);
let span2 = $("span", { class: "text" });
a2.appendChild(span2);
span2.innerText = "project"

const library = $("div", { id: "library" })
root.appendChild(library);

nav.appendChild(div);

root.appendChild(nav);

root.addEventListener("click", main => {
  console.log(event.target);
})


console.log(root);


