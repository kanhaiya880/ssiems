const marquee = document.getElementById("myMarquee");
let isPaused = false;

marquee.addEventListener("click", () => {
  if (isPaused) {
    marquee.start();
    isPaused = false;
  } else {
    marquee.stop();
    isPaused = true;
  }
});
