const scrollableContainer = document.getElementById("scrollable-container");
const scrollDuration = 20000;
const scrollDistance =
  scrollableContainer.scrollWidth - scrollableContainer.clientWidth;

function pauseExecution(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

console.log("scrollDistance:", scrollDistance);

async function smoothScroll() {
  await pauseExecution(3000);
  const startTime = Date.now();

  function animateScroll() {
    const now = Date.now();
    const progress = Math.min((now - startTime) / scrollDuration, 1);
    const scrollPosition = progress * scrollDistance;
    scrollableContainer.scrollLeft = scrollPosition;

    console.log("progress:", progress, "scrollPosition:", scrollPosition); // Check progress and scroll position

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  animateScroll();
}

smoothScroll();

const img = document.getElementById("mainImg");
setInterval(() => {
  if (img.getAttribute("src").includes("landside")) {
    img.setAttribute("src", "./airside.jpg");
    smoothScroll();
  } else {
    img.setAttribute("src", "./landside.jpg");
    smoothScroll();
  }
}, 26000);
