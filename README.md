# 🌍 Country Explorer

A dynamic and responsive country discovery web application built with vanilla HTML, CSS, and JavaScript. Country Explorer lets users search, filter, and sort countries using real-time data from the RestCountries API.

---

## Purpose

Country Explorer is designed to help users discover and learn about countries effortlessly. Instead of searching endlessly, users can look up specific countries, filter by region, and sort results by name or population — all in a clean, responsive, and visually appealing interface.

---

## API Used

**RestCountries API**

- Base URL: `https://restcountries.com/v3.1`
- Documentation: https://restcountries.com
- Free tier: Yes (no API key required)
- Data provided: Country names, flags, population, region, subregion, capital, languages, currencies, and border countries

---

## Planned Features

**Core Features**
- **API Integration** — Fetch real-time country data using RestCountries API
- **Country Cards** — Display flag, country name, capital, region, and population
- **Loading States** — Spinner shown while data is being fetched
- **Fully Responsive** — Works on mobile, tablet, and desktop
- **Search** — Search countries by name in real time
- **Filter** — Filter countries by region (Africa, Asia, Europe, Americas, Oceania)
- **Sort** — Sort countries by name or population (ascending/descending)
- **Dark / Light Mode** — Toggle between dark and light themes
- **Favourites** — Save and remove favourite countries

**Bonus Features (Optional)**
- **Debounced Search** — Optimized search to avoid excessive re-renders
- **Pagination** — Browse countries across multiple pages
- **Local Storage** — Persist favourites and theme preference across sessions
- **Country Detail View** — Click a card to view in-depth country information

---

## Technologies

- HTML, CSS, JavaScript
- RestCountries API + Fetch API
- localStorage (for favourites and theme preference)

---

## Setup & Run

1. Clone or download this repository
2. Open `index.html` in your browser and you're good to go!
