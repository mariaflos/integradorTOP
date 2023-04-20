document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("suscripcion-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var email = document.getElementById("email").value;
  
    if (localStorage.getItem("suscriptores") === null) {
      localStorage.setItem("suscriptores", JSON.stringify([email]));
    } else {
      var suscriptores = JSON.parse(localStorage.getItem("suscriptores"));
      suscriptores.push(email);
      localStorage.setItem("suscriptores", JSON.stringify(suscriptores));
    }
  
    var suscriptores = JSON.parse(localStorage.getItem("suscriptores"));
    console.log("Lista de suscriptores:");
    suscriptores.forEach(function(suscriptor) {
      console.log(suscriptor);
    });
  
    form.reset();
  });
});

