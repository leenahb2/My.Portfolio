const params = new URLSearchParams(window.location.search);
const projectId = params.get("id") || "prodify";
const project = PROJECTS[projectId] || PROJECTS.prodify;
const projectIds = Object.keys(PROJECTS);
const currentIndex = Math.max(0, projectIds.indexOf(projectId));
const nextProjectId = projectIds[(currentIndex + 1) % projectIds.length];
const nextProject = PROJECTS[nextProjectId];

document.title = `${project.name} | Leena Bahweny`;
document.querySelector("#project-category").textContent = `${project.index} / ${project.category}`;
document.querySelector("#project-title").textContent = project.name;
document.querySelector("#project-subtitle").textContent = project.subtitle;
document.querySelector("#project-description").textContent = project.description;
document.querySelectorAll("#next-project-link, #next-project-link-mobile").forEach(link => {
  link.href = `project.html?id=${nextProjectId}`;
  link.textContent = `Next: ${nextProject.name} →`;
});

const detailList = document.querySelector("#project-details");
detailList.innerHTML = project.details.map(item => `<p>${item}</p>`).join("");

const featureBlock = document.querySelector("#project-feature-block");
const features = document.querySelector("#project-features");
if (project.features?.length) {
  featureBlock.hidden = false;
  features.innerHTML = project.features.map(feature => `<span>${feature}</span>`).join("");
} else {
  featureBlock.hidden = true;
  features.innerHTML = "";
}

const tags = document.querySelector("#project-tags");
tags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");

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

galleryTrack.innerHTML = project.visuals.map(visualMarkup).join("");
galleryDots.innerHTML = project.visuals
  .map((_, index) => `<button type="button" aria-label="Go to media ${index + 1}" data-gallery-dot="${index}"></button>`)
  .join("");

function updateGallery(nextIndex) {
  const total = project.visuals.length;
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
