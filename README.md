# Jiahao Liu — Personal website

A static portfolio for GitHub Pages. No database, server subscription, or build step is required.

## First deployment

1. Upload this folder's contents to your GitHub repository root. Keep the vendor folder intact. Upload extracted files, not the ZIP or an enclosing folder.
2. Select Settings → Pages → Deploy from a branch → main → /(root) → Save.
3. Wait for deployment and open the URL provided by GitHub, usually https://USERNAME.github.io/REPOSITORY/.
4. Select Admin and sign in using the supplied credentials. Only a salted SHA-256 password hash is stored in content.js.
5. Change credentials under Account & password, then export and upload the website.

## Everyday editing

- Add a post: Admin → Posts → Add post → choose a section → enter a title, summary, and body → upload up to 20 photos → Set as cover → Save locally.
- Format text with bold, italic, headings, lists, and links. Pasted text becomes plain text for consistent formatting.
- Upload JPG, PNG, or WebP images smaller than 30 MB each. They are converted to JPEG with a maximum dimension of 1600 pixels. Add captions, reorder, and remove photos through the editor.
- Manage sections under Sections / Sub-websites. Use Add section and ↑ ↓ to reorder. Move or delete posts before deleting their section.
- Use ↑ ↓ to reorder posts within each section.
- Edit your introduction and contact links under Home & contact. Empty contact fields are hidden.
- Select a cover, title, or Explore link to open the detail page. Select a photo to enlarge it.
- After saving locally, use the navigation to preview changes. Signing out restores the published view.

## Publishing changes

Select Export & publish → Export complete website (ZIP). Unzip the package, upload its contents to the same GitHub repository, replace existing files, and select Commit changes. Wait for Pages to deploy.

Saving locally does not publish changes. Visitors see updates only after you upload the exported website. The editor does not require a GitHub token or write directly to the repository.

Export reads up to four files at a time, displays progress, and reports a timeout if a file takes more than 20 seconds. Photos are stored in the ZIP without additional compression.

Photos are exported to assets/ and content to content.js. Removed photos may remain in the repository from a previous upload. You can delete unused files manually; they no longer appear on the website.

## Backups

Local content uses IndexedDB and belongs to the current browser and website address. Download a content backup under Export & publish before clearing browser data or changing computers. Backups include photos and account settings; restoring one replaces local content. Avoid private browsing for long-term editing.

When switching computers, import the latest backup to avoid overwriting newer edits. A newer published version takes precedence over an older local version.

## Updating the English interface

For an existing website, replace app.js, index.html, styles.css, and README.md. Keep your existing content.js and assets/ folder to preserve posts, photos, and account settings. Save open edits before refreshing.

## Local preview

Opening index.html directly lets you view the page, but editing and export require HTTP or HTTPS. With Python installed, run `python -m http.server 8765` in this folder and visit http://localhost:8765. No local server is needed on GitHub Pages.

## Technical notes

- HTML, CSS, JavaScript, and JSZip 3.10.1 (MIT; license included in the library file).
- Browser-based password verification prevents accidental edits. It is not secure access control and does not grant permission to modify GitHub. Do not use it to protect private content.
- Hash routes such as #/category/… and #/post/… work with GitHub Pages subdirectories and refreshes.
- The original files contained no photos. Initial cards use abstract placeholders; upload your own photos through the editor.
- Original research descriptions, project links, and formula text are preserved. Formulas display as LaTeX source.
- System fonts are used if Google Fonts is unavailable.

