// export default function decorate(block) {
//   console.log("block start ");
//   console.log(block);
//   console.log("block end ");

//   const searchStringChooseUs = "Why choose us?";
//   const searchStringHelpYou = "We help you with";

//   // Select all divs with the specific class name (e.g., 'specific-class')
//   const specificDivs = document.querySelectorAll(
//     'div[data-block-name="mayur"]'
//   );

//   // Loop through each specific div with index
//   specificDivs.forEach((div, divIndex) => {
//     console.log(`Index of specific div: ${divIndex}`);
//     console.log(`Div innerHTML: ${div.innerHTML}`);

//     // Get all sub-divs within this specific div
//     const subDivs = div.querySelectorAll("div");

//     // Add a class (e.g., 'new-class') to each sub-div and log its index
//     subDivs.forEach((subDiv, subDivIndex) => {
//       console.log(`Index of sub-div in div ${divIndex}: ${subDivIndex}`);
//       console.log(`sub-div innerhtml ${subDiv.innerHTML}`);
//       if (subDivs.innerHTML.includes(searchStringChooseUs)) {
//         subDiv.classList.add("whychooseus");
//       } else if (subDivs.innerHTML.includes(searchStringHelpYou)) {
//         subDiv.classList.add("helpyouwith");
//       }
//     });
//   });

//   //   const divElement = document.querySelector('div[data-block-name="mayur"]');
//   //   if (divElement) {
//   //     const classList = Array.from(divElement.classList);
//   //     // console.log("All classes:", classList);
//   //     const whyChooseUs = block.querySelectorAll(".whychooseus");
//   //     const helpyouwith = block.querySelectorAll(".helpyouwith");

//   //     if (classList[1] === "whychooseus") {
//   //     }
//   //   }
//   //   //Add Class
//   //   const secondDiv = block.querySelector("div:nth-of-type(2)");
//   //   const threeDiv = block.querySelector("div:nth-of-type(3)");
//   //   const fourthDiv = block.querySelector("div:nth-of-type(4)");
//   //   const fiveDiv = block.querySelector("div:nth-of-type(5)");

//   //   console.log("threeDiv ", threeDiv);
//   //   console.log("fourthDiv ", fourthDiv);
//   //   console.log("fiveDiv ", fiveDiv);

//   //   [secondDiv].forEach((parentDiv) => {
//   //     if (parentDiv) {
//   //       const childDivs = parentDiv.querySelectorAll("div");
//   //       childDivs.forEach((div) => {
//   //         div.classList.add("whychooseus");
//   //       });
//   //     }
//   //   });

//   //   [fourthDiv].forEach((parentDiv) => {
//   //     if (parentDiv) {
//   //       const childDivs = parentDiv.querySelectorAll("div");
//   //       childDivs.forEach((div) => {
//   //         div.classList.add("helpyouwith");
//   //       });
//   //     }
//   //   });

//   //   // Get the main block (either 'mayur whychooseus' or 'mayur helpyouwith')
//   //   const mainBlock = document.querySelector(".mayur.whychooseus"); // Replace with '.mayur.helpyouwith' as needed

//   //   // Get all the child divs
//   //   const childDivs = mainBlock.querySelectorAll("div");

//   // Iterate over the child divs
//   //   let iIndex = 0;
//   //   childDivs.forEach((div) => {
//   //     // Do something with each div, e.g., log its content:
//   //     console.log("div.innerHTML start ---------------> iIndex ", iIndex);
//   //     console.log(div.innerHTML);
//   //     console.log("div.innerHTML end ---------------> ");

//   //     if (iIndex >= 1 && iIndex <= 6) {
//   //       div.classList.add("whychooseus");
//   //       if (classList[1] === "whychooseus") {
//   //         div.style.display = "block";
//   //       } else {
//   //         div.style.display = "none";
//   //       }
//   //     } else if (iIndex >= 7 && iIndex <= 13) {
//   //       div.classList.add("helpyouwith");
//   //       if (classList[1] === "helpyouwith") {
//   //         div.style.display = "block";
//   //       } else {
//   //         div.style.display = "none";
//   //       }
//   //     }

//   //     // Or, modify its style:
//   //     // div.style.backgroundColor = "lightblue";
//   //     iIndex++;
//   //   });

//   //   [fourthDiv].forEach((parentDiv) => {
//   //     if (parentDiv) {
//   //       const childDivs = parentDiv.querySelectorAll("div");
//   //       childDivs.forEach((div) => {
//   //         div.classList.add("helpyouwith");
//   //       });
//   //     }
//   //   });

//   //   const divElement = document.querySelector('div[data-block-name="mayur"]');

//   //   if (divElement) {
//   //     const classList = Array.from(divElement.classList);
//   //     // console.log("All classes:", classList);
//   //     const whyChooseUs = block.querySelectorAll(".whychooseus");
//   //     const helpyouwith = block.querySelectorAll(".helpyouwith");

//   //     if (classList[1] === "whychooseus") {
//   //       // whyChooseUs[1]?.style.display = 'block';
//   //       // helpyouwith[1]?.style.display = 'none';
//   //     } else if (classList[1] === "helpyouwith") {
//   //       // helpyouwith[1]?.style.display = 'block';
//   //       // whyChooseUs[1]?.style.display = 'none';
//   //     }
//   //   } else {
//   //     console.error('No div found with the data-block-name="mayur".');
//   //   }
// }

// export default function decorate(block) {
//   // Get the current class of the block
//   const parentClass = block.getAttribute("class");

//   // Get all child elements with `whychooseus` and `helpyouwith` classes
//   const whyChooseUsDivs = block.querySelectorAll(".whychooseus");
//   const helpYouWithDivs = block.querySelectorAll(".helpyouwith");

//   // Show/hide based on the parent class
//   if (parentClass.includes("whychooseus")) {
//     // Show all `whychooseus` divs and hide all `helpyouwith` divs
//     whyChooseUsDivs.forEach((div) => (div.style.display = "block"));
//     helpYouWithDivs.forEach((div) => (div.style.display = "none"));
//   } else if (parentClass.includes("helpyouwith")) {
//     // Show all `helpyouwith` divs and hide all `whychooseus` divs
//     helpYouWithDivs.forEach((div) => (div.style.display = "block"));
//     whyChooseUsDivs.forEach((div) => (div.style.display = "none"));
//   }
// }

export default function decorate(block) {
  const children = block.querySelectorAll("div");

  children.forEach((child, index) => {
    let dynamicClassName = "";
    if (index % 2 === 0) {
      dynamicClassName = "whychooseus";
    } else {
      dynamicClassName = "helpyouwith";
    }

    child.classList.add(dynamicClassName);
  });

  const divElement = document.querySelector('div[data-block-name="mayur"]');
  if (divElement) {
    const classList = Array.from(divElement.classList);
    if (classList[1] === "whychooseus") {
      const elements = document.getElementsByClassName("helpyouwith");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    } else if (classList[1] === "helpyouwith") {
      const elements = document.getElementsByClassName("whychooseus");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    }
  }
}
