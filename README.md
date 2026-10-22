# Jiahao Liu — Portfolio website

A responsive static portfolio for GitHub Pages with three main areas:
1. Quantum research
2. Electronics projects
3. About me (cooking, biking, nature)

## Publish on GitHub Pages

1. Extract the ZIP.
2. Upload all files and folders into the root of your GitHub Pages repository.
3. Keep `index.html`, `styles.css`, `content.js`, and `app.js` at the repository root.
4. Commit the changes.
5. In repository Settings → Pages, use `Deploy from a branch`, branch `main`, folder `/ (root)`.
6. Open your GitHub Pages URL after deployment completes.

## Add a project

Edit `content.js`. Add a new object inside either `quantum` or `electronics`. Duplicate an existing object and change its `id`, title, summary, tags, sections, images, and links.

A project object supports:
- `title`, `date`, `role`, `summary`, `tags`
- `cover`: path to a cover image
- `sections`: any number of text sections, bullet lists, and LaTeX formulas
- `images`: any number of images with captions
- `links`: any number of external links

Example:
```js
{
  id: "my-new-project",
  title: "My New Project",
  date: "2027",
  role: "Independent project",
  summary: "A short introduction.",
  tags: ["Python", "Experiment"],
  cover: "assets/images/my-project-cover.jpg",
  sections: [
    { heading: "Background", text: "Explain the problem here." },
    { heading: "Method", bullets: ["Step one", "Step two"] },
    { heading: "Theory", text: "Add a formula:", formula: "\\[ H = \\hbar \\omega \\sigma_z/2 \\]" }
  ],
  images: [
    { src: "assets/images/my-project-01.jpg", alt: "Setup overview", caption: "Experimental setup." },
    { src: "assets/images/my-project-02.png", alt: "Measurement result", caption: "Measured response." }
  ],
  links: [
    { label: "Report PDF", url: "assets/reports/my-report.pdf" },
    { label: "GitHub repository", url: "https://github.com/your-account/your-repo" }
  ]
}
```

## Add images

1. Put image files in `assets/images/`.
2. Add the relative path to the project's `cover` or `images` array in `content.js`.
3. Use as many image objects as needed. The layout automatically creates a responsive gallery.
4. Prefer web-friendly JPG/WebP for photos and PNG/SVG for diagrams. There is no hard-coded photo count in the template, but GitHub has repository/file size limits. For very large images or many large datasets, use compressed images or link to an external storage/archive.

## Add LaTeX formulas

MathJax is loaded from a CDN. Use LaTeX strings in a section's `formula` field, e.g.:
```js
formula: "\\[ \\Omega = \\gamma_e B_{1,\\perp}, \\qquad t_\\pi = \\frac{\\pi}{\\Omega}. \\]"
```
Inline LaTeX can be written in a section's `text` string as `\\(T_1\\)` or `$T_1$`. Formula rendering requires an internet connection to load MathJax.

## Personalise before publishing

- Replace `your.email@example.com` in `content.js` with your preferred public contact email.
- Replace GitHub and LinkedIn placeholder links.
- Add your own approved photos to `assets/images/`.
- Check all company/research content before publishing; do not upload confidential schematics, unpublished data, or material you do not have permission to share.
- Review project descriptions and metrics for accuracy before making the site public.

## File map

- `index.html`: page structure
- `styles.css`: design and responsive layout
- `content.js`: all project content, formulas, image paths, links, and contact details
- `app.js`: builds project cards and detail views
- `assets/images/`: add your own images here
