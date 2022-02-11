function resetSelect(array) {
  array.forEach((element) => {
    element.style.removeProperty("background-color");
    element.style.removeProperty("color");
    document.getElementById("tipAmount").innerText = `$0`;
    document.getElementById("total").innerText = `$0`;
  });
}

function calculation(bill, tip, people) {
  let total = bill * tip;
  let tipAmount = total / people;
  if (bill == 0 || tip == 0 || people == 0) {
    total = 0;
    tipAmount = 0;
  }
  document.getElementById("tipAmount").innerText = `$${tipAmount}`;
  document.getElementById("total").innerText = `$${total}`;
}

export {resetSelect, calculation};