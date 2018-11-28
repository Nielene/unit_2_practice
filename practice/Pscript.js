document.addEventListener("DOMContentLoaded", () => {

  api = [
    {route: "post", url: "https://jsonplaceholder.typicode.com/posts"},
    {route: "comments", url: "https://jsonplaceholder.typicode.com/comments"},
    {route: "albums", url: "https://jsonplaceholder.typicode.com/albums"},
    {route: "photos", url: "https://jsonplaceholder.typicode.com/photos"},
    {route: "users", url: "https://jsonplaceholder.typicode.com/users"},
    {route: "todos", url: "https://jsonplaceholder.typicode.com/todos"},
  ]


  let posts;
  let select = document.querySelector("select");

  updateInfoPosts()

  select.addEventListener("change", updateInfo)

  function updateInfo() {
    let option = querySelector("option")
    axios
    .get(api[0].url)
  }



  function updateInfoPosts() {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
    posts = res;
    console.log(posts);
    // debugger
    })
    .catch(err => {
      console.log("error: ", err);
    })
  }












})

// api[0].route // "post"
