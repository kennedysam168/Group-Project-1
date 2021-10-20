
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);



function logSubmit(event) {
    log.textContent = `Thank you for your feedback!`;
    event.preventDefault();
    var inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
    var inputName= document.getElementById("name");
    localStorage.setItem("name", inputName.value);
    var inputText= document.getElementById("text");
    localStorage.setItem("text", inputText.value);

  }
  

//   localStorage.setItem("form", "form")
//   console.log()