let ball = document.querySelectorAll(".ball");
document.addEventListener("mousemove", function (event) {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";
  for (let i = 0; i < 2; i++) {
    ball[i].style.cssText = `
    left:${x};
    top:${y};
    transform: translate(-${x}, -${y});

    `;
  }
});
