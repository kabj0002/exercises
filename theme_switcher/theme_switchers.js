//Lav 3 selectors i denne opgave
// Afleveringsopgave
// Theme switcher
// Vi skal lave et lille website med en theme-switcher.
// Themet skal skiftes med en dropdown (select).
// Der skal være 3 themes: Dark, Light og Hawaii.

// 1. Lav et lille website: header/main/footer.
// 2. Lav en dropdown i headeren med de 3 themes.
// 3. Lav en data-attribut på body elementet der indeholder hvilket theme der er
// aktivt, kunne fx hedde data-theme og sæt den lig med theme’ts navn fx: hawaii
// 4. Lav en attribute selector i CSS der rammer det tema der er valgt i data
// data-theme i body elementet.
// 5. Lav en customproperty i din attribute selector der skal holde temaets
// baggrundsfarve for header elementet. Kald den noget meningsfyldt fx --header-bg-col
// og sæt den til en spraglet farve, det er jo trods alt hawaii temaet.
// 6. Indsæt nu --header-bg-col i en CSS regel der rammer din header. Headeren skulle
// gerne antage den farve du har givet den i din theme attribut selector i CSS.
// 7. Kopier din theme attribut selector, og indsæt et andet theme navn fx dark og
// sæt din --header-bg-col til en mørk farve.
// 8. prøv at sætte data-theme i body tag’et i HTML’en til navnet på dit nye theme,
// så skulle baggrundsfarven i din header gerne skifte.
// 9. Sæt en evenListener på dit select element sådan at den skifter data-theme på dit
// body element.
// 10. Udbyg med et theme mere og inddrag flere styles fx skriftfarve, border-color mm.

// Dropdown selection
document.querySelector("select").addEventListener("change", selectChange);

function selectChange(event) {
  console.log("change", event.target.value);

  // man kan også gøre sådan her i stedet for⬇
  //console.log(document.querySelector("select").value);
}
