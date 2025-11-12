document.addEventListener("DOMContentLoaded", () => {
  const flags = document.querySelectorAll(".flagg-container img");
  flags.forEach((flag, i) => {
    flag.style.opacity = 0;
    flag.style.transform = "scale(0.8)";
    setTimeout(() => {
      flag.style.transition = "all 0.5s ease";
      flag.style.opacity = 1;
      flag.style.transform = "scale(1)";
    }, i * 200); // kort forsinkelse for "poppeffekt"
  });
});

