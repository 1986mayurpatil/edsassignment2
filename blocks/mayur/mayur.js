export default function decorate(block) {
  console.log(block);

  // Select all divs with the static identifier (e.g., class "mayur")
  const divs = block.querySelectorAll('div[class^="mayur"]');

  console.log(divs);

  // Loop through each div
  divs.forEach((div) => {
    // Extract all class names
    const classList = Array.from(div.classList);

    // Find the dynamic class (2nd class)
    const dynamicClass = classList.find(
      (cls) => cls !== "mayur" && cls !== "block"
    );

    // Log or perform actions based on the dynamic class
    console.log("Dynamic class:", dynamicClass);

    // // Find 2nd and 4th divs with class "whychooseus_class"
    // const whyChooseUsDivs = block.querySelectorAll('.whychooseus_class');

    // if (dynamicClass === 'var1') {
    //   // Show 2nd and 4th divs if the dynamic class is "var1"
    //   whyChooseUsDivs[1]?.style.display = 'block'; // 2nd div
    //   whyChooseUsDivs[3]?.style.display = 'block'; // 4th div
    // } else {
    //   // Hide 2nd and 4th divs otherwise
    //   whyChooseUsDivs[1]?.style.display = 'none'; // 2nd div
    //   whyChooseUsDivs[3]?.style.display = 'none'; // 4th div
    // }
  });

  const secondDiv = block.querySelector("div:nth-of-type(2)");
  const fourthDiv = block.querySelector("div:nth-of-type(4)");

  [secondDiv, fourthDiv].forEach((parentDiv) => {
    if (parentDiv) {
      const childDivs = parentDiv.querySelectorAll("div");
      childDivs.forEach((div) => {
        div.classList.add("whychooseus_class");
        console.log("Added whychooseus_class to:", div);
      });
    }
  });
}
