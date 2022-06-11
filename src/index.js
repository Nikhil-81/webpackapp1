import navbar from "../components/navbar.js";
import axios from "axios";
let cont = document.querySelector("#nav");
let box = document.querySelector("#box");
console.log(navbar());
cont.innerHTML = navbar();
async function fetdata() {
  var d = await axios.get(
    "https://api.unsplash.com/search/photos?query=londen&client_id=dUI3hR9SrJc_W1_OdM4bPd3foGt5O51uSLop6FSEy9c"
  );
  return d.data.results;
  //   console.log(d.data.url.small_s3)
}
let raw = fetdata();
async function display(data) {
  let c = await data;
  c.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "cards");
    let img = document.createElement("img");
    img.setAttribute("src", el.urls.thumb);
    img.setAttribute("class", "images");
    card.append(img);
    box.append(card);
    // el.urls.thumb
  });
}
display(raw);
