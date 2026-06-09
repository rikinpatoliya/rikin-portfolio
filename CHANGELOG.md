# Changelog — Rikin Portfolio

All notable changes to this project are documented here.

---

## [2026-06-09] — Right-Aligned Stats Layout Fix & Cache-Busting

### Fixed
- `pages/work.html` — injected custom flexbox styling (`.work-header-container` and `.work-stats-wrapper`) directly in the HTML view using inline CSS (with `!important`) to ensure that stats cards are aligned side-by-side on the right of the header text block on desktop, bypassing lack of Tailwind CSS parser and any browser CSS caching.
- `index.html` — added version query parameters (`?v=1.0.2` and cache buster on pages load array) to force reload JS and HTML files, resolving persistent browser caching issues.
- `index.html` — reordered stylesheet imports so `custom.css` is loaded last.

## [2026-06-05] — Right-Aligned Dynamic Stats & Variables

### Added
- `assets/js/work-data.js` — declared global configuration constants `YEARS_OF_EXPERIENCE` ("8+") and `LIVE_APPS_COUNT` ("15+") as requested.
- `assets/js/work-data.js` — implemented `updateGlobalStats()` utility to dynamically update all occurrences of years of experience and live apps counts across the DOM (including plain values for clean text parsing).
- `index.html` — added `updateGlobalStats()` callback to execute once all AJAX pages have successfully loaded.

### Changed
- `pages/work.html` — updated header container flex layout alignment (changed `md:items-center` to `md:items-end`) to align stats cards flush with the bottom of the header.
- `pages/work.html` — added `global-years-exp` and `global-live-apps` dynamic classes to stats cards spans.
- `pages/home.html` — wrapped years of experience text inside dynamic `<span class="global-years-exp">` tag.
- `pages/about.html` — updated the bio description and the counters to use dynamic `<span class="global-years-exp-plain">` and `<span class="global-years-exp">` tags respectively.
- `assets/css/custom.css` — fixed a syntax error `min-w-[120px]` in `.stats-card` to `min-width: 120px`.

## [2026-06-05] — Mobile Layout & Portfolio Grid Responsiveness

### Changed
- `index.html` — updated the mobile topbar logo `data-type` to `text` to display "Rikin Patoliya" instead of the theme's default "R.Elisc" logo image.
- `index.html` — updated the mobile menu list by removing the deprecated "Services" link and adding the "Work" experience timeline link in its correct order.
- `assets/css/custom.css` — added media query overrides for the mobile view:
  - Adjusted the mobile topbar text logo size to `20px` to fit perfectly on small screens without overlapping elements.
  - Made the portfolio grid items responsive: they now stretch to `100%` width on mobile viewports (<= 768px) and `50%` width on tablets (<= 1040px), fixing the issue where they were squeezed in 3 columns.
  - Cleared the left padding on mobile viewports for full-width card layout alignment.

## [2026-06-05] — Dynamic Work Experience Data Model

### Added
- `assets/js/work-data.js` — created single source of truth for all professional experience data (`workExperience[]` array) and dynamic rendering engine (`renderWorkTimeline()`).
- `index.html` — imported `assets/js/work-data.js` and call `renderWorkTimeline()` on dynamic page ready callback.

### Changed
- `pages/work.html` — cleared hardcoded timeline HTML to serve as a clean skeleton for dynamic timeline injection.

## [2026-06-05] — Work Experience Timeline Redesign

### Added
- `pages/work.html` — redesigned the work experience page into an alternating, modern professional timeline.
  - Added header statistics badges showing "8+ Years Exp." and "15+ Live Apps".
  - Structured jobs with alternating left-right card wrappers along a central vertical line.
  - Added modern tech tag badges (Flutter, Dart, Firebase, Kotlin, Java) at the top of each experience card.
  - Replaced basic bullets with elegant circular checkmark SVGs.
- `assets/css/custom.css` — added custom timeline container, line, active/past milestone badges, cards with subtle shadows/hover effects, and stats-card CSS components. Included mobile media queries to automatically collapse the timeline to a single-column layout.

## [2026-06-05] — Horizontal Screenshots Carousel Fix

### Changed
- `assets/js/init.js` — refactored `portfolio_popup_carousel()` selector to only match the active visible details carousel (`#portfolio-detail .popup_details .portfolio_list1 .owl-carousel`). This prevents hidden templates from being pre-initialized with 0 width, ensuring that screenshots are correctly laid out horizontally in a single-row scrollable carousel when opened.
- `assets/js/init.js` — optimized carousel responsive config to display 3 items on desktop and 4 items on widescreen monitors (instead of 2), which is ideal for mobile app portrait screenshots.

## [2026-06-05] — Popup Modal Restore & Data-Driven Grid

### Changed
- `assets/js/init.js` — restored `elisc_tm_modalbox_portfolio()` to use the original
  global fullscreen popup modal (`.elisc_tm_modalbox`) for project details; removed
  all inline-view transition code that was causing a blank white screen
- `pages/portfolio.html` — removed `portfolio_main_group` wrapper and
  `portfolio_details_group` inline detail block; restored plain grid skeleton
- `assets/css/custom.css` — removed inline portfolio detail CSS overrides

### Added
- `assets/js/portfolio-data.js` — single source of truth for all portfolio projects
  - `portfolioProjects[]` array: add/edit/remove projects here only
  - Each project object: `projectName`, `projectCategory`, `mainImage`,
    `description[]`, `links.googlePlay`, `links.appStore`, `screenShortList[]`
  - `renderPortfolioGrid()` — auto-generates all `<li>` grid items from the data array

### Changed (same session)
- `index.html` — added `<script src="assets/js/portfolio-data.js">` before `init.js`;
  calls `renderPortfolioGrid()` then `initializePortfolio()` after all page fragments load
- `pages/portfolio.html` — removed all static `<li>` portfolio items; grid is now
  populated entirely by `renderPortfolioGrid()`

---

## [2026-06-05] — Modular Page Split (earlier session)

### Changed
- `index.html` — replaced all inline section HTML with empty `<div>` containers;
  each section now loaded via jQuery `.load()` AJAX on page ready
- Extracted each section into its own fragment file:
  - `pages/home.html`
  - `pages/about.html`
  - `pages/work.html`
  - `pages/portfolio.html`
  - `pages/contact.html`

---

## [prior commits] — Historical

| Commit | Message |
|--------|---------|
| `ef1e5f5` | Merge production branch |
| `8ad30a2` | Updated work experience section |
| `89c9ae1` | Update screenshots in portfolio |
| `34923a9` | Minor changes |
| `cd1fdfa` | Add more portfolio items |
| `81b01b5` | Add portfolio images |
| `34518b0` | Portfolio changes |
| `c1b2578` | Add Roongta HRMS app |
| `03c6b1b` | Minor |
| `96ba2b9` | Minor change |
| `ecd77ea` | Init |
| `41315a1` | Initial commit |
