import { Button, Input } from "./obj.js";
import { resetSelect, calculation } from "./function.js";

document.addEventListener("DOMContentLoaded", () => {
  let tip = 0;
  const buttons = Array.from(document.getElementsByTagName("button"));
  const listButton = [];
  const inputs = Array.from(document.getElementsByTagName("input"));
  const listInput = [];
  for (let k = 0; k < inputs.length - 1; k++) {
    listInput.push(new Input(inputs[k]));
    listInput[k].change();
  }
  listInput[0].check();
  listInput[2].check();

  for (let i = 0; i < buttons.length; i++) {
    listButton[i] = new Button(buttons[i]);
    listButton[i].clickToggle();
  }

  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      tip = parseFloat(element.value);
      listInput[1].unSelect();
      calculation(listInput[0].value, tip, listInput[2].value);
      buttons.forEach((x) => {
        if (x != element) {
          x.style.removeProperty("background-color");
          x.style.removeProperty("color");
        }
      });
    });
  });

  inputs[1].addEventListener("click", () => {
    resetSelect(buttons);
  });

  inputs[1].addEventListener("change", () => {
    tip = parseFloat(inputs[1].value) / 100.0;
  });

  inputs[3].addEventListener("click", () => {
    resetSelect(buttons);
  });

  document.addEventListener("change", () => {
    calculation(listInput[0].value, tip, listInput[2].value);
  });
});
