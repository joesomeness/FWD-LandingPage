/*
 * Define Global Variables
*/
let sections = document.querySelectorAll("section");

// variable that stores the nav list ul element
let navList = document.querySelector("ul");

// empty array to store data-nav attributes
let texts = [];

//to be used in nav list creation to enhance performance
let dfrag = document.createDocumentFragment();

//for loop to fill the texts array and create the nav list
for (let i = 0; i < sections.length; i++){
    let li = document.createElement("li");
    let a = document.createElement("a");
    texts[i] = sections[i].getAttribute("data-nav");
    li.appendChild(a);
    a.outerHTML = "<a href=\"#section"+(i+1)+"\">"+texts[i]+"</a>";
    dfrag.appendChild(li);
    }
navList.appendChild(dfrag);

//declaring variable to store newly created li elements
let navElements = document.querySelectorAll("li");

//smoothly scroll to corresponding field
for (let i = 0; i < sections.length; i++){
    let k = document.querySelector("#section"+(i+1));
    navElements[i].addEventListener("click",function(event){
        event.preventDefault();
        k.scrollIntoView({behavior: "smooth", block: "center"})   
    });
}

//highlight active section
window.addEventListener("scroll", function(){
    for (let i = 0; i < sections.length; i++){
        let x = sections[i].getBoundingClientRect();
        if (x.top > -50 && x.top < 150){
            for (let j = 0; j < sections.length; j++){
                sections[j].classList.remove("your-active-class");
            }
            sections[i].classList.toggle("your-active-class");
        }
    }
})