const callQuote = () => {
  const newElement = document.getElementById("quotes");
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => {
      const p = document.createElement("p");
      p.innerText = data.quote;
      newElement.appendChild(p);
    });
};

const loadUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => useData(data));
};

const useData = (data) => {
  const name = document.getElementById("user");
  const gender = document.getElementById("gender");
  name.innerText =
    data.results[0].name.title +
    " " +
    data.results[0].name.first +
    " " +
    data.results[0].name.last;
  gender.innerText = data.results[0].gender;
};

loadUser();

const allCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      //    for (const country of data) {
      //     console.log(country);
      //    }

      //   data.forEach((element) => {
      //     console.log(element);
      //   });

      const newElement = document.getElementById("all_country");
      data.map((Element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h1>${Element.name.common}<h1/>
            <img src="${Element.flags.svg}" class="img-fluid rounded-top" alt="">
            <p>${Element.capital ? Element.capital : 'No capital'}</p>
            <button onclick = 'displayDetails("${Element.cca2}")'> Details</button>
            `;
            newElement.appendChild(div);
      });
    });
};

const displayDetails = code => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url).then(res=> res.json()).then(data => show(data[0]));
}

const show = country => {
  const newElement = document.getElementById("displayCountry");
  newElement.innerHTML = `
  <h1> population : ${country.population}</h1>
  <h2> startOfWeek :${country.startOfWeek}</h2>
  <p>${country.status}</p>
  `
 
}

allCountry();
