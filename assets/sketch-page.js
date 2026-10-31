// Builds the header and the description around the canvas. p5.js places the
// canvas inside the page's <main> element on its own.
const stage = document.getElementById('stage')
const position = SKETCHES.findIndex(({ slug }) => slug === document.body.dataset.sketch)
const sketch = SKETCHES[position]

const neighbor = (offset) =>
  SKETCHES[(position + offset + SKETCHES.length) % SKETCHES.length]
const previous = neighbor(-1)
const next = neighbor(1)
const number = String(sketch.challenge).padStart(3, '0')

stage.insertAdjacentHTML(
  'beforebegin',
  `<header class="topbar">
    <a href="../../">&larr; All sketches</a>
    <span>${position + 1} / ${SKETCHES.length}</span>
  </header>`
)

stage.insertAdjacentHTML(
  'afterend',
  `<aside class="details">
    <p class="eyebrow">Challenge #${number} · ${sketch.tag}</p>
    <h1>${sketch.title}</h1>
    <p>${sketch.summary}</p>
    <p class="hint">${sketch.hint}</p>
    <ul class="links">
      <li><a href="${SITE.repo}/tree/master/sketches/${sketch.slug}">Source code</a></li>
      <li><a href="${sketch.challengeUrl}">Original challenge</a></li>
    </ul>
    <nav class="pager" aria-label="Other sketches">
      <a href="../${previous.slug}/" rel="prev"><small>Previous</small>${previous.title}</a>
      <a href="../${next.slug}/" rel="next"><small>Next</small>${next.title}</a>
    </nav>
  </aside>`
)
