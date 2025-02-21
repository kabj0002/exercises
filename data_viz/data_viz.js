// Data Viz
// fetch følgende i et interval (10 sek) https://kea-alt-del.dk/kata-distortion/
// Din opgave er at visualisere attributen inQueue

// Den simple:
// Vis tallet

// Den federe
// lad tallet vokse hver gang det skifter og falde tilbage til sin oprindelige størrelse
// hints: brug animationend eller transitionend til at fjerne class / data-attribut

// Den fedeste / mest kreative
// Go crazy, visualiser over tid, CSS craziness, knock yourselves out
fetchData();
setInterval(fetchData, 10000);

const inQueueElement = document.getElementById("inQueueNumber");

function fetchData() {
  fetch("https://kea-alt-del.dk/kata-distortion/")
    .then((response) => response.json())
    .then((queueNumber) => {
      console.log("queueNumber", queueNumber);
      inQueueElement.innerHTML = `${queueNumber.inQueue}`;
      inQueueElement.classList.add("grow");
    });
}

inQueueElement.addEventListener("transitionend", () => {
  inQueueElement.classList.remove("grow");
});
