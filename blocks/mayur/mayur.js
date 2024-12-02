export default function decorate(block) {
  console.log(block);
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
