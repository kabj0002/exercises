// Pointer Move
// Lav en html side der detekterer musens X-position og opdaterer en CSS custom
// property der styrer lightness i en HSL color.
// Ekstra: Opdater fx Saturation, HSL, med musens Y-position

// Hints:
// "mousemove"
// window.innerWidth
// style.setProperty
// clientX
// procentregning: delen/detHele * 100

document.addEventListener("mousemove", (event) => {
  let xProcent = (event.clientX / window.innerWidth) * 100;
  let yProcent = (event.clientY / window.innerHeight) * 100;

  document.body.style.setProperty("--lightness", `${xProcent}%`);
  document.body.style.setProperty("--saturation", `${yProcent}%`);
});
