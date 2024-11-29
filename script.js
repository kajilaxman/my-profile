$(document).ready(function(){
	$(window).scroll(function(){
      if(this.scrollY > 20){
         $('.navbar').addClass("sticky");
     }
     else{
         $('.navbar').removeClass("sticky");
     }
     if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
     }
     else{
        $('.scroll-up-btn').removeClass("show");
     }
	});

    // slide-up script
    $('.scroll-up-btn').click(()=>{
        $('html').animate({scrollTop: 0});
    });

   //toogle menu/navbar script
  $('.menu-btn').click(function(){
    $('.menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");

  });
 }); 

//typing animation script
    const typed = new Typed(".typing", {
    strings: ["Front-end Web Developer","Web Designer","ML Researcher","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

  const secondTyped = new Typed(".typing-2", {
    strings: ["Web Designer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});  



//using javascript code 
const buttonOne = document.querySelector(`.button-one`);
const buttonTwo = document.querySelector(`.full`);
const memberOne = document.querySelector(`.members`);
const memberTwo = document.querySelector(`.members-one`);


let clickOne = () =>{
  buttonOne.style.background = 'limegreen';
  buttonTwo.style.background = 'transparent';
  memberOne.style.display = `block`;
  memberTwo.style.display = 'none';

}
let clickTwo = () =>{
   buttonOne.style.background = 'transparent';
   buttonTwo.style.background = 'limegreen';
   memberOne.style.display = `none`;
   memberTwo.style.display = 'block';
}
buttonOne.addEventListener('click',clickOne);
buttonTwo.addEventListener('click',clickTwo);

//using js code for click section

let home = document.querySelector(`#home`);
let about = document.querySelector(`#about`);
let services = document.querySelector(`#services`);
let skills = document.querySelector(`#skills`);
let team = document.querySelector(`#teams`);
let contact = document.querySelector(`#contacts`);

let showHome = () =>{
     home.style.color = 'limegreen';
     about.style.color = 'white';
     services.style.color = 'white';
     skills.style.color = 'white';
     team.style.color = 'white';
     contact.style.color = 'white';
}
let showAbout = () =>{
     home.style.color = 'white';
     about.style.color = 'limegreen';
     services.style.color = 'white';
     skills.style.color = 'white';
     team.style.color = 'white';
     contact.style.color = 'white';
}
let showServices = () =>{
     home.style.color = 'white';
     about.style.color = 'white';
     services.style.color = 'limegreen';
     skills.style.color = 'white';
     team.style.color = 'white';
     contact.style.color = 'white';
     
}
let showSkills = () =>{
     home.style.color = 'white';
     about.style.color = 'white';
     services.style.color = 'white';
     skills.style.color = 'limegreen';
     team.style.color = 'white';
     contact.style.color = 'white';
     
}
let showTeam = () =>{
     home.style.color = 'white';
     about.style.color = 'white';
     services.style.color = 'white';
     skills.style.color = 'white';
     team.style.color = 'limegreen';
     contact.style.color = 'white';
}    
let showContact = () =>{
     home.style.color = 'white';
     about.style.color = 'white';
     services.style.color = 'white';
     skills.style.color = 'white';
     team.style.color = 'white';
     contact.style.color = 'limegreen';    
}

home.addEventListener('click',showHome);
about.addEventListener('click',showAbout);
services.addEventListener('click',showServices);
skills.addEventListener('click',showSkills);
team.addEventListener('click',showTeam);
contact.addEventListener('click',showContact);

//let menuBtn =document.querySelector('i');
//let menu =document.querySelector('ul');
//menu.style.background = 'transparent';
//menu.style.display = 'none';
//function showMenu(){
//	menuBtn.style.display = 'none';
//	menu.style.display = 'block';
//  menu.style.background = 'red';
