fetch(`https://jsonplaceholder.typicode.com/photos`)
  .then((response) => response.json())
  .then((data) => showdata(data));

function showdata(data_obj) {
  const movies = document.getElementById("movies");
  let loadder = document.getElementById("loading");

  for (const mydata of data_obj) {
    var html = `
  <div class="col-3">
  <div class="card" style="width: 18rem;">
      <img src="${mydata.url}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${mydata.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of
              the card's content.</p>
      </div>
  </div>
</div>
    `;
    movies.insertAdjacentHTML("beforeend", html);
    loadder.style.display = "none";
  }
}
