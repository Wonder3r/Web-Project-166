// Read More (hidden) - Main Page //

const article = document.querySelector("#paragraph");
const button = document.querySelector("#paragraphButton");

button.addEventListener("click", readMore);

function readMore() {
    if (article.className == "open") {
      // Read less
    article.className = "";
    button.innerHTML = "Show more";
  } else {
    article.className = "open";
    button.innerHTML = "Show less";
  }
}

function scrollToTop() {
    window.scrollTo(0, 0);
}


// Form //

/*
var Form = document.getElementById("contactForm");
Form.addEventListener("resubmit", e => {
  e.preventDefault();
  fetch(Form.action,{
    method: "POST",
    body: new FormData(document.getElementById("contactForm")),
  }).then(
    Response => Response.json()
  ).then(html) => {
    window.alert("d.html", "_blank");
  }
}) */


/*
const form = document.getElementById('contactForm');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  alert("Jello")
})

*/