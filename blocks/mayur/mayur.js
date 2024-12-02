export default function decorate(block) {
  const children = block.querySelectorAll("div");

  children.forEach((child, iIndex) => {
    let dynamicClassName = "";
    if (iIndex >= 0 && iIndex <= 6) {
      dynamicClassName = "whychooseus";
    } else if (iIndex >= 7 && iIndex <= 13) {
      dynamicClassName = "helpyouwith";
    }
    child.classList.add(dynamicClassName);
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
  });
}
