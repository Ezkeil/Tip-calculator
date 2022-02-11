function Button(button) {
  this.click = function () {
    this.value = parseFloat(button.value);
    button.style.backgroundColor = "hsl(172, 67%, 45%)";
    button.style.color = "rgb(0, 73, 77)";
  };
  this.unClick = function () {
    this.value = 0;
    button.style.removeProperty("background-color");
    button.style.removeProperty("color");
  };
  this.clickToggle = function () {
    button.addEventListener("click", () => {
      if (button.style.color == "rgb(0, 73, 77)") {
        this.unClick();
      } else {
        this.click();
      }
    });
  };
}

function Input(input) {
  this.select = function () {
    input.style.outline = "solid 3px hsl(172, 67%, 45%)";
    input.style.outlineOffset = "-3px";
  };
  this.unSelect = function () {
    input.style.removeProperty("outline");
    input.style.removeProperty("outline-offset");
  };
  this.check = function () {
    input.addEventListener("change", () => {
      if (input.value == 0) {
        input.previousElementSibling.lastElementChild.style.visibility =
          "visible";
        input.style.outline = "solid 3px orangered";
        input.style.outlineOffset = "-3px";
      } else {
        input.previousElementSibling.lastElementChild.style.removeProperty(
          "visibility"
        );
        this.unSelect();
      }
    });
  };
  this.change = function () {
    input.addEventListener("click", () => {
      this.select();
    });
    input.addEventListener("change", () => {
      this.value = parseFloat(input.value);
      this.unSelect();
    });
  };
}

export { Button, Input };
