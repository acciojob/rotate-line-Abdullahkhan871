let line = document.querySelector("#line");
let count = 0;

let rotater = setInterval(() => {
  line.style.transform = `rotate(${count}deg)`;
  count += 2;
  if (count > 180) clearInterval(rotater);
}, 20);
