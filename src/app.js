/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let ArrPalo = ["♦", "♥", "♠", "♣"];

  let ArrNum = [
    "As",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let LargoArrPalo = ArrPalo.length;
  let ArrPaloTotal = ArrPalo[Math.floor(Math.random() * LargoArrPalo)];
  let RandArrPalo = ArrPaloTotal;
  console.log(LargoArrPalo);
  console.log(RandArrPalo);
  //let LargoArrNum = ArrNum.length;
  let LargoArrNum = ArrNum.length;

  let RandArrNum = ArrNum[Math.floor(Math.random() * LargoArrNum)];
  console.log(LargoArrNum);
  console.log(RandArrNum);

  if (RandArrPalo == "♦" || RandArrPalo == "♥") {
    document.getElementById("up").style.color = "red";
    document.getElementById("down").style.color = "red";
    //
  } else {
    document.getElementById("up").style.color = "black";
    document.getElementById("down").style.color = "black";
  }

  let up = document.getElementById("up");
  up.innerHTML = RandArrPalo;

  let center = document.getElementById("center");
  center.innerHTML = RandArrNum;

  let down = document.getElementById("down");
  down.innerHTML = RandArrPalo;
};
