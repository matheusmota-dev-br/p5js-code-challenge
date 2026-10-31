const gallery = document.getElementById('gallery')
const canHover = matchMedia('(hover: hover)').matches
const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches

const pad = (number) => String(number).padStart(3, '0')

gallery.innerHTML = SKETCHES.map(
  ({ slug, title, challenge, tag, summary, still }) => `
    <li>
      <a class="card" href="sketches/${slug}/"${still ? ' data-still' : ''}>
        <span class="card-media">
          <img src="sketches/${slug}/preview.webp" alt="" width="480" height="480" loading="lazy">
        </span>
        <span class="card-meta">
          <span>#${pad(challenge)}</span>
          <span>${tag}</span>
        </span>
        <span class="card-title">${title}</span>
        <span class="card-summary">${summary}</span>
      </a>
    </li>`
).join('')

// The clips are only requested on hover, so the page stays light.
function playClipOnHover(card) {
  const media = card.querySelector('.card-media')
  let video = null

  const play = () => {
    if (!video) {
      video = document.createElement('video')
      video.src = `${card.getAttribute('href')}preview.mp4`
      video.muted = true
      video.loop = true
      video.playsInline = true
      video.addEventListener('playing', () => video.classList.add('is-playing'))
      media.append(video)
    }
    video.play().catch(() => {})
  }

  const stop = () => {
    if (video) {
      video.pause()
      video.classList.remove('is-playing')
    }
  }

  card.addEventListener('pointerenter', play)
  card.addEventListener('pointerleave', stop)
  card.addEventListener('focus', play)
  card.addEventListener('blur', stop)
}

if (canHover && !prefersReducedMotion) {
  gallery.querySelectorAll('.card:not([data-still])').forEach(playClipOnHover)
}
