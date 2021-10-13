console.log("I work!");


const sBtn = document.getElementById("searchBtn");


function search() {
    // console.log("clicked")
    document.getElementById("search-result").style.transition = "all 2s ease-in-out";
    document.getElementById("search-result").style.opacity = 1;

}

sBtn.addEventListener('click', search);