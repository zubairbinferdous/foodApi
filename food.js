const load = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadMeal(data.meals))
    .catch(error => console.log(error))
};

const loadMeal = (meal) => {
 console.log(meal)
  const element = document.getElementById("all_food");
  element.innerHTML = "";
  meal.map((food) => {
    const newElement = document.createElement("div");
    newElement.classList.add("card", "col-md-3");
    newElement.innerHTML = ` 
    <img src="${food.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-text">${food.strMeal}</h5>
    </div>

    <button onclick="ShowDetails(${food.idMeal})" type="button" class="btn btn-primary  btn-sm mb-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">meal details </button>
    `;
    element.appendChild(newElement);
  });
};

const searchMeals = () => {
  const element = document.getElementById("search_ber");
  const data = element.value;
  load(data);
};

const ShowDetails = (id) => {
    const element = document.getElementById('model_details');
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then( res => res.json())
    .then( data => {
        element.innerHTML = `
        <h4>${data.meals[0].strMeal}</h4>
        <p>${data.meals[0].strInstructions}</p>
        `
    });
};

//  async await

const data = async(id) => {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}'
    try{
        const fetch = await fetch(url);
        const res = await res.json();
        console.log(res);
    }catch(error){
        console.log(error);
    }
}

load("cake");
