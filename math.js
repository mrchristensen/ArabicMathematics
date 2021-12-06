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

  // Convert radians to degrees - https://www.w3resource.com/javascript-exercises/javascript-math-exercise-34.php
  alpha *= Math.PI / 180;
  beta *= Math.PI / 180;

  ret = (b * Math.sin(alpha)) / Math.sin(beta);
  document.getElementById("sines-result").textContent = ret;
}

function parabola() {
  a = parseInt(document.getElementById("parabola-a").value, 10);
  b = parseInt(document.getElementById("parabola-b").value, 10);

  ret = (4 / 3) * ((a * b) / 2);
  document.getElementById("parabola-result").textContent = ret;
}

function gravity() {
  h = parseInt(document.getElementById("gravity-h").value, 10);

  ret = h / 3;
  document.getElementById("gravity-result").textContent = ret;
}
