# 🌍 Countries Explorer

🔗 **Live Demo:** [world-lens-country-explorer-project.vercel.app](https://world-lens-country-explorer-project.vercel.app/)

A frontend web application that lets you explore information about every country in the world — search, filter, sort, and build your personal travel bucket list.

---

## 📌 Overview

Countries Explorer fetches live data from the [REST Countries API](https://restcountries.com/) and displays it in an interactive card-based UI. Users can search by name, filter by region, sort alphabetically or by population, view detailed country info, and save countries to a personal "Dream List."

---

## ✨ Features

- 🔍 **Search** — Filter countries by name in real time
- 🌐 **Region Filter** — Narrow results by continent/region (Africa, Asia, Europe, etc.)
- 🔤 **Alphabetical Sort** — Toggle between A→Z and Z→A ordering
- 👥 **Population Sort** — Sort countries from most to least populated, or vice versa
- 🪟 **Detail Popup** — Click any country card to see its region, population, and capital
- ❤️ **Dream List** — Add countries you want to visit and remove them whenever you like

---

## 🗂️ Project Structure

```
countries-explorer/
├── index.html       # App markup and layout
├── style.css        # Styling for cards, popup, dream list, etc.
└── script.js        # All application logic (DOM, API calls, state)
```

---

## ⚙️ How It Works

### Data Loading

On page load, `loadAll()` fetches all countries from the REST Countries API using the fields: `name`, `flags`, `population`, `region`, `capital`, and `cca3`. The results are sorted alphabetically and stored in `allCountries`.

```
https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3
```

### State Management

Two main arrays drive the UI:

| Variable | Purpose |
|---|---|
| `allCountries` | Master list of all countries, never mutated after load |
| `currentDisplay` | The filtered/sorted subset currently shown on screen |
| `dreamCountries` | Array of country names saved to the Dream List |

### Search & Filter

`applyFilters()` reads the search input and selected region, then filters `allCountries` into `currentDisplay` and re-renders the list. Both filters work together simultaneously.

### Sorting

- **Name sort** — Toggles `nameAsc` flag and sorts `currentDisplay` alphabetically
- **Population sort** — Toggles `popAsc` flag and sorts `currentDisplay` numerically

Sorting always operates on `currentDisplay`, so it respects active search/filter state.

### Country Detail

Clicking a card calls `getOneInfo(name)`, which fetches full details for that country:

```
https://restcountries.com/v3.1/name/{name}?fullText=true
```

The detail popup shows the country's name, region, population, and capital.

### Dream List

- **Add** — Click "Add to Dream List" inside the detail popup; duplicates are ignored
- **Remove** — Each dream list entry has its own Remove button
- The list re-renders fully on every add/remove via `renderDreamList()`

---

## 🚀 Getting Started

No build tools or dependencies required. Just open `index.html` in your browser.

```bash
# Clone or download the project
git clone https://github.com/Abhi-2206/WorldLens-Country-Explorer-Project-.git

# Open in browser
open index.html
# or just double-click index.html in your file explorer
```

> ⚠️ Requires an internet connection to fetch data from the REST Countries API.

---

## 🔌 API Reference

This project uses the free [REST Countries v3.1 API](https://restcountries.com/).

| Endpoint | Used For |
|---|---|
| `/v3.1/all?fields=...` | Loading all countries on startup |
| `/v3.1/name/{name}?fullText=true` | Fetching full detail for a single country |

No API key is required.

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| HTML | App structure |
| CSS | Styling and layout |
| Vanilla JavaScript | All logic, DOM manipulation, API calls |
| REST Countries API | Country data source |

---

## 📄 License

This project is open source and free to use for learning and personal projects.
