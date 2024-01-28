let boxes = document.querySelectorAll(".box1");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let num1 = document.querySelector(".player1 span");
let num2 = document.querySelector(".player2 span");
let val1, val2;
// console.log(boxes);
player1 = true;
// boxes[0].innerHTML = "x";
document.addEventListener("click", function (e) {
//   console.log(e.target);
  if (e.target.innerHTML === "") {
    if (player1 == true) {
      e.target.innerHTML = "x";
      player1 = false;
    } else {
      e.target.innerHTML = "o";
      player1 = true;
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
    //   console.log("enter");
      console.log(val1);
      sessionStorage.setItem("winer1",parseInt(num1.innerHTML)+1);
      location.reload();
    }
  }
  function o(one, two, three) {
    if (
      (boxes[one].innerHTML == "o" &&
        boxes[two].innerHTML == "o" &&
        boxes[three].innerHTML) == "o"
    ) {
    sessionStorage.setItem("winer2",parseInt(num2.innerHTML)+1)
      location.reload();
    }
  }
});
if (sessionStorage.getItem("winer1")) {
//   console.log("test");
  num1.innerHTML = sessionStorage.getItem("winer1");
}
if (sessionStorage.getItem("winer2")) {
    // console.log("test");
  num2.innerHTML = sessionStorage.getItem("winer2");
}
// localStorage.clear()