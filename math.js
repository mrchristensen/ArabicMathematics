function hello() {
  ret = "hello";
  document.getElementById("result").textContent = ret;
}

function square() {
  a = parseInt(document.getElementById("a").value, 10);
  b = parseInt(document.getElementById("b").value, 10) / a;
  c = -parseInt(document.getElementById("c").value, 10) / a;

  ret = Math.sqrt(c + (b / 2) ** 2) - b / 2;
  document.getElementById("result").textContent = ret;
}
