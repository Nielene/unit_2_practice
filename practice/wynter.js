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

  function arrayContent(arrays) {
    // let title;
    // let body;
    let oldData = document.querySelector(".data");

    arrays.forEach(el => {
      let title = document.createElement("h3");
      let paragraph = document.createElement("p");
      // debugger
      // console.log(el);
      let newDiv = document.createElement("div");
      newDiv.classList.add("data");

      if (choice === "posts") {
        title.innerText = el.title;
        paragraph.innerText = el.body;
        newDiv.style.background = 'red';
      } else if (choice === "comments") {
        title.innerText = el.name;
        paragraph.innerText = el.body;
        newDiv.style.background = 'blue';
      } else if (choice === "albums") {
        title.innerText = el.title;
        paragraph.innerText = el.id;
        newDiv.style.background = 'green';
      } else if (choice === "photos") {
        title.innerText = el.title;
        paragraph.innerText = el.url;
        newDiv.style.background = 'yellow';
      } else if (choice === "users") {
        title.innerText = el.name;
        paragraph.innerText = el.email;
        newDiv.style.background = 'pink';
      } else if (choice === "todos") {
        title.innerText = el.title;
        paragraph.innerText = el.completed;
        newDiv.style.background = 'gray';
      }

      newDiv.appendChild(title);
      newDiv.appendChild(paragraph);
      document.body.replaceChild(newDiv, oldData);
    })








  }


})
