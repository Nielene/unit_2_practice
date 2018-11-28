document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  let select = document.querySelector(".data-type")

  select.addEventListener("change", event => {
    let selected = event.target.value
    // debugger
    if (selected) {
      axios
      .get(`https://jsonplaceholder.typicode.com/${selected}`)

      .then(res => {
        let things = res.data
        // debugger
        console.log(things);

        
        // things.forEach(el => {
        //   console.log(el.name);
        // })

        // if (res.status === 200) {
        //   return res.data.value
        //   debugger
        // } else {
        //   throw new Error ("Not 200");
        // }
      })
      // .then(data => {
      //   let title;
      //   let body;
      //   debugger
      // })
    }
  })




})

// select.addEventListener("change", event => {
//   let selected = event.target.value;

// event = object with keys: type("change"), target, currTarget, ...
//event.target = the select tag encompassing list of options
//event.target.value = "comments" this time.
