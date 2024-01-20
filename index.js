let btn = document.querySelector(".btn");
let pTag = document.querySelector(".pTag");
let darkMode = document.querySelector(".mode");
let color = document.querySelector("body");
let circle = document.querySelector(".circle");

btn.addEventListener("click", clickHandler);

function clickHandler() {
  let generateJoke = "";

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.api-ninjas.com/v1/dadjokes?limit=1");
  xhr.setRequestHeader("x-api-key", "k8UOMDTE6d4+mpq0dZ1Yyw==mpuyhr79O29vxuOW");
  xhr.send();

  pTag.innerText = "Updating...";
  btn.innerText = "Loading...";
  btn.style.transform = "translate(3px, -3px)";

  xhr.onload = function () {
    if (xhr.status === 200) {
      const ans = JSON.parse(xhr.responseText);
      generateJoke = ans[0].joke;

      pTag.innerText = generateJoke;
      btn.innerText = "TELL ME A JOKE";
      btn.style.transform = "translate(0px, 0px)";
    }
  };

  xhr.onerror = () => {
    console.log("Error code");
  };
}

let isDark = false;

darkMode.addEventListener("click", () => {
  if (!isDark) {
    color.style.background = "black";
    circle.style.left = "50%";
    circle.style.background = "#333";
    isDark = true;
  } else {
    color.style.background =
      "linear-gradient(to left bottom, lightblue, lightpink, lightblue)";
    circle.style.background =
      "linear-gradient(to left bottom, lightblue, lightpink, lightblue)";
    circle.style.left = "5px";
    isDark = false;
  }

  // if (
  //   color.style.backgroundColor ===
  //   "linear-gradient(to left bottom, lightblue, lightpink, lightblue)"
  // ) {
  //   color.style.backgroundColor = "black";
  //   circle.style.left = "50%";
  // }
  // else {
  //   color.style.backgroundColor =
  //     "linear-gradient(to left bottom, lightblue, lightpink, lightblue)";
  //   circle.style.left = "5px";
  // }
});
