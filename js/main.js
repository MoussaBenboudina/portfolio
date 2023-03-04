
var loding = document.getElementById('loading');
window.addEventListener('load',function(){
    
 loding.style.display ="none";
})






let ul = document.querySelector("ul");
let liste = Array.from(ul.children);
liste.forEach((li) => {
    li.firstChild.addEventListener("click" , function(){
        liste.forEach((li) => {
            li.firstChild.classList.remove("active"); 
        })
        li.firstChild.classList.add("active");
    })
})

let menu = document.getElementById("menu-icon");
let xmark = document.getElementById("xmark");

menu.onclick = () => {
ul.classList.add("active");
menu.classList.add("close");
xmark.classList.remove("close")

}
xmark.onclick = () => {
    ul.classList.remove("active");
    xmark.classList.add("close")
    menu.classList.remove("close");
}

let sections = document.querySelectorAll("section")
let linkes = document.querySelectorAll(".linkes ul li a")

let box = document.querySelectorAll(".box-skills .box .box-1 .skil h5"),
 skills =Array.from(box),
 boxStyle = document.querySelectorAll(".box-skills .box .box-1");
skillsStyle =Array.from(boxStyle);

let speed=40,
    startValue=50,
    endValue=80;

let sectionAbout = document.querySelector(".about")
console.log(box);
let secabout;


let sectionSkills =  document.getElementById('skills');
console.log(sectionSkills);

window.onscroll = ()=>{
    sections.forEach(sec =>{
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id')
      if(top >= offset ){
        linkes.forEach(a => {
            a.removeAttribute("class");
           document.querySelector('.linkes ul li a[href*=' + id + ']').classList.add("active");

        })

      }
    })

    if(window.scrollY >= sectionSkills.offsetTop - 150){
    let progres = setInterval(()=>{
    if( startValue >= 120){
        clearInterval(progres);
       
    }else 
 
        startValue++;
        skills[0].innerHTML = `${ startValue - 50}<span>%</span>`;
        skills[1].innerHTML = `${ startValue - 35}<span>%</span>`;
        skills[2].innerHTML = `${ startValue - 40}<span>%</span>`;
        skills[3].innerHTML = `${ startValue - 35}<span>%</span>`;
        skills[4].innerHTML = `${ startValue - 30}<span>%</span>`;
        skills[5].innerHTML = `${ startValue - 35}<span>%</span>`;
        skills[6].innerHTML = `${ startValue - 50}<span>%</span>`;
        skills[7].innerHTML = `${ startValue - 30}<span>%</span>`;

    skillsStyle[0].style.background = `conic-gradient(rgb(0, 238, 255)calc(360deg * ${ startValue - 50} / 100) , rgb(119, 119, 119)0deg)`
    skillsStyle[1].style.background = `conic-gradient(rgb(0, 238, 255)calc(360deg * ${ startValue - 35} / 100) , rgb(119, 119, 119)0deg)`
    skillsStyle[2].style.background = `conic-gradient(rgb(0, 238, 255)calc(360deg * ${ startValue - 40} / 100) , rgb(119, 119, 119)0deg)`
    skillsStyle[3].style.background = `conic-gradient(rgb(0, 238, 255)calc(360deg * ${ startValue - 35} / 100) , rgb(119, 119, 119)0deg)`
    skillsStyle[4].style.background = `conic-gradient(rgb(0, 238, 255)calc(360deg * ${ startValue - 30} / 100) , rgb(119, 119, 119)0deg)`
    skillsStyle[5].style.background = `conic-gradient(rgb(0, 238, 255)calc(360deg * ${ startValue - 35} / 100) , rgb(119, 119, 119)0deg)`
    skillsStyle[6].style.background = `conic-gradient(rgb(0, 238, 255)calc(360deg * ${ startValue - 50} / 100) , rgb(119, 119, 119)0deg)`
    skillsStyle[7].style.background = `conic-gradient(rgb(0, 238, 255)calc(360deg * ${ startValue - 30} / 100) , rgb(119, 119, 119)0deg)`


        },speed)
    }}








ScrollReveal({ 
    reset: true,
    distance:'300px',
    duration:2000,
    delay:200
});


ScrollReveal().reveal('.homme .desc , .landing ,.header , .contact p', { origin:'top'});
ScrollReveal().reveal('.homme .image , .skills .box ,.projects .container , .contact .two' , { origin:'bottom'});
ScrollReveal().reveal('.about .image , .contact .contactMe' , { origin:'left'});
ScrollReveal().reveal('.about .desc , .contact form' , { origin:'right'});



// typed.js 

const typed = new Typed('.multiple-text',{
    strings:['web Design','Frontend Develope '],
    typeSpeed:60,
    backSpeed:50,
    backDelay:3000,
    // loop:true
})
