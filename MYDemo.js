// const observer = lozad(); observer.observe();

// //

// // const sections = document.querySelectorAll("section");
// // const navLinks = document.querySelectorAll("a");

// // function handleNavClick(event) {
// //   event.preventDefault();
// //   const targetId = event.target.getAttribute("href");
// //   const targetSection = document.querySelector(targetId);
// //   window.scrollTo({
// //     top: targetSection.offsetTop,
// //     behavior: "smooth",
// //   });
// // }

// // navLinks.forEach((link) => {
// //   link.addEventListener("click", handleNavClick);
// // });

// //

// // let section = document.querySelectorAll("section");
// // let menu = document.querySelectorAll("header nav ");

// // window.onscroll = () => {
// //   section.forEach((i) => {
// //     let top = window.scrollY;
// //     let offset = i.offsetTop - 150;
// //     let height = i.offsetHeight;
// //     let id = i.getAttribute("id");

// //     if (top >= offset && top < offset + height) {
// //       menu.forEach((link) => {
// //         link.classList.remove("active");
// //         document
// //           .querySelector("header nav a[href*=" + id + "]")
// //           .classList.add("active");
// //       });
// //     }
// //   });
// // };

// // function reveal() {
// //   var reveals = document.querySelectorAll(".reveal");

// //   for (var i = 0; i < reveals.length; i++) { 
// //     var windowHeight = window.innerHeight;
// //     var elementTop = reveals[i].getBoundingClientRect().top;
// //     var elementVisible = 150;

// //     if (elementTop < windowHeight - elementVisible) {
// //       reveals[i].classList.add("active");
// //     } else {
// //       reveals[i].classList.remove("active");
// //     }
// //   }
// // }

// // window.addEventListener("scroll", reveal);

// // // To check the scroll position on page load
// // reveal();
// const theBody = document.querySelector('body');
// const openNav = document.querySelector('.menu-bar button');
// const closeNav = document.querySelector('.close-nav button');
// const Navbar = document.querySelector('.navbar');


// function showHide(){
//     Navbar.classList.toggle('show');
//     // bodyScroll();
// }

// openNav.onclick = showHide;
// closeNav.onclick = showHide;






  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(btn => btn.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.textContent;
      projectCards.forEach(card => {
        if (category === 'All') {
          card.style.display = 'block';
        } else if (card.dataset.category === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

    
  const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Thank",
    "You",
    "Have",
    "a",
    "Nice",
    "Day",
    
    ":)"
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();
  
