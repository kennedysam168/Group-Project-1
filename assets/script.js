console.log("I work!");


var sBtn = document.getElementById("searchBtn");
var searchResults = document.getElementById("search-result");

// function sBtn() {
//     // console.log("clicked")
//     document.querySelectorAll("search-result").style.transition = "all 2s ease-in-out";
//     document.querySelectorAll("search-result").style.opacity = 1;

//     sBtn.addEventListener('click', sBtn());
//     console.log("search button works")
// }

// sBtn.addEventListener('click', sBtn());


sBtn.addEventListener("click", search);

function search(){
    console.log("search works")
}
    
