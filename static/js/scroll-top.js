(() => {
  const btn = document.getElementById("scrollToTopBtn");
  if (!btn) return;

  function update() {
    btn.classList.toggle("visible", window.scrollY > 400);
  }

  window.addEventListener("scroll", update, { passive: true });
  update();

  // Smooth scroll csak ha támogatott
  btn.addEventListener("click", (e) => {
    if ("scrollBehavior" in document.documentElement.style) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });
})();