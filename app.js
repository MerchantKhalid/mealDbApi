// const buttonSearch = () => {
//     const inputId = document.getElementById('search-meal');
//     const inputValue = inputId.value;
//     inputId.value = '';

//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displaymeal(data.meals))

// }
// const displaymeal = meals => {
//     const searchResult = document.getElementById('search-result');
//     searchResult.textContent = '';
//     for (const meal of meals) {
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//               <div class="card h-100">
//                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//                  <div class="card-body">
//                      <h5 class="card-title">${meal.strMeal}</h5>
//                      <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
//                  </div>
//              </div>
//              `;
//         searchResult.appendChild(div);
//   
//}    
const buttonSearch = () => {
    const inputId = document.getElementById('search-food');
    const inputValue = inputId.value;
    inputId.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data=>displayMeals(data.meals))
}
const displayMeals = meals => {
    const showedDiv = document.getElementById('search-result');
    showedDiv.textContent = '';

    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                  <div class="card h-100">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                       <div class="card-body">
                              <h5 class="card-title">${meal.strMeal}</h5>
                              <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                         </div>
                  </div>
                        `;
        showedDiv.appendChild(div);


      });

    


}


















    
