document.addEventListener("DOMContentLoaded", ()=> {
  let select = document.querySelector("select");
  let choice;
  let body = document.querySelector("body");

  select.addEventListener("change", event => {
    choice = event.target.value;
    // debugger
    // console.log(choice);
    accessArrays(choice);
  })

  function accessArrays(choice) {
    axios
    .get(`https://jsonplaceholder.typicode.com/${choice}`)
    .then(res=>{
      arrays = res.data

      arrayContent(arrays)
    })
  }

  const mapObject = {
    posts: ['title', 'body'],
    comments: ['name', 'body'],
    albums: ['title', 'id'],
    photos: ['title', 'url'],
    users: ['name', 'email'],
    todos: ['title', 'completed'],

  }


  function arrayContent(arrays) {
    //0. empty div
    let oldData = document.querySelector(".data");
    oldData.innerHTML = "";

    //1. get info of choice
    //2. paste choice info into div
    // console.log(select.value, arrays);



    arrays.forEach(object => {
      let h3 = document.createElement("h3");
      let p = document.createElement("p");


      h3.innerText = object[mapObject[choice][0]]
      p.innerText = object[mapObject[choice][1]]
      // if (choice === "posts") {
      //   h3.innerText = object.title;
      //   p.innerText = object.body;
      //   oldData.style.background = 'red';
      // }

      // debugger
      oldData.appendChild(h3);
      oldData.appendChild(p);
    });















  }


})


/*
switch (choice) {
  case 'posts':
    h3.innerText = object.title;
    p.innerText = object.body;
    oldData.style.background = 'red';
    break;
  case 'comments':
    h3.innerText = object.name;
    p.innerText = object.body;
    oldData.style.background = 'blue';
    break;
  case 'albums':
    h3.innerText = object.title;
    p.innerText = object.id;
    oldData.style.background = 'green';
    break;
  case 'photos':
    h3.innerText = object.title;
    p.innerText = object.url;
    oldData.style.background = 'yellow';
    break;
  case 'users':
    h3.innerText = object.name;
    p.innerText = object.email;
    oldData.style.background = 'pink';
    break;
  case 'todos':
    h3.innerText = object.title;
    p.innerText = object.completed;
    oldData.style.background = 'grey';
    break;

  default:
    break;

}
*/
