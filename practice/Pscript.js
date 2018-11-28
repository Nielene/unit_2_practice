document.addEventListener("DOMContentLoaded", () => {
  //--------------------------------------
  api = [
    { route: "post", url: "https://jsonplaceholder.typicode.com/posts" },
    { route: "comments", url: "https://jsonplaceholder.typicode.com/comments" },
    { route: "albums", url: "https://jsonplaceholder.typicode.com/albums" },
    { route: "photos", url: "https://jsonplaceholder.typicode.com/photos" },
    { route: "users", url: "https://jsonplaceholder.typicode.com/users" },
    { route: "todos", url: "https://jsonplaceholder.typicode.com/todos" }
  ];

  //-----------------------------------
  let posts;
  // let postsTitle;
  // let postsBody;

  // updateInfoPosts()
  selectTagFilling();

  let select = document.querySelector("select");
  select.addEventListener("change", updateInfo);

  //-----------------------------------
  function updateInfo() {

    let url;
    for (let i = 0; i < api.length; i++) {
      url = api[i].url
      console.log("url",url);
    }

    axios
    .get(api[0].url)
    .then(res => {
      posts = res.data[0];
      // debugger
      // postsTitle = res.data[0].title;
      // postsBody = res.data[0].body;

      let data = document.querySelector(".data");
      let div = document.createElement("div");
      div.classList.add("data");

      // let p = document.createElement("p");

      posts.forEach(title => {
        let h3 = document.createElement("h3");
        h3.innerText = res.data[0].title;
        div.appendChild(h3);
      });

      document.body.replaceChild(div, data);
      // div.appendChild(p);

      console.log("posts", posts, postsTitle, postsBody);
      debugger;
    });
  }

  // function updateInfoPosts() {
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then(res => {
  //   posts = res;
  //   console.log(posts);
  //   // debugger
  //   })
  //   .catch(err => {
  //     console.log("error: ", err);
  //   })
  // }

  function selectTagFilling() {
    let route;
    for (let i = 0; i < api.length; i++) {
      route = api[i].route;
      console.log(route);
    }
    return route;
  }
});

// api[0].route // "post"
