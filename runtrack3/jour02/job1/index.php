
<!DOCTYPE html>
<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>

  <!-- exo 1 -->
     <article id="citation">La vie a beaucoup plus d’imagination que nous</article>
<button id="button" onclick="citation()">Afficher la citation</button>






<script>
function citation() {
 var element = document.getElementById("citation");
 console.log(element.innerHTML);
}
</script>   


  </body>
</html>