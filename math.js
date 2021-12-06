function hello() {
  ret = "hello";
  document.getElementById("result").textContent = ret;
}

function square() {
  a = parseInt(document.getElementById("square-a").value, 10);
  b = parseInt(document.getElementById("square-b").value, 10) / a;
  c = -parseInt(document.getElementById("square-c").value, 10) / a;

  ret = Math.sqrt(c + (b / 2) ** 2) - b / 2;
  document.getElementById("square-result").textContent = ret;
}

function sines() {
  alpha = parseInt(document.getElementById("sines-alpha").value, 10);
  b = parseInt(document.getElementById("sines-b").value, 10);
  beta = parseInt(document.getElementById("sines-beta").value, 10);

  // Convert radians to degrees
  alpha *= Math.PI / 180;
  beta *= Math.PI / 180;

  ret = (b * Math.sin(alpha)) / Math.sin(beta);
  document.getElementById("sines-result").textContent = ret;
}
