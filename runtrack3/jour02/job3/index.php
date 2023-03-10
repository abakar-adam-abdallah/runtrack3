<!DOCTYPE html>
<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>
  <button id="button">Ajouter 1</button>




<p id="compteur">0</p>

<script>
 
 var button = document.getElementById("button");
 button.addEventListener("click", addone);
 
 
 function addone() {
   var compteur = document.getElementById("compteur");
   var count = parseInt(compteur.innerHTML);
   count++;
   compteur.innerHTML = count;
 }




</script>  


  </body>
</html>





