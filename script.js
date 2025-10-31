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


// Google Analytics sporing for alle sider
(function() {
  const GA_ID = 'G-ABC123XYZ'; // <-- Bytt ut med egen måle-ID

  // Last inn Google Analytics-scriptet
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(gtagScript);

  // Initialiser Analytics når scriptet er lastet
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
})();