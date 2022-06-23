const el = document.querySelector("#text");
const text = "oi gente, tudo bem?";
const interval = 80;

function showText(el, text, interval) {

  const char = text.split("").reverse();
  const typer = setInterval(() => {

     if(!char.lenght) {
       return clearInterval(typer);
     }

    const next = cahr.pop();

    el.innerHTML += next;
  }, interval);
  
}

showText(el, text, interval);