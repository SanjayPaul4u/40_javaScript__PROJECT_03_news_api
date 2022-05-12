console.log("Project 03: news Website");
//initialize the news parameter.
let country = 'in&apiKey';
let key = '7cde820435e346be90f17aca6084ec85';


//grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// create an ajax xhr obj
const xhr = new XMLHttpRequest();

xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${country}=${key}`, true)// https://newsapi.org/v2/top-headlines?country=in&apiKey=7cde820435e346be90f17aca6084ec85

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);

        let news = "";
        articles.forEach(function(element, index){
            console.log(element["title"]);
            news += `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                <strong><b>BREAKING NEWS ${index+1}: </b>${element["title"]}</strong>
                                </button>
                            </h2>
                                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                ${element["content"]} <a href = "${element["url"]}" target = "_blank"> Read more</a>
                                </div>
                                </div>
                        </div>`;
        }) 
        newsAccordion.innerHTML = news;//newsAccordion------> is avobe initialize.

    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();
