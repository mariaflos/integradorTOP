
function showNextScreen() {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
  }

  function showPrevScreen() {
    document.getElementById("screen1").style.display = "block";
    document.getElementById("screen2").style.display = "none";
  }
  
  function saveForm() {
    var formInfo = {
      pregunta1: document.getElementById("nombre").value,
      pregunta2: document.getElementById("correo").value,
      pregunta3: document.getElementById("edad").value,
      pregunta4: document.getElementById("pais").value,
      pregunta5: document.getElementById("fan").value,
      pregunta6: document.getElementById("cancion").value,
      pregunta7: document.getElementById("concierto").value,
      pregunta8: document.getElementById("comentarios").value,
    };
    console.log ("La informacion se guardo correctamente");
    alert("La información se ha guardado correctamente");

 }
