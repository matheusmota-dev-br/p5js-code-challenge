# p5.js Code Challenge

Ten generative sketches built with [p5.js](https://p5js.org/), following the [Coding Challenges](https://thecodingtrain.com/challenges) by Daniel Shiffman on The Coding Train.

**[See them all running live](https://matheusmota-dev-br.github.io/p5js-code-challenge/)**

| Challenge | Sketch | Type | Source |
| --- | --- | --- | --- |
| 1 | [Starfield](https://matheusmota-dev-br.github.io/p5js-code-challenge/sketches/starfield/) | Simulation | [code](sketches/starfield) |
| 2 | [Menger Sponge](https://matheusmota-dev-br.github.io/p5js-code-challenge/sketches/menger-sponge/) | Fractal | [code](sketches/menger-sponge) |
| 3 | [Snake Game](https://matheusmota-dev-br.github.io/p5js-code-challenge/sketches/snake-game/) | Game | [code](sketches/snake-game) |
| 4 | [Purple Rain](https://matheusmota-dev-br.github.io/p5js-code-challenge/sketches/purple-rain/) | Simulation | [code](sketches/purple-rain) |
| 8 | [Solar System](https://matheusmota-dev-br.github.io/p5js-code-challenge/sketches/solar-system/) | Simulation | [code](sketches/solar-system) |
| 10 | [Maze Generation](https://matheusmota-dev-br.github.io/p5js-code-challenge/sketches/maze-generation/) | Algorithm | [code](sketches/maze-generation) |
| 12 | [Lorenz Attractor](https://matheusmota-dev-br.github.io/p5js-code-challenge/sketches/lorenz-attractor/) | Simulation | [code](sketches/lorenz-attractor) |
| 14 | [Fractal Trees](https://matheusmota-dev-br.github.io/p5js-code-challenge/sketches/fractal-trees/) | Fractal | [code](sketches/fractal-trees) |
| 21 | [Mandelbrot Set](https://matheusmota-dev-br.github.io/p5js-code-challenge/sketches/mandelbrot/) | Fractal | [code](sketches/mandelbrot) |
| 98 | [Quadtree](https://matheusmota-dev-br.github.io/p5js-code-challenge/sketches/quadtree/) | Algorithm | [code](sketches/quadtree) |

## Running locally

There is no build step. Serve the repository root with any static server:

```sh
npx serve .
```

## Project structure

```
index.html          Gallery
404.html            Not found page, redirects the old sketch URLs
assets/
  catalog.js        List of sketches used by the gallery and the sketch pages
  gallery.js        Renders the gallery
  sketch-page.js    Renders the header and description of a sketch page
  site.css          Styles for the whole site
sketches/<name>/
  index.html        Loads p5.js and the sketch
  sketch.js         Sketch code, plus one file per class
  preview.webp      Gallery image
  preview.mp4       Clip played when hovering over a gallery card
  demo.gif          Animation shown in the sketch README
```

## Adding a sketch

1. Copy a folder inside `sketches/` and update its `index.html`, including `data-sketch`.
2. Add an entry to `assets/catalog.js`.
3. Add a `preview.webp` and a `preview.mp4`, or set `still: true` to skip the clip.

The site is published with GitHub Pages from the root of `master`.
