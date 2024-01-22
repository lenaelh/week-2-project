const cookieCounter = document.getElementById("cookie-counter");

const cookiesPerSecond = document.getElementById("cookies-per-second");

const button = document.querySelector("button");
console.log(button.textContent);

button.addEventListener("click", function (event) {
console.log (event);
}); 

  let cookies = 0; 
setInterval(function () {
  cookies = cookies + 1;
  console.log("🍪", cookies);
  cookieCounter.innerText = cookies
}, 1000); 


function grandmaCookies() {
let grandmaCookies = "10";
}

const grandmaCounter = document.getElementById("grandma-counter");

const grandmaButton = document.querySelector("button-grandma"); 

grandmaButton.addEventListener("click", function (event) {
  console.log (event);
  });








