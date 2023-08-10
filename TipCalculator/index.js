let plusPeop = document.getElementById("increment");
let minusPeop = document.getElementById("decrement");
let btn = document.getElementById("btn");
let peopleIn = document.getElementById("peopleIn");
let incre = 1;
plusPeop.addEventListener("click", function () {
  incre++;
  peopleIn.innerHTML = incre;
});
minusPeop.addEventListener("click", function () {
  if (incre > 1) {
    incre--;
  }
  peopleIn.innerHTML = incre;
});
btn.addEventListener("click", () => {
  document.querySelector(".summary").style.display = "block";
  const totalBill = Number(document.querySelector("#totalBill").value);
  const tip = Number(document.querySelector("#tip").value);
  let total = Math.floor(totalBill * (tip / 100));
  let finalPeople = Number(peopleIn.innerHTML);
  console.log(typeof finalPeople);

  document.getElementById("showBill").innerHTML = totalBill;
  document.getElementById("tipAmountshow").innerHTML = total;
  const taxAm = document.getElementById("taxShow");
  let taxAmIn = (totalBill + 5) / 100;
  taxAm.innerHTML = taxAmIn;
  document.querySelector("#totalPerPerson").innerHTML = (
    (totalBill + total + taxAmIn) /
    finalPeople
  ).toFixed(2);
});
