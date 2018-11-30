document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  let select = document.querySelector(".data-type");
  let selected;

  select.addEventListener("change", event => {
    selected = event.target.value
    // debugger
    console.log(selected);
    if (selected) {
      axios
      .get(`https://jsonplaceholder.typicode.com/${selected}`)

      .then(res => {
        let things = res.data

        console.log("things",things);
        // return things;
      })
      .then(data => {
        // let thethings = data;
        // console.log("data",data);
        makeWork(data)
      })
      .catch(err => {
        console.log("error here: ", err);
      })
    }
  })

  function makeWork(data) {
    let title;
    let body;
    // console.log("data",data);
    if (selected === "posts") {
      title = "title";
      body = "body";
    } else if (selected === "comments") {
      title = "name";
      body = "body";
    } else if (selected === "albums") {
      title = "id";
      body = "title";
    } else if (selected === "photos") {
      title = "id";
      body = "title";
    } else if (selected === "users") {
      title = "name";
      body = "email";
    } else if (selected === "todos") {
      title = "title";
      body = "completed";
    }

    let newDataArea = document.createElement("div");
    newDataArea.classList.add("data");

    data.forEach(el => {
      console.log("el",el);
      container = document.createElement("div");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      h3.innerText = el.title;
      p.innerText = el.body;

      newDataArea.appendChild(container);

      container.appendChild(h3);
      container.appendChild(p);
    });

    let oldDataArea = document.querySelector(".data");
    document.body.replaceChild(newDataArea, oldDataArea);
  }




})

// select.addEventListener("change", event => {
//   let selected = event.target.value;

// event = object with keys: type("change"), target, currTarget, ...
//event.target = the select tag encompassing list of options
//event.target.value = "comments" this time.


// things.forEach(el => {
//   console.log(el.name);
// })
