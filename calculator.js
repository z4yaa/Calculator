const delgets = document.getElementById("delgets");
let firstnumb = 0;
let secondnumb = 0;
let action = null;
let hariul = 0;

const soundEffect = new Audio("./tap.mp3");

const ustgah = () => {
  soundEffect.currentTime = 2;
  soundEffect.play();
  delgets.textContent = "0";
  firstnumb = 0;
  secondnumb = 0;
  action = null;
};
const bttn = () => {
  soundEffect.currentTime = 2;
  soundEffect.play();
};
const tseg = () => {
  soundEffect.currentTime = 2;
  soundEffect.play();
};
const uildelHiih = (uildel) => {
  soundEffect.currentTime = 2;
  soundEffect.play();
  action = uildel; // action = "/"
  delgets.textContent = delgets.textContent + uildel;
  console.log(action);
};

const buttons = (too) => {
  soundEffect.currentTime = 2;
  soundEffect.play();
  if (action !== null) {
    secondnumb = secondnumb * 10 + too;
    delgets.textContent = secondnumb;
  } else {
    firstnumb = firstnumb * 10 + too;
    delgets.textContent = firstnumb;
  }
  console.log(firstnumb);
  console.log(secondnumb);
};
const hariu = () => {
  soundEffect.currentTime = 2;
  soundEffect.play();
  if (action === "+") {
    hariul = firstnumb + secondnumb;
    delgets.textContent = hariul;
    action = null;
    firstnumb = hariul;
    secondnumb = 0;
  } else if (action === "-") {
    hariul = firstnumb - secondnumb;
    delgets.textContent = hariul;
    action = null;
    firstnumb = hariul;
    secondnumb = 0;
  } else if (action === "/") {
    hariul = firstnumb / secondnumb;
    delgets.textContent = hariul;
    action = null;
    firstnumb = hariul;
    secondnumb = 0;
  } else if (action === "x") {
    hariul = firstnumb * secondnumb;
    delgets.textContent = hariul;
    action = null;
    firstnumb = hariul;
    secondnumb = 0;
    // } else if (action === "/") {
    //   hariul = firstnumb / 0;
    //   delgets.textContent = Error;
    // }
    console.log(hariul);
  }
};
