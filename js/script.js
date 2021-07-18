const form = document.querySelector('.footer__newsletter__form');
const emailInput = form.querySelector('.footer__newsletter__input');
const tooltip = document.querySelector('.footer__tooltip');
const tooltipTwo = document.querySelector('.footer__tooltip-two');

const testimonialDots = document.querySelectorAll('.testimonials__dot');
const testimonials = document.querySelectorAll('.testimonial');
const testinmonialsArray = Array.from(testimonials);
/*------------------------ Responsive Menu-------------------------*/
function menuToggle() {
    const menuToggle = document.querySelector(".navbar__toggle");
    const list = document.querySelector(".navbar__list");
    if (menuToggle.classList.value.includes("active")) {
      //console.log("test nav");
      list.classList.add("hide");
    } else {
      list.classList.remove("hide");
    }
    menuToggle.classList.toggle("active");
    list.classList.toggle("active");
  }

/*----------------------Auto Slid---------------------------- */
  testimonialDots.forEach((testimonialDot) => {
  testimonialDot.addEventListener('click', () => {
  testimonialDots.forEach((testimonialDot) => {
    testimonialDot.classList.remove('active');
  });
  testimonialDot.classList.add('active');
  for (i = 0; i < testimonialDots.length; i++) {
    if (testimonialDots[i].classList.contains('active')) {
      testinmonialsArray[i].style.display = 'block';
    } else {
      testinmonialsArray[i].style.display = 'none';
    }
  }
});
});


/*-----------------------Form Validaiton-------------------------------------------*/

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInputValue = e.target.email.value;
  const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (!regexEmail.test(emailInputValue)) {
    tooltip.style.display = 'block';
    emailInput.style.border = '2px solid hsl(0, 88%, 59%)';
    emailInput.style.color = 'hsl(0, 88%, 59%)';
  } else {
    tooltip.style.display = 'none';
    tooltipTwo.style.display = 'block';
    emailInput.style.border = 'none';
    emailInput.style.color = 'unset';
    setTimeout(function () {
      tooltipTwo.style.display = 'none';
    }, 3000);
    form.reset();
  }
});