var stories = document.querySelector("#stories");
var fs = document.querySelector("#fullscreen");
var nav = document.querySelector("#nav");
var nav2 = document.querySelector("#nav2");
var main = document.querySelector("#main");

var arr = [
  {
    dp: "./images/aadi.webp",
    story: "./images/drive2.webp",
  },
  {
    dp: "./images/car.webp",
    story: "./images/car2.webp",
  },

  {
    dp: "./images/builder2.webp",
    story: "./images/builder3.webp",
  },

  {
    dp: "./images/fashion.webp",
    story: "./images/mru.webp",
  },

  {
    dp: "./images/gandhi.webp",
    story: "./images/gandhi2.webp",
  },
  {
    dp: "./images/lens.webp",
    story: "./images/lens2.webp",
  },
  {
    dp: "./images/miles.webp",
    story: "./images/miles2.webp",
  },
  {
    dp: "./images/vibes.webp",
    story: "./images/vibes2.webp",
  },
  {
    dp: "./images/pixel.webp",
    story: "./images/pixel2.webp",
  },
  {
    dp: "./images/food.webp",
    story: "./images/food2.webp",
  },
  {
    dp: "./images/drive.webp",
    story: "./images/sclass.webp",
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
