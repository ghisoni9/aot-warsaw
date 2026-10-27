/* Click a poster to see it full size. Used on the events page and on the
   home page, so it builds its own overlay rather than each page carrying a
   copy of the markup. Binds to every <img class="poster">; the big version
   comes from data-large, falling back to the thumbnail's own src. */
(() => {
  const posters = document.querySelectorAll("img.poster");
  if (!posters.length) return;

  const box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close">&times;</button>'
                + '<img class="lightbox-img" src="" alt="">';
  document.body.appendChild(box);

  const big = box.querySelector(".lightbox-img");
  const closeBtn = box.querySelector(".lightbox-close");
  let lastFocused = null;

  const open = (img) => {
    lastFocused = img;
    big.src = img.dataset.large || img.src;
    big.alt = img.alt;
    box.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };

  const close = () => {
    box.hidden = true;
    big.src = "";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  };

  posters.forEach(img => {
    img.addEventListener("click", () => open(img));
    img.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(img); }
    });
  });

  box.addEventListener("click", e => { if (e.target !== big) close(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !box.hidden) close();
  });
})();
