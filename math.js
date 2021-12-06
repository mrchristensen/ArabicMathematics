// https://youtu.be/mnNdaHe5dFA?t=142
// https://www.freecodecamp.org/news/how-to-complete-the-square-a-method-for-completing-the-square/
// https://en.wikipedia.org/wiki/Completing_the_square
function square() {
  a = parseInt(document.getElementById("square-a").value, 10);
  b = parseInt(document.getElementById("square-b").value, 10) / a;
  c = -parseInt(document.getElementById("square-c").value, 10) / a;

  ret = Math.sqrt(c + (b / 2) ** 2) - b / 2;
  document.getElementById("square-result").textContent = ret;
}

// https://www.google.com/search?q=sine+rule&rlz=1C1CHBF_enUS856US856&oq=sine+rule&aqs=chrome..69i57j0i67j0i512l8.1977j0j7&sourceid=chrome&ie=UTF-8&pccc=1
// https://en.wikipedia.org/wiki/Law_of_sines
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

// https://keisan.casio.com/exec/system/1223291032
// https://christober.wordpress.com/2008/07/17/integration-archimedes-method/
// https://towardsdatascience.com/archimedes-and-the-integral-calculus-4cf875c6fee4
function parabola() {
  a = parseInt(document.getElementById("parabola-a").value, 10);
  b = parseInt(document.getElementById("parabola-b").value, 10);

  ret = (4 / 3) * ((a * b) / 2);
  document.getElementById("parabola-result").textContent = ret;
}

// https://www.grc.nasa.gov/www/k-12/airplane/cg.html
function gravity() {
  h = parseInt(document.getElementById("gravity-h").value, 10);

  ret = h / 3;
  document.getElementById("gravity-result").textContent = ret;
}
