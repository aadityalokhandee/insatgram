var stories = document.querySelector("#stories");
var fs = document.querySelector("#fullscreen");
var nav = document.querySelector("#nav");
var nav2 = document.querySelector("#nav2");
var main = document.querySelector("#main");

var arr = [
  {
    dp: "./images/aadi.jpeg",
    story: "./images/aadi.jpeg",
  },
  {
    dp: "./images/car.jpg",
    story: "./images/car2.jpg",
  },

  {
    dp: "./images/builder2.avif",
    story: "./images/builder3.jpg",
  },

  {
    dp: "./images/fashion.avif",
    story: "./images/fashion2.jpg",
  },

  {
    dp: "./images/gandhi.avif",
    story: "./images/gandhi2.avif",
  },
  {
    dp: "./images/lens.avif",
    story: "./images/lens2.jpg",
  },
  {
    dp: "./images/miles.avif",
    story: "./images/miles2.jpg",
  },
  {
    dp: "./images/vibes.avif",
    story: "./images/vibes2.jpg",
  },
  {
    dp: "./images/pixel.avif",
    story: "./images/pixel2.jpg",
  },
  {
    dp: "./images/food.avif",
    story: "./images/food2.jpg",
  },
  {
    dp: "./images/drive.avif",
    story: "./images/drive2.jpg",
  },
];

var clutter = "";

arr.forEach(function (elem, idx) {
  clutter += `        <div class="story">
            <img id="${idx}" src="${elem.dp}">
        </div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", function (dets) {
  var value = `${arr[dets.target.id].story}`;
  fs.style.display = "block";
  fs.style.backgroundImage = `url(${value})`;
  nav.style.display = "none";
  nav2.style.display = "none";
//   main.style.padding = "0";

  setTimeout(function () {
    fs.style.display = "none";
    nav.style.display = "flex";
    nav2.style.display = "block";
  }, 3000);
});
