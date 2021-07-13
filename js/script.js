function menuToggle() {
    const menuToggle = document.querySelector(".navbar__toggle");
    const list = document.querySelector(".navbar__list");
    if (menuToggle.classList.value.includes("active")) {
      console.log("macit");

      list.classList.add("hide");
    } else {
      list.classList.remove("hide");
    }
    menuToggle.classList.toggle("active");
    list.classList.toggle("active");
  }
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });

  const testimonialDots = document.querySelectorAll('.testimonials__dot');
  const testimonials = document.querySelectorAll('.testimonial');
  const testinmonialsArray = Array.from(testimonials);
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


