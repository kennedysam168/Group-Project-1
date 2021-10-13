console.log("I work!");


const sBtn = document.getElementById("searchBtn");


function search() {
    // console.log("clicked")
    document.querySelectorAll("search-result").style.transition = "all 2s ease-in-out";
    document.querySelectorAll("search-result").style.opacity = 1;

}

sBtn.addEventListener('click', search());