//mobile navbar start 
function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
  }
  
  navSlide();

//   mobile nvbar end

//SmoothScroll

const scroll = new SmoothScroll('.nav-item a[href*="#home"]', {
    speed: 800
  });
  
  const scroll_1 = new SmoothScroll('.nav-item a[href*="#about-us"]', {
    speed: 800
  });
  
  const scroll_2 = new SmoothScroll('.nav-item  a[href*="#what-we-do"]', {
    speed: 800
  });
  
  
  const scroll_3 = new SmoothScroll('.nav-item a[href*="#how-itw-works"]', {
    speed: 600
  });
  
  
  const scroll_4 = new SmoothScroll('.nav-item a[href*="#contact-us"]', {
    speed: 600
  });

//