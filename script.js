let allCountries = [], currentDisplay = [];
let nameAsc = true, popAsc = false;

function loadAll() {
  fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3")
    .then(res => res.json())
    .then(data => {
      allCountries = data.sort(function(a, b) {
        if (a.name.common > b.name.common) {
          return 1;
        } else {
          return -1;
        }
      });
      currentDisplay = [...allCountries];
      showCountries(allCountries);
    });
}

function showCountries(countries) {
  const list = document.getElementById("list");
  if (countries.length > 0) {
    list.innerHTML = "";
  } else {
    list.innerHTML = "No countries found.";
  }
  
  countries.forEach(c => {
    const card = document.createElement("div");
    card.className = "country-card";
    card.innerHTML = `<img src="${c.flags.png}"><h3>${c.name.common}</h3><p>Pop: ${c.population}</p>`;
    card.onclick = () => getOneInfo(c.name.common);
    list.appendChild(card);
  });
}

function applyFilters() {
  const term = document.getElementById("search-input").value.toLowerCase();
  const region = document.getElementById("continent-filter").value;
  currentDisplay = allCountries.filter(c => {
    const matchesName = c.name.common.toLowerCase().includes(term);
    let matchesRegion = false;
    if (region === "All" || c.region === region) {
      matchesRegion = true;
    }
    return matchesName && matchesRegion;
  });
  showCountries(currentDisplay);
}

document.getElementById("search-btn").onclick = applyFilters;
document.getElementById("continent-filter").onchange = applyFilters;

document.getElementById("sort-btn").onclick = () => {
  nameAsc = !nameAsc;
  currentDisplay.sort(function(a, b) {
    if (nameAsc) {
      if (a.name.common > b.name.common) return 1;
      else return -1;
    } else {
      if (a.name.common < b.name.common) return 1;
      else return -1;
    }
  });
  if (nameAsc) {
    document.getElementById("sort-btn").innerText = "Sort A-Z";
  } else {
    document.getElementById("sort-btn").innerText = "Sort Z-A";
  }
  showCountries(currentDisplay);
};

document.getElementById("pop-sort-btn").onclick = () => {
  popAsc = !popAsc;
  currentDisplay.sort(function(a, b) {
    if (popAsc) {
      return a.population - b.population;
    } else {
      return b.population - a.population;
    }
  });
  if (popAsc) {
    document.getElementById("pop-sort-btn").innerText = "Pop Asc";
  } else {
    document.getElementById("pop-sort-btn").innerText = "Pop Desc";
  }
  showCountries(currentDisplay);
};

async function getOneInfo(name) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
  const data = await res.json();
  const c = data[0];
  document.getElementById("country-name").innerText = c.name.common;
  
  let capitalName = "N/A";
  if (c.capital && c.capital.length > 0) {
    capitalName = c.capital[0];
  }
  
  document.getElementById("country-info").innerText = "Region: " + c.region + ", Population: " + c.population + ", Capital: " + capitalName;
  document.getElementById("detail-box").style.display = "block";
}

document.getElementById("close-btn").onclick = () => document.getElementById("detail-box").style.display = "none";

let dreamCountries = [];

function renderDreamList() {
  const list = document.getElementById("dream-list");
  list.innerHTML = "";
  
  if (dreamCountries.length === 0) {
    const li = document.createElement("li");
    li.innerText = "None yet!";
    list.appendChild(li);
  } else {
    let i = 0;
    while (i < dreamCountries.length) {
      const countryName = dreamCountries[i];
      const li = document.createElement("li");
      li.style.marginBottom = "5px";
      li.innerText = countryName + " ";
      
      const removeBtn = document.createElement("button");
      removeBtn.innerText = "Remove";
      removeBtn.style.background = "#c0392b";
      removeBtn.style.padding = "2px 8px";
      removeBtn.style.fontSize = "12px";
      
      const indexToRemove = i;
      removeBtn.onclick = function() {
        dreamCountries.splice(indexToRemove, 1);
        renderDreamList();
      };
      
      li.appendChild(removeBtn);
      list.appendChild(li);
      i = i + 1;
    }
  }
}

document.getElementById("set-dream-btn").onclick = function() {
  const name = document.getElementById("country-name").innerText;
  
  let alreadyAdded = false;
  let i = 0;
  while (i < dreamCountries.length) {
    if (dreamCountries[i] === name) {
      alreadyAdded = true;
    }
    i = i + 1;
  }
  
  if (alreadyAdded === false) {
    dreamCountries.push(name);
    renderDreamList();
  }
};

loadAll();
