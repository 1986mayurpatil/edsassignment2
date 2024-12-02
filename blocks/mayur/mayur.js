export default function decorate(block) {
  console.log(block);

  //Add Class
  const secondDiv = block.querySelector("div:nth-of-type(2)");
  const fourthDiv = block.querySelector("div:nth-of-type(4)");

  [secondDiv].forEach((parentDiv) => {
    if (parentDiv) {
      const childDivs = parentDiv.querySelectorAll("div");
      childDivs.forEach((div) => {
        div.classList.add("whychooseus");
      });
    }
  });
  
  [fourthDiv].forEach((parentDiv) => {
    if (parentDiv) {
      const childDivs = parentDiv.querySelectorAll("div");
      childDivs.forEach((div) => {
        div.classList.add("helpyouwith");
      });
    }
  });

  const divElement = document.querySelector('div[data-block-name="mayur"]');

  if (divElement) {
    const classList = Array.from(divElement.classList);
    console.log("All classes:", classList);
    const whyChooseUs = block.querySelectorAll('.whychooseus');
    const helpyouwith = block.querySelectorAll('.helpyouwith');

    if(classList[1] === 'whychooseus') {
        whyChooseUs[1]?.style.display = 'block';
        helpyouwith[1]?.style.display = 'none';
    } else if(classList[1] === 'helpyouwith') {
        helpyouwith[1]?.style.display = 'block';
        whyChooseUs[1]?.style.display = 'none';
    }
  } else {
    console.error('No div found with the data-block-name="mayur".');
  }

  

  
}
