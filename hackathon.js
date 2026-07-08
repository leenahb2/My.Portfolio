const params = new URLSearchParams(window.location.search);
const hackathonId = params.get("id") || "eduthon";
const hackathon = HACKATHONS[hackathonId] || HACKATHONS.eduthon;

document.title = `${hackathon.name} | Leena Bahweny`;
document.querySelector("#hackathon-category").textContent = `${hackathon.year} / ${hackathon.category}`;
document.querySelector("#hackathon-title").textContent = hackathon.name;
document.querySelector("#hackathon-subtitle").textContent = hackathon.subtitle;
document.querySelector("#hackathon-description").textContent = hackathon.description;

const contributions = document.querySelector("#hackathon-contributions");
contributions.innerHTML = hackathon.contributions.map(item => `<p>${item}</p>`).join("");

const features = document.querySelector("#hackathon-features");
features.innerHTML = hackathon.features.map(feature => `<span>${feature}</span>`).join("");

const tags = document.querySelector("#hackathon-tags");
tags.innerHTML = hackathon.tags.map(tag => `<span>${tag}</span>`).join("");

const galleryTrack = document.querySelector("#gallery-track");
const galleryDots = document.querySelector("#gallery-dots");
let activeSlide = 0;

function visualMarkup(visual) {
  return `
    <section class="gallery-slide gallery-slide--${visual.accent}" aria-label="${visual.label}">
      <div class="mock-screen mock-screen--${visual.type}">
        <div class="mock-topbar">
          <span></span><span></span><span></span>
        </div>
        <div class="mock-visual-body">
          <div class="mock-kpi"></div>
          <div class="mock-kpi"></div>
          <div class="mock-chart"></div>
          <div class="mock-lines">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
      <p>${visual.label}</p>
    </section>
  `;
}

galleryTrack.innerHTML = hackathon.visuals.map(visualMarkup).join("");
galleryDots.innerHTML = hackathon.visuals
  .map((_, index) => `<button type="button" aria-label="Go to media ${index + 1}" data-gallery-dot="${index}"></button>`)
  .join("");

function updateGallery(nextIndex) {
  const total = hackathon.visuals.length;
  activeSlide = (nextIndex + total) % total;
  galleryTrack.style.transform = `translateX(-${activeSlide * 100}%)`;

  document.querySelectorAll("[data-gallery-dot]").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activeSlide);
  });
}

document.querySelector("[data-gallery-next]").addEventListener("click", () => updateGallery(activeSlide + 1));
document.querySelector("[data-gallery-prev]").addEventListener("click", () => updateGallery(activeSlide - 1));
document.querySelectorAll("[data-gallery-dot]").forEach(dot => {
  dot.addEventListener("click", () => updateGallery(Number(dot.dataset.galleryDot)));
});

updateGallery(0);
