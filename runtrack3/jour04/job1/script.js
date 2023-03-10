document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const button = document.getElementById("button");
  
    button.addEventListener("click", () => {
    
      fetch("./expression.txt")
      
        .then((res) => {
          if(res.ok){
            res.text().then(phrase => document.body.append(phrase))
          };
      });
    });
  });