function loadAll() {
  fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3",
  )
    .then((response) => response.json())
    .then((data) => {
      const sortedData = data.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      });
      showCountries(sortedData);
    })
    .catch((err) => {
      document.getElementById("list").innerHTML =
        "Oops! Check your connection.";
    });
}

function showCountries(countries) {
  const list = document.getElementById("list");
  list.innerHTML = "";

  countries.forEach((country) => {
    const card = document.createElement("div");
    card.className = "country-card";
    card.innerHTML = `
            <img src="${country.flags.png}">
            <h3>${country.name.common}</h3>
        `;

    card.onclick = () => getOneInfo(country.name.common);

    list.appendChild(card);
  });
}

async function getOneInfo(name) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`,
    );
    const data = await response.json();
    const country = data[0];

    document.getElementById("country-name").innerText = country.name.common;
    document.getElementById("country-info").innerText =
      `Region: ${country.region}, Population: ${country.population}, Capital: ${country.capital[0]}`;

    document.getElementById("detail-box").style.display = "block";
    
  } catch (error) {
    alert("Could not load details");
  } finally {
    console.log("Finished detail load");
  }
}

document.getElementById("close-btn").onclick = () => {
  document.getElementById("detail-box").style.display = "none";
};

function greet() {
  console.log("Ready to explore!");
}
setTimeout(greet, 2000);


loadAll();
