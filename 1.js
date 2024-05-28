const words = ["WEB DEVELOPER", "MARKETER", "DESIGNER"];
const dynamicText = document.querySelector(".dynamic")

let idx=0;
let cidx=0;
let isDeleting=false;
const typeEffect = () =>{
    const currword = words[idx];
    const currchar = currword.substring(0,cidx);
    dynamicText.textContent = currchar;
    if(!isDeleting && cidx<currword.length){
        cidx++;
        setTimeout(typeEffect, 200);
    }else if(isDeleting && cidx>0){
        cidx--;
        setTimeout(typeEffect,100);
    } 
    else{
        isDeleting = !isDeleting;
        idx = !isDeleting ? (idx+1)%words.length : idx;
        setTimeout(typeEffect,1200);
    }

};

typeEffect();

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll('header a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-90;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Scroll reveal
ScrollReveal({ 
    reset: true,
    distance : '80px',
    duration : 2000,
    delay : 200
});

ScrollReveal().reveal('.Text, .heading', {origin:'top'});
ScrollReveal().reveal('.block, .port', {origin:'bottom'});