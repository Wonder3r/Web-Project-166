
/*
//Form//

let subscribers = [
    {
        "name": "Adaline",
        "lastName": "Acosta",
        "date": "02/13/1989",
        "phone": "520-566-4502",
        "school name": "Camelback"
    }
    
    {
        "name": "Pepe",
        "lastName": "Acosta",
        "date": "02/13/1989",
        "phone": "520-566-4502",
        "school name": "Camelback"
    }

    {
        "name": "Ana",
        "lastName": "Rodriguez",
        "date": "02/13/1989",
        "phone": "520-566-4502",
        "school name": "Camelback"
    }

    {
        "name": "Juan",
        "lastName": "Acosta",
        "date": "02/13/1989",
        "phone": "520-566-4502",
        "school name": "Camelback"
    }

    {
        "name": "Adaline",
        "lastName": "Rodriguez",
        "date": "02/13/1989",
        "phone": "520-566-4502",
        "school name": "Camelback"
    }

    {
        "name": "Carlos",
        "lastName": "Acosta",
        "date": "02/13/1989",
        "phone": "520-566-4502",
        "school name": "Camelback"
    }

    {
        "name": "Adaline",
        "lastName": "Rodriguez",
        "date": "02/13/1989",
        "phone": "520-566-4502",
        "school name": "Camelback"
    }

    {
        "name": "Jaime",
        "lastName": "Acosta",
        "date": "02/13/1989",
        "phone": "520-566-4502",
        "school name": "Camelback"
    }

    {
        "name": "Adaline",
        "lastName": "Acosta",
        "date": "02/13/1989",
        "phone": "520-566-4502",
        "school name": "Camelback"
    }

    {
        "name": "Eva",
        "lastName": "Acosta",
        "date": "02/13/1989",
        "phone": "520-566-4502",
        "school name": "Camelback"
    }  
];

JSON.stringify(subscribers);

console.log(subscribers);
*/


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