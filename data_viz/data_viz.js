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

const inQueueElement = document.getElementById("inQueue");

async function fetchData() {
  try {
    const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
    const data = await response.json();
    if (parseInt(inQueueElement.textContent) !== data.inQueue) {
      inQueueElement.classList.add("grow");
    }
    inQueueElement.textContent = data.inQueue;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

inQueueElement.addEventListener("transitionend", () => {
  inQueueElement.classList.remove("grow");
});

fetchData();
setInterval(fetchData, 10000);
