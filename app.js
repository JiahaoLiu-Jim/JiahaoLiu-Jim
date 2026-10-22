function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}
function safeURL(value = "") {
  try {
    const url = new URL(value, window.location.href);
    if (["http:", "https:", "mailto:"].includes(url.protocol)) return url.href;
  } catch (_) {}
  return "#";
}
function renderCard(project, category) {
  const tags = (project.tags || []).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("");
  const cover = project.cover ? `<img src="${escapeHTML(project.cover)}" alt="${escapeHTML(project.title)} cover image" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">` : "";
  return `<article class="project-card">
    <div class="project-cover">${cover}<div class="cover-placeholder" style="${project.cover ? "display:none" : ""}"><span>⌘</span>ADD A PROJECT IMAGE</div></div>
    <div class="project-content">
      <div class="project-meta"><span>${escapeHTML(project.role || category)}</span><span>${escapeHTML(project.date || "")}</span></div>
      <h3>${escapeHTML(project.title)}</h3>
      <p>${escapeHTML(project.summary)}</p>
      <div class="tag-list">${tags}</div>
      <div class="card-footer"><button class="text-link" data-project="${escapeHTML(project.id)}" data-category="${escapeHTML(category)}">Explore project ↗</button><span class="project-meta">${(project.images || []).length} images</span></div>
    </div>
  </article>`;
}
function renderProjects() {
  const data = window.PORTFOLIO || {};
  document.getElementById("quantum-grid").innerHTML = (data.quantum || []).map(p => renderCard(p, "Quantum research")).join("") || '<div class="empty-state">Add quantum projects in content.js.</div>';
  document.getElementById("electronics-grid").innerHTML = (data.electronics || []).map(p => renderCard(p, "Electronics")).join("") || '<div class="empty-state">Add electronics projects in content.js.</div>';
  const contacts = (data.contact || []).map(c => `<a href="${safeURL(c.url)}" target="${c.url.startsWith("mailto:") ? "_self" : "_blank"}" rel="noopener noreferrer">${escapeHTML(c.label)} ↗</a>`).join("");
  document.getElementById("contact-links").innerHTML = contacts;
  document.getElementById("year").textContent = new Date().getFullYear();
}
function renderSection(section) {
  let out = `<section><h3>${escapeHTML(section.heading || "")}</h3>`;
  if (section.text) out += `<p>${escapeHTML(section.text)}</p>`;
  if (section.bullets && section.bullets.length) out += `<ul class="detail-list">${section.bullets.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul>`;
  if (section.formula) out += `<div class="equation">${section.formula}</div>`;
  if (section.html) out += `<div>${section.html}</div>`;
  out += `</section>`;
  return out;
}
function openProject(id, category) {
  const all = [...(window.PORTFOLIO.quantum || []), ...(window.PORTFOLIO.electronics || [])];
  const project = all.find(p => p.id === id);
  if (!project) return;
  const dialog = document.getElementById("project-dialog");
  const imageHTML = (project.images || []).map(image => `<figure>
    <img src="${escapeHTML(image.src)}" alt="${escapeHTML(image.alt || image.caption || project.title)}" loading="lazy">
    ${image.caption ? `<figcaption>${escapeHTML(image.caption)}</figcaption>` : ""}
  </figure>`).join("");
  const linksHTML = (project.links || []).map((link, i) => `<a class="${i ? "secondary-link" : ""}" href="${safeURL(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)} ↗</a>`).join("");
  document.getElementById("dialog-content").innerHTML = `<div class="dialog-inner">
    <p class="eyebrow">${escapeHTML(category)}${project.date ? " / " + escapeHTML(project.date) : ""}</p>
    <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
    <p class="lead">${escapeHTML(project.summary)}</p>
    ${(project.sections || []).map(renderSection).join("")}
    ${imageHTML ? `<section><h3>Project gallery</h3><div class="gallery">${imageHTML}</div></section>` : ""}
    ${linksHTML ? `<div class="detail-links">${linksHTML}</div>` : ""}
  </div>`;
  dialog.showModal();
  if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise([document.getElementById("dialog-content")]);
}
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  document.body.addEventListener("click", event => {
    const button = event.target.closest("[data-project]");
    if (button) openProject(button.dataset.project, button.dataset.category);
  });
  const dialog = document.getElementById("project-dialog");
  document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && dialog.open) dialog.close(); });
});
