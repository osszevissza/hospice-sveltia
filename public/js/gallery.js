(() => {
  const dialog = document.getElementById("galleryDialog");
  if (!dialog) return;

  const fullImg = dialog.querySelector(".gallery-full");
  const closeBtn = dialog.querySelector(".gallery-close");

  let lastActive = null;

  function openDialog(src, alt) {
    lastActive = document.activeElement;
    fullImg.src = src;
    fullImg.alt = alt || "";
    dialog.showModal();
    closeBtn.focus();
  }

  function closeDialog() {
    dialog.close();
    fullImg.src = "";
    fullImg.alt = "";
    if (lastActive && lastActive.focus) lastActive.focus();
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".gallery-thumb[data-full]");
    if (btn) {
      const img = btn.querySelector("img");
      openDialog(btn.dataset.full, img?.alt);
      return;
    }
    if (e.target === dialog) closeDialog(); // katt a sötét részre
  });

  closeBtn.addEventListener("click", closeDialog);

  dialog.addEventListener("cancel", (e) => {
    e.preventDefault(); // ESC
    closeDialog();
  });
})();