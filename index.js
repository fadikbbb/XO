let boxes = document.querySelectorAll(".box1");
let player2 = document.querySelector(".player2");
let player1 = document.querySelector(".player1");
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let name1 = document.querySelector(".inputPlayer1");
let name2 = document.querySelector(".inputPlayer2");
let submit = document.getElementsByClassName("submit")[0];
let restart = document.querySelector(".restart");
let con_boxes=document.querySelector(".containerOfboxes")
console.log(con_boxes)
let change = true;
console.log(submit);
console.log(restart);
console.log(name1);
console.log(name2);
console.log(num1);
console.log(num2);
console.log(parseInt(num1.innerHTML) + 1);
restart.onclick = function () {
 for (let i = 0; i < boxes.length; i++) {
 boxes[i].innerHTML=""
  
 }
};
submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (name1.value!=""||name2.value!="") {
    
    player1.innerHTML = `${name1.value} :`;
    player2.innerHTML = `${name2.value} :`;
    localStorage.setItem("name1", name1.value);
    localStorage.setItem("name2", name2.value);
  }
});
con_boxes.addEventListener("click", function (e) {
  if (e.target.innerHTML === "") {
    if (change == true) {
      e.target.innerHTML = "x";
      e.target.style.cssText = `color:#a1d4ff`;

      change = false;
    } else {
      e.target.innerHTML = "o";
      e.target.style.cssText = `color:#91ffca`;
      change = true;
    }
  }
  x(0, 1, 2);
  x(3, 4, 5);
  x(6, 7, 8);
  x(2, 5, 8);
  x(1, 4, 7);
  x(0, 3, 6);
  x(0, 4, 8);
  x(2, 4, 6);
  o(0, 1, 2);
  o(3, 4, 5);
  o(6, 7, 8);
  o(2, 5, 8);
  o(1, 4, 7);
  o(0, 3, 6);
  o(0, 4, 8);
  o(2, 4, 6);
  function x(one, two, three) {
    if (
      boxes[one].innerHTML == "x" &&
      boxes[two].innerHTML == "x" &&
      boxes[three].innerHTML == "x"
    ) {
      sessionStorage.setItem("winer1", parseInt(num1.innerHTML) + 1);
      location.reload();
    }
  }
  function o(one, two, three) {
    if (
      (boxes[one].innerHTML == "o" &&
        boxes[two].innerHTML == "o" &&
        boxes[three].innerHTML) == "o"
    ) {
      sessionStorage.setItem("winer2", parseInt(num2.innerHTML) + 1);
      location.reload();
    }
  }
});

if (sessionStorage.getItem("winer1")) {
  num1.innerHTML = sessionStorage.getItem("winer1");
}
if (sessionStorage.getItem("winer2")) {
  num2.innerHTML = sessionStorage.getItem("winer2");
}

console.log(localStorage.getItem("name1"));
if (localStorage.getItem("name1")) {
  player1.innerHTML = `${localStorage.getItem("name1")}: `;
}
if (localStorage.getItem("name2")) {
  player2.innerHTML = `${localStorage.getItem("name2")} : `;
}
// localStorage.clear()
// sessionStorage.clear()
