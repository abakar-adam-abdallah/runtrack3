
<!DOCTYPE html>
<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>
  
  <textarea id="keylogger"></textarea>
  

 



<script>
  document.addEventListener('keypress', function(event) {
    let keylogger = document.getElementById("keylogger");
    let letter = String.fromCharCode(event.charCode);
    if(/[a-z]/.test(letter)) {
      if(document.activeElement === keylogger) {
        keylogger.value = letter ;
      } else {
        keylogger.value = letter;
      }
    }
  });
</script>
   


  </body>
</html>