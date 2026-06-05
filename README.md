# Rikin Patoliya - Portfolio

Personal portfolio website for Rikin Patoliya, a mobile application developer specializing in Android and iOS apps.

## About

Static HTML/CSS/JS site built on the Elisc template (Tailwind CSS + jQuery). Content loads dynamically via jQuery .load() AJAX fragments.

## Tech Stack

- HTML5 / CSS3 / Tailwind CSS
- jQuery (DOM, AJAX page loading, modal boxes)
- Owl Carousel / Tiny Slider (screenshot galleries)
- Vanilla JS data model for portfolio grid

## Project Structure

rikin-portfolio/
  index.html                  # Shell -- loads all page fragments
  pages/
    home.html
    about.html
    work.html
    portfolio.html            # Grid fragment (populated by JS)
    contact.html
  assets/
    css/
    img/
    js/
      portfolio-data.js       # Portfolio data model (edit here to add projects)
      init.js                 # jQuery init, modal box, animations
      plugins.js
  CHANGELOG.md
  README.md

## Adding a Portfolio Project

Open assets/js/portfolio-data.js and add an entry to the portfolioProjects array:

  {
    projectName: "My App",
    projectCategory: "Android",
    mainImage: "assets/img/portfolio/my-app/thumb.jpg",
    description: [
      "First paragraph about the app.",
      "Second paragraph (optional)."
    ],
    links: {
      googlePlay: { image: "assets/img/portfolio/google_play.png", link: "https://play.google.com/..." },
      appStore:   { image: "assets/img/portfolio/app_store.png",   link: "https://apps.apple.com/..." }
    },
    screenShortList: [
      "assets/img/portfolio/my-app/screen1.jpg",
      "assets/img/portfolio/my-app/screen2.jpg"
    ]
  }

Save the file -- the grid updates automatically on next page load. No HTML edits needed.

## Development

Open index.html directly in a browser (or serve via a local HTTP server to avoid AJAX CORS issues):

  npx serve .
  # or
  python -m http.server 8080

## Changelog

See CHANGELOG.md
