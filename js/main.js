// main.js | the only JavaScript on the site.
// 1) opens/closes the menu on phones, 2) writes the current year in the footer.

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // close the menu after tapping a link
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
<<<<<<< HEAD

// 3) screenshot viewer: click a screenshot to open it big over a dark backdrop.
//    Works on any page with a ".shots" section. Esc / click outside to close, arrow keys to move.
const shots = Array.from(document.querySelectorAll(".shots img"));

if (shots.length) {
  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Screenshot viewer");
  box.innerHTML = `
    <button class="lb-close" aria-label="Close">✕</button>
    <button class="lb-prev" aria-label="Previous screenshot">←</button>
    <figure><img alt=""><figcaption></figcaption></figure>
    <button class="lb-next" aria-label="Next screenshot">→</button>`;
  document.body.appendChild(box);

  const bigImg = box.querySelector("img");
  const caption = box.querySelector("figcaption");
  let current = 0;

  const show = (i) => {
    current = (i + shots.length) % shots.length;
    const img = shots[current];
    bigImg.src = img.src;
    bigImg.alt = img.alt;
    const cap = img.closest("figure")?.querySelector("figcaption");
    caption.textContent = `${cap ? cap.textContent : img.alt}  (${current + 1}/${shots.length})`;
  };
  const open = (i) => {
    show(i);
    box.classList.add("open");
    document.body.classList.add("no-scroll");
    box.querySelector(".lb-close").focus();
  };
  const close = () => {
    box.classList.remove("open");
    document.body.classList.remove("no-scroll");
    shots[current].focus();
  };

  shots.forEach((img, i) => {
    img.tabIndex = 0;
    img.addEventListener("click", () => open(i));
    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i); }
    });
  });

  box.querySelector(".lb-close").addEventListener("click", close);
  box.querySelector(".lb-prev").addEventListener("click", () => show(current - 1));
  box.querySelector(".lb-next").addEventListener("click", () => show(current + 1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); }); // click the backdrop

  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
}
=======
>>>>>>> 2768d1d3804baa014033665aba9805fb7a39b606
