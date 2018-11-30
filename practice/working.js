document.addEventListener("DOMContentLoaded", ()=> {

  let select = document.querySelector(".data-type");

  select.addEventListener("change", event => {

    let selected = event.target.value;
    console.log("selected", selected);

    if (selected) {
      axios
      .get(`https://jsonplaceholder.typicode.com/${selected}`)
      .then(res => {
        console.log(res.data);
        let response = res.data;
        let title;
        let body;

        if (selected === "posts") {
          title = "title";
          body = "body";
        } else if (selected = "comments") {
          title = "name";
          body = "body";
          // console.log(title);
        } else if (selected = "albums") {
          title = "id";
          body = "title";
        } else if (selected = "photos") {
          title = "title";
          body = "url";
        } else if (selected = "users") {
          title = "name";
          body = "email";
        } else if (selected = "todos") {
          title = "title";
          body = "completed";
        }

        let newData = document.createElement("div");
        newData.classList.add("data");

        response.forEach(el => {
          let div2 = document.createElement("div");
          let h3 = document.createElement("h3");
          let p = document.createElement("p");

          h3.innerText = el.title;
          p.innerText = el.body;
          // debugger

          div2.appendChild(h3);
          div2.appendChild(p);

          newData.appendChild(div2);
        })

        let oldDataArea = document.querySelector(".data");
        document.body.replaceChild(newData, oldDataArea);

      })
      .catch(err => {
        console.log(err);
      })
    }
  })

})
