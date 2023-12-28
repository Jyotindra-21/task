fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((res) => res.json())
  .then((obj) => showPost(obj));

function showPost(data) {
  const posts = document.getElementById("movies");
  let loadder = document.getElementById("loading");

  for (const post of data) {
    var mypost = `
    <div class="col-3">
    <div class="card" style="width: 18rem;">
        <img src="#" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
           
        </div>
    </div>
  </div>
      `;
      posts.insertAdjacentHTML("beforeend", mypost);
      loadder.style.display = "none"
  }
}
