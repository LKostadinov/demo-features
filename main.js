gsap.registerPlugin(ScrollTrigger);
const featuresList = document.querySelector(".features__list");
const featuresItems = gsap.utils.toArray(".features__item");
const featuresMark = document.querySelector(".features__mark");

gsap.to(featuresMark, {
  scrollTrigger: {
    trigger: featuresMark,
    //markers: true,
    start: "top center-=100",
    end: `${featuresList.offsetHeight}px center+=100`,
    pin: true,
  },
});

function animateImg(parentElement, numY, numScale, numDuration) {
  gsap.to(parentElement.querySelector(".features__img img"), {
    duration: numDuration,
    y: numY,
    scale: numScale,
    ease: "Power2.easeOut",
  });
}

featuresItems.forEach((listItem, i) => {
  gsap.to(listItem, {
    duration: 1,
    ease: "Power2.easeOut",
    scrollTrigger: {
      start: "top center",
      end: "bottom+=80 center",
      trigger: listItem,
      //   markers: true,
      scrub: 0.5,
      toggleClass: "features__item--active",
      onEnter: () => animateImg(listItem, 0, 1, 1),
      onEnterBack: () => animateImg(listItem, 0, 1, 1),
      onLeave: () => animateImg(listItem, "-110%", 0, 1.5),
      onLeaveBack: () => animateImg(listItem, "-110%", 0, 1.5),
    },
  });
});
